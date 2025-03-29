# == Schema Information
#
# Table name: artists
#
#  id            :integer          not null, primary key
#  last_fm_image :string
#  last_fm_mbid  :string
#  last_fm_url   :string
#  name          :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_artists_on_name  (name) UNIQUE
#
class Artist < ApplicationRecord
  has_many :albums, dependent: :destroy
  has_many :tracks, through: :albums

  validates :name, presence: true
end
