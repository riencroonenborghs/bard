# frozen_string_literal: true

module InputSources
  class ParseInputSource
    include BaseService

    def initialize(input_source:, recursive: true)
      @input_source = input_source
      @recursive = recursive
    end

    def perform
      return unless @input_source.active?

      fetch_files
      return unless success?

      parse_files
    end

    private

    def fetch_files
      fetcher = InputSources::FetchFiles.perform(input_source: @input_source, recursive: @recursive)
      if fetcher.success?
        @files = fetcher.files
        return
      end

      errors.add(:base, "Cannot fetch files: #{fetcher.errors.full_messages}")
    end

    def parse_files
      @files.each do |file|
        parser = InputSources::ParseFile.perform(file: file)
        next unless parser.success?
        
        artist = find_or_create_artist(
          artist_name: parser.artist_name
        )
        album = find_or_create_album(
          artist: artist,
          album_title: parser.album_title
        )
        find_or_create_track(
          path: file,
          album: album,
          file_title: parser.file_title,
          file_format: parser.file_format
        )
      end
    end

    def find_or_create_artist(artist_name:)
      @artists ||= {}
      @artists[artist_name] ||= begin
        artist = Artist.find_by(name: artist_name)
        return artist if artist

        artist = Artist.create!(name: artist_name)
        artist
      end
    end

    def find_or_create_album(artist:, album_title:)
      @albums ||= {}
      @albums[artist.name] ||= {}
      @albums[artist.name][album_title] ||= begin
        album = artist.albums.find_by(title: album_title)
        return album if album

        album = artist.albums.create!(title: album_title)
        album
      end
    end

    def find_or_create_track(path:, album:, file_title:, file_format:)
      return if album.tracks.exists?(title: file_title, file_format: file_format)

      track = album.tracks.build(
        path: path,
        file_title: file_title,
        file_format: file_format
      )
      return if track.invalid?

      track.save!
    end
  end
end
