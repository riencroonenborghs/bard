# frozen_string_literal: true

class AlbumComponent < ViewComponent::Base
  def initialize(album:) # rubocop:disable Lint/MissingSuper
    @album = album
  end
end
