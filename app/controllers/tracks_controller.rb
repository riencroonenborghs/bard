# frozen_string_literal: true

class TracksController < ApplicationController
  def index
    @tracks = Track
      .includes(album: :artist)
      .order("artists.name asc, albums.title asc, tracks.file_title asc")
      .page(params[:page].to_i || 1)
  end

  def show
    @track = Track.find_by(id: params[:id])
    flash.now[:notice] = "Playing #{@track.title || @track.file_title} by #{@track.artist.name}"
  end
end
