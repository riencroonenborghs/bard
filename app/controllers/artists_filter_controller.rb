# frozen_string_literal: true

class ArtistsFilterController < ApplicationController
  def index
    @filter = params[:filter]
    @artists = Artist
      .includes(albums: :tracks)
      .order(name: :asc)
      .page(params[:page].to_i || 1)
      .where("lower(name) like ?", "#{@filter}%")
  end
end
