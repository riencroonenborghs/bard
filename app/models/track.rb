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
class Track < ApplicationRecord
  belongs_to :album

  OPUS = "opus"
  MP3 = "mp3"
  FLAC = "flac"
  AAC = "aac"
  WAV = "wav"
  M4A = "m4a"

  enum :file_format, OPUS => 0, MP3 => 1, FLAC => 2, AAC => 3, WAV => 4, M4A => 5

  validates :path, :title, presence: true
  validates :file_format, inclusion: { in: self.file_formats.keys }

  def artist
    album.artist
  end
end
