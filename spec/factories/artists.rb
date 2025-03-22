# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_artists_on_name  (name) UNIQUE
#
FactoryBot.define do
  factory :artist do
    name { "MyString" }
  end
end
