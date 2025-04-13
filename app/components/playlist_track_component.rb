# frozen_string_literal: true

class PlaylistTrackComponent < ViewComponent::Base
  def initialize(track:) # rubocop:disable Lint/MissingSuper
    @track = track
  end
end
