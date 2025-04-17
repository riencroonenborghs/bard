# frozen_string_literal: true

class ArtistsController < ApplicationController
  def index
    page = params[:page].to_i || 1
    @artists = Artist
      .includes(albums: :tracks)
      .order(name: :asc)
      .page(page)

    respond_to do |format|
      format.json {
        render json: { page: page, totalPages: @artists.total_pages, data: ArtistsJsonRenderer.render(artists: @artists).json } 
      }
      format.html { render nothing: true }
    end
  end

  def show
    @artist = Artist.includes(albums: :tracks).find(params[:id])

    respond_to do |format|
      format.json {
        render json: { data: ArtistJsonRenderer.render(artist: @artist, albums: true).json } 
      }
      format.html { render nothing: true }
    end
  end
end
