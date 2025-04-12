# frozen_string_literal: true

class PlaylistTracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
  end
end
