# frozen_string_literal: true

module InputSources
  class ParseFile
    include BaseService

    attr_reader :artist_name, :album_title, :album_year, :file_title, :file_format

    def initialize(file:)
      @file = file
    end

    def perform
      parse_filename
      return unless success?

      parse_album
      return unless success?

      parse_artist
    end

    private

    def parse_filename
      @filename_remainder, filename = File.split(@file)
      return errors.add(:base, "No filename") unless filename

      @file_title, @file_format = filename.split(/(#{Track.file_formats.keys.join("|")})/)
      @file_title.chop!
    end

    def parse_album
      @album_remainder, album_title = File.split(@filename_remainder)
      return errors.add(:base, "No album title found") unless album_title

      if (matches = album_title.match(/(.*) \((\d+)\)/))
        @album_title = matches[1]
        @album_year = matches[2]
      else
        @album_title = album_title
      end
    end

    def parse_artist
      _, artist_name = File.split(@album_remainder)
      return errors.add(:base, "No artist name found") unless artist_name

      @artist_name = artist_name
    end
  end
end
