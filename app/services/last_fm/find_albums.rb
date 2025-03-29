# frozen_string_literal: true

module LastFm
  class FindAlbums
    include BaseService

    METHOD = "album.search"

    attr_reader :albums

    def initialize(artist_name:, album_name:)
      @artist_name = artist_name
      @album_name = album_name
    end

    def perform
      service = SendRequest.perform(method: METHOD, options: { album: @album_name, artist: @artist_name })
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
