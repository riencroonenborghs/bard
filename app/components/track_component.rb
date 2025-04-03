# frozen_string_literal: true

class TrackComponent < ViewComponent::Base
  def initialize(track:, details: false) # rubocop:disable Lint/MissingSuper
    @track = track
    @details = details
  end
end
