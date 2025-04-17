# frozen_string_literal: true

class ArtistJsonRenderer
  include BaseJsonRenderer
  
  def initialize(artist:, albums: false)
    @artist = artist
    @albums = albums
  end

  def render
    @json = {
      id: @artist.id,
      name: @artist.name,
      url: Rails.application.routes.url_helpers.artist_path(@artist),
      cover_url: @artist.valid_image? ? @artist.last_fm_image : nil
    }
    return unless @albums

    @json.update(
      albums: @artist.albums.map do |album|
        AlbumJsonRenderer.render(album: album).json
      end
    )
  end
end
