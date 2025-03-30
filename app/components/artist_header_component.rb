# frozen_string_literal: true

class ArtistHeaderComponent < ViewComponent::Base
  def initialize(artist:, size: :sm) # rubocop:disable Lint/MissingSuper
    @artist = artist
    @size = size
  end

  def text_size
    case @size
    when :md
      "text-2xl"
    when :lg
      "text-3xl"
    when :xl
      "text-4xl"
    else
      ""
    end
  end
end
