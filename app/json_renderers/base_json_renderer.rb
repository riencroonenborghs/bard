# frozen_string_literal: true

module BaseJsonRenderer
  extend ActiveSupport::Concern

  module ClassMethods
    def render(...)
      new(...).tap(&:render)
    end
  end

  attr_reader :json
end
