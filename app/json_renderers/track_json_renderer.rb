# frozen_string_literal: true

class TrackJsonRenderer
  include BaseJsonRenderer
  
  def initialize(track:, album: false, artist: false)
    @track = track
    @album = album
    @artist = artist
  end

  def render
    @json = {
      id: @track.id,
      title: "#{@track.title || @track.file_title}",
      url: Rails.application.routes.url_helpers.track_path(@track),
      stream_url: Rails.application.routes.url_helpers.stream_track_path(@track),
      duration: @track.duration,
      file_format: @track.file_format,
      position: @track.position
    }

    @json.update(
      album: AlbumJsonRenderer.render(album: @track.album).json
    ) if @album

    @json.update(
      artist: ArtistJsonRenderer.render(artist: @track.album.artist).json
    ) if @artist
  end
end
