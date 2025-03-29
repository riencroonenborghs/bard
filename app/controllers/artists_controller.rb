# frozen_string_literal: true

class ArtistsController < ApplicationController
  def index
    @artists = Artist.includes(albums: :tracks).order(name: :asc).page(params[:page].to_i || 1)
  end

  def show
    @artist = Artist.includes(albums: :tracks).find(params[:id])
  end
end
