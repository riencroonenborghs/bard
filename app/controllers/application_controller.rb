class ApplicationController < ActionController::Base
  def artist_count
    Artist.count
  end
  helper_method :artist_count

  def artist_letters
    Artist.pluck(:name).sort.map(&:first).uniq
  end
  helper_method :artist_letters

  def album_count
    Album.count
  end
  helper_method :album_count

  def album_letters
    Album.pluck(:title).sort.map(&:first).uniq
  end
  helper_method :album_letters

  def song_count
    Track.count
  end
  helper_method :song_count
end
