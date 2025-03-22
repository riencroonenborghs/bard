# frozen_string_literal: true

module InputSources
  class Fetch
    include BaseService

    attr_reader :files

    def initialize(input_source:, recursive: true)
      @input_source = input_source
      @recursive = recursive
      @files = []
    end

    def perform
      return unless @input_source.active?

      walk_directory(@input_source.path)
      @input_source.touch(:last_fetched)
    end

    private

    def walk_directory(path)
      Dir["#{path}/*"].each do |dir_path|
        if @recursive && File.directory?(dir_path)
          walk_directory(dir_path)
        elsif File.file?(dir_path)
          @files << dir_path
        end
      end
    end
  end
end
