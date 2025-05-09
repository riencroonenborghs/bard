# frozen_string_literal: true

class AlbumsController < ApplicationController
  def index
    page = params[:page].to_i || 1
    @albums = Album
      .includes(:artist)
      .order(title: :asc)
      .page(page)

    respond_to do |format|
      format.json {
        render json: { page: page, totalPages: @albums.total_pages, data: AlbumsJsonRenderer.render(albums: @albums).json } 
      }
      format.html { render nothing: true }
    end
  end

  def show
    @album = Album.includes(:artist, :tracks).find(params[:id])

    respond_to do |format|
      format.json {
        render json: { data: AlbumJsonRenderer.render(album: @album, artist: true, tracks: true).json } 
      }
      format.html { render nothing: true }
    end
  end
end
