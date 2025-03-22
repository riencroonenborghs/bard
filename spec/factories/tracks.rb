# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  file_format :integer          default("opus"), not null
#  path        :string           not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  album_id    :integer          not null
#
# Indexes
#
#  index_tracks_on_album_id                            (album_id)
#  index_tracks_on_album_id_and_title                  (album_id,title)
#  index_tracks_on_album_id_and_title_and_file_format  (album_id,title,file_format)
#
# Foreign Keys
#
#  album_id  (album_id => albums.id)
#
FactoryBot.define do
  factory :track do
    album { nil }
    path { "MyString" }
    title { "MyString" }
    format { 1 }
  end
end
