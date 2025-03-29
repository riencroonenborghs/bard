# frozen_string_literal: true

class FindLastFmArtistJob < ApplicationJob
  queue_as :bard

  def perform(artist:)
    return if artist.last_fm_mbid

    service = LastFm::SearchArtists.perform(artist_name: artist.name)
    return unless service.success?

    found = { distance: 1_000, artist: nil }
    service.artists.each do |last_fm_artist|
      distance = Levenshtein.distance(artist.name, last_fm_artist.name)
      found = { distance: distance, artist: last_fm_artist } if distance < found[:distance]
    end
    return unless found[:artist]

    artist.update(
      last_fm_mbid: found[:artist].mbid,
      last_fm_url: found[:artist].url,
      last_fm_image: found[:artist].images["large"]
    )
  end
end
