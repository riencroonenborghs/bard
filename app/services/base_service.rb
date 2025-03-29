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

  private

  def add_error(message, field: :base)
    klass = self.class.to_s.split("::").last
    formatted_message = "[#{klass}] #{message}"
    errors.add(field, formatted_message)
    Rails.logger.error(formatted_message)
  end
end
