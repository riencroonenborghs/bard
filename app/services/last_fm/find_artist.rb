# frozen_string_literal: true

module LastFm
  class FindArtist
    include BaseService

    METHOD = "artist.getInfo"

    attr_reader :artist

    def initialize(mbid:)
      @mbid = mbid
    end

    def perform
      service = SendRequest.perform(method: METHOD, options: { mbid: @mbid })
      if service.success?
        @artist = LastFm::Artist.parse(data: service.data.dig("artist"))
        return
      end

      add_error(service.errors.full_messages.to_sentence)
    end
  end
end
