# frozen_string_literal: true

module LastFm
  class FindTracks
    include BaseService

    METHOD = "album.getInfo"

    attr_reader :tracks

    def initialize(album_mbid:)
      @album_mbid = album_mbid
    end

    def perform
      service = SendRequest.perform(method: METHOD, options: { mbid: @album_mbid })
      if service.success?
        @tracks = (service.data.dig("album", "tracks", "track") || []).map do |track|
          track.is_a?(Hash) ? LastFm::Track.parse(data: track) : nil
        end.compact
        return
      end

      add_error(service.errors.full_messages.to_sentence)
    end
  end
end
