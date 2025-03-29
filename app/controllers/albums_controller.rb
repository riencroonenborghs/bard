# frozen_string_literal: true

class AlbumsController < ApplicationController
  def index
    @albums = Album.page(params[:page].to_i || 1)
  end

  def show
    @album = Album.includes(:artist, :tracks).find(params[:id])
  end
end
