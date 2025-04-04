# frozen_string_literal: true

module LastFm
  class Track < Struct.new(:duration, :name, :rank, keyword_init: true)
    def self.parse(data:)
      new(
        duration: data["duration"],
        name: data["name"],
        rank: data.dig("@attr", "rank")
      )
    end
  end
end
