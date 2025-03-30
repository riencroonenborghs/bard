# frozen_string_literal: true

class ArtistHeaderComponent < ViewComponent::Base
  def initialize(artist:, size: :sm) # rubocop:disable Lint/MissingSuper
    @artist = artist
    @size = size
  end

  def text_size
    @size == :md ? "text-2xl" : ""
  end
end
