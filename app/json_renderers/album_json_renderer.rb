# frozen_string_literal: true

class AlbumJsonRenderer
  include BaseJsonRenderer
  
  def initialize(album:, artist: false)
    @album = album
    @artist = artist
  end

  def render
    @json = {
      id: @album.id,
      title: @album.title,
      url: Rails.application.routes.url_helpers.album_path(@album),
      year: @album.year,
      cover_url: @album.last_fm_image.blank? ? nil : @album.last_fm_image
    }
    return unless @artist

    @json.update(
      artist: ArtistJsonRenderer.render(artist: @album.artist).json
    )
  end
end
