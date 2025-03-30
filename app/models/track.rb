# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  file_format :integer          default("opus"), not null
#  file_title  :string           not null
#  path        :string           not null
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  album_id    :integer          not null
#
# Indexes
#
#  index_tracks_on_album_id                                 (album_id)
#  index_tracks_on_album_id_and_file_title                  (album_id,file_title)
#  index_tracks_on_album_id_and_file_title_and_file_format  (album_id,file_title,file_format)
#  index_tracks_on_album_id_and_title                       (album_id,title)
#  index_tracks_on_album_id_and_title_and_file_format       (album_id,title,file_format)
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

  # https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types
  CONTENT_TYPES = {
    OPUS => "audio/ogg",
    MP3 => "audio/mpeg",
    FLAC => "audio/flac",
    AAC => "audio/aac",
    WAV => "audio/wav",
    M4A => "audio/m4a"
  }.freeze

  validates :path, :file_title, presence: true
  validates :file_format, inclusion: { in: self.file_formats.keys }

  def artist
    album.artist
  end

  def content_type
    CONTENT_TYPES[file_format]
  end
end
