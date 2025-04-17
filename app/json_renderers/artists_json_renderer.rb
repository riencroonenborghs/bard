# frozen_string_literal: true

class ArtistsJsonRenderer
  include BaseJsonRenderer
  
  def initialize(artists:)
    @artists = artists
  end

  def render
    @json = @artists.map do |artist|
      ArtistJsonRenderer.render(artist: artist).json
    end
  end
end
