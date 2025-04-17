# frozen_string_literal: true

class TracksJsonRenderer
  include BaseJsonRenderer
  
  def initialize(album:)
    @album = album
  end

  def render
    @json = @album.tracks.order(position: :asc).map do |track|
      TrackJsonRenderer.render(track: track).json
    end
  end
end
