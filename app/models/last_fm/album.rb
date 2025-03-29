# frozen_string_literal: true

module LastFm
  class Album < Struct.new(:name, :artist, :mbid, :url, :images, keyword_init: true)
    def self.parse(data:)
      new(
        name: data["name"],
        artist: data["artist"],
        mbid: data["mbid"],
        url: data["url"],
        images: {}.tap do |ret|
          (data["image"] || []).each do |img|
            ret[img["size"]] = img["#text"]
          end
        end
      )
    end
  end
end
