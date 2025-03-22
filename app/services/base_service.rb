# frozen_string_literal: true

module BaseService
  extend ActiveSupport::Concern
  include ActiveModel::Validations

  module ClassMethods
    def perform(...)
      new(...).tap(&:perform)
    end
  end

  def success?
    errors.none?
  end

  def failure?
    !success?
  end
end
