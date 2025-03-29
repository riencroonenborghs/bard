# frozen_string_literal: true

class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def show
    @album = Album.includes(:artist, :tracks).find(params[:id])
  end
end
