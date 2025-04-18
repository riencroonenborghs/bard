# frozen_string_literal: true

class RadioController < ApplicationController
  def index
    @tracks = Track.includes(album: :artist).order("RANDOM()").limit(15)

    respond_to do |format|
      format.json {
        render json: { data: RadioJsonRenderer.render(tracks: @tracks).json } 
      }
      format.html { render nothing: true }
    end
  end
end
