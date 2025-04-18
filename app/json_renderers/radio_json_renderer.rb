# frozen_string_literal: true

class RadioJsonRenderer
  include BaseJsonRenderer
  
  def initialize(tracks:)
    @tracks = tracks
  end

  def render
    @json = @tracks.map do |track|
      RadioTrackJsonRenderer.render(track: track).json
    end
  end
end
