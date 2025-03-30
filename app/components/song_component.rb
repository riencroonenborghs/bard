# frozen_string_literal: true

class SongComponent < ViewComponent::Base
  def initialize(song:, details: false) # rubocop:disable Lint/MissingSuper
    @song = song
    @details = details
  end
end
