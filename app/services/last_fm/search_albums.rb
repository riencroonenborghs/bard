# frozen_string_literal: true

module LastFm
  class SearchAlbums
    include BaseService

    METHOD = "album.search"

    attr_reader :albums

    def initialize(artist_name:, album_title:)
      @artist_name = ActiveSupport::Inflector.transliterate(artist_name)
      @album_title = ActiveSupport::Inflector.transliterate(album_title)
    end

    def perform
      service = SendRequest.perform(method: METHOD, options: { album: @album_title, artist: @artist_name })
      if service.success?
        @albums = service.data.dig("results", "albummatches", "album").map do |album|
          LastFm::Album.parse(data: album)
        end
        return
      end

      add_error(service.errors.full_messages.to_sentence)
    end
  end
end
