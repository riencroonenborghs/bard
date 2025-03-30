# frozen_string_literal: true

class ArtistComponent < ViewComponent::Base
  def initialize(artist:) # rubocop:disable Lint/MissingSuper
    @artist = artist
  end
end
