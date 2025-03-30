# frozen_string_literal: true

class LetterFilterComponent < ViewComponent::Base
  def initialize(letters:, filter_path:, filter: nil) # rubocop:disable Lint/MissingSuper
    @letters = letters
    @filter_path = filter_path
    @filter = filter
  end
end
