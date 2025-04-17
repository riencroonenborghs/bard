# frozen_string_literal: true

class AlbumsJsonRenderer
  include BaseJsonRenderer
  
  def initialize(albums:)
    @albums = albums
  end

  def render
    @json = @albums.map do |album|
      AlbumJsonRenderer.render(album: album, artist: true).json
    end
  end
end
