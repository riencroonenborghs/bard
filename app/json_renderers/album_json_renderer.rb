# frozen_string_literal: true

class AlbumJsonRenderer
  include BaseJsonRenderer
  
  def initialize(album:, artist: false, tracks: false)
    @album = album
    @artist = artist
    @tracks = tracks
  end

  def render
    @json = {
      id: @album.id,
      title: @album.title,
      url: Rails.application.routes.url_helpers.album_path(@album),
      year: @album.year,
      cover_url: @album.last_fm_image.blank? ? nil : @album.last_fm_image
    }

    @json.update(
      artist: ArtistJsonRenderer.render(artist: @album.artist).json
    ) if @artist

    @json.update(
      tracks: TracksJsonRenderer.render(album: @album).json
    ) if @tracks
  end
end
