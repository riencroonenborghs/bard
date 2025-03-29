# frozen_string_literal: true

module LastFm
  class SearchArtists
    include BaseService

    METHOD = "artist.search"

    attr_reader :artists

    def initialize(artist_name:)
      @artist_name = ActiveSupport::Inflector.transliterate(artist_name)
    end

    def perform
      service = SendRequest.perform(method: METHOD, options: { artist: @artist_name })
      if service.success?
        @artists = service.data.dig("results", "artistmatches", "artist").map do |artist|
          LastFm::Artist.parse(data: artist)
        end
        return
      end

      add_error(service.errors.full_messages.to_sentence)
    end
  end
end
