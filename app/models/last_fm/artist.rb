# frozen_string_literal: true

module LastFm
  class Artist < Struct.new(:name, :mbid, :url, :images, :streamable, keyword_init: true)
    def self.parse(data:)
      new(
        name: data["name"],
        mbid: data["mbid"],
        url: data["url"],
        images: {}.tap do |ret|
          (data["image"] || []).each do |img|
            ret[img["size"]] = img["#text"]
          end
        end,
        streamable: data["streamable"]
      )
    end
  end
end
