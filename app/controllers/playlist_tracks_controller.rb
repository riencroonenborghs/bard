# frozen_string_literal: true

class PlaylistTracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
    flash.now[:notice] = "Added #{@track.title || @track.file_title} by #{@track.artist.name} to playlist"
  end
end
