# frozen_string_literal: true

class IconComponent < ViewComponent::Base
  def initialize(name:, size: 6, color: nil) # rubocop:disable Lint/MissingSuper
    @name = name
    @size = size
    @color = color
  end
end
