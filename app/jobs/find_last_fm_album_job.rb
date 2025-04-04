# frozen_string_literal: true

class FindLastFmAlbumJob < ApplicationJob
  queue_as :bard

  def perform(album:)
    return if album.last_fm_mbid

    service = LastFm::SearchAlbums.perform(artist_name: album.artist.name, album_title: album.title)
    return unless service.success?

    found = { distance: 1_000, album: nil }
    service.albums.each do |last_fm_album|
      artist_distance = Levenshtein.distance(album.artist.name, last_fm_album.artist)
      album_distance = Levenshtein.distance(album.title, last_fm_album.name)
      distance = artist_distance + album_distance
      found = { distance: distance, album: last_fm_album } if distance < found[:distance]
    end
    return unless found[:album]

    album.update(
      last_fm_mbid: found[:album].mbid,
      last_fm_url: found[:album].url,
      last_fm_image: found[:album].images["large"]
    )

    FindLastFmTracksJob.perform_later(album: album)
  end
end
