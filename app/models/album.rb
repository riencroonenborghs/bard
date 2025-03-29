# == Schema Information
#
# Table name: albums
#
#  id            :integer          not null, primary key
#  last_fm_image :string
#  last_fm_mbid  :string
#  last_fm_url   :string
#  title         :string           not null
#  year          :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  artist_id     :integer          not null
#
# Indexes
#
#  index_albums_on_artist_id            (artist_id)
#  index_albums_on_artist_id_and_title  (artist_id,title)
#
# Foreign Keys
#
#  artist_id  (artist_id => artists.id)
#
class Album < ApplicationRecord
  belongs_to :artist
  has_many :tracks, dependent: :destroy

  validates :title, presence: true
end
