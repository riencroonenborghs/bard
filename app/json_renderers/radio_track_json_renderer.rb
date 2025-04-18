# frozen_string_literal: true

class RadioTrackJsonRenderer
  include BaseJsonRenderer
  
  def initialize(track:)
    @track = track
  end

  def render
    @json = TrackJsonRenderer.render(track: @track, album: true, artist: true).json
  end
end
