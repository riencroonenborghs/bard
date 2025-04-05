# frozen_string_literal: true

class StreamTracksController < ApplicationController
  include ActionController::Live

  def show
    track = Track.find_by(id: params[:id])
    
    size = File.size(track.path)
    response.headers["Content-Type"] = track.content_type
    response.headers["Content-Range"] = "bytes #{size}/#{size}"
    response.headers["Content-Length"] = size
    # response.headers["Content-Disposition"] = "inline; #{track.file_title}"

    File.open(track.path, "rb") do |fp|
      loop do
        break if not buf = fp.gets(nil, 80)
        response.stream.write(buf)
        # response.stream.write(buf.unpack('H*'))
      end
    end

    response.stream.close
  end
end
