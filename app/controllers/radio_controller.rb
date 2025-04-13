# frozen_string_literal: true

class RadioController < ApplicationController
  def index
    @tracks = Track.all.sample(15)
    # flash.now[:notice] = "Playing #{@track.title || @track.file_title} by #{@track.artist.name}"
  end
end
