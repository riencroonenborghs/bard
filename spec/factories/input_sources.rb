# == Schema Information
#
# Table name: input_sources
#
#  id           :integer          not null, primary key
#  active       :boolean          default(TRUE), not null
#  last_fetched :datetime
#  path         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_input_sources_on_path  (path) UNIQUE
#
FactoryBot.define do
  factory :input_source do
    path { "MyString" }
    last_fetched { "2025-03-23 08:33:23" }
    active { false }
  end
end
