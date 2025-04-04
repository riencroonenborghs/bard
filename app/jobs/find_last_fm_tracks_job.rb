# frozen_string_literal: true

class FindLastFmTracksJob < ApplicationJob
  queue_as :bard

  def perform(album:)
    return unless album.last_fm_mbid.present?

    service = LastFm::FindTracks.perform(album_mbid: album.last_fm_mbid)
    return unless service.success?

    album.tracks.each do |track|
      match_track(last_fm_tracks: service.tracks, track: track)
    end
  end

  private

  def match_track(last_fm_tracks:, track:)
    found = { distance: 1_000, track: nil }
    last_fm_tracks.each do |last_fm_track|
      distance = Levenshtein.distance(track.file_title, last_fm_track.name)
      found = { distance: distance, track: last_fm_track } if distance < found[:distance]
    end
    found_track = found[:track]
    return unless found_track

    track.update(
      duration: found_track.duration,
      title: found_track.name,
      position: found_track.rank
    )
  end
end
