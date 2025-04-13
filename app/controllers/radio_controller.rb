# frozen_string_literal: true

class RadioController < ApplicationController
  def index
    @track = Track.all.sample
    flash.now[:notice] = "Playing #{@track.title || @track.file_title} by #{@track.artist.name}"
  end
end
