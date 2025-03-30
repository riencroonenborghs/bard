# frozen_string_literal: true

class SongsController < ApplicationController
  def index
    @songs = Track
      .includes(album: :artist)
      .order("artists.name asc, albums.title asc, tracks.file_title asc")
      .page(params[:page].to_i || 1)
  end
end
