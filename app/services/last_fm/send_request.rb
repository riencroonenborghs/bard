# frozen_string_literal: true

module LastFm
  class SendRequest
    include BaseService

    # HOST = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json"
    HOST = "http://ws.audioscrobbler.com/2.0"

    attr_reader :data

    def initialize(method:, options: {})
      @method = method
      @options = options
      @api_key = ENV.fetch("LAST_FM_API_KEY")
    end

    def perform
      send_request
      return if failure?

      parse_response
    end

    private

    def build_path
      "#{HOST}?#{CGI.unescape(build_query)}"
    end

    def build_query
      {
        api_key: @api_key,
        method: @method,
        format: "json"
      }.merge(@options).to_query
    end

    def send_request
      headers = { "User-Agent" => "Bard/v.10" }
      @response = HTTParty.get(build_path, headers: headers, verify: false)
    rescue StandardError => e
      add_error(e.message)
    end

    def parse_response
      @data = JSON.parse(@response.body)
    rescue JSON::ParserError => e
      add_error(e.message)
    end
  end
end
