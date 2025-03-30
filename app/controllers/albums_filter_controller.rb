# frozen_string_literal: true

class AlbumsFilterController < ApplicationController
  def index
    @filter = params[:filter]
    @albums = Album
      .order(title: :asc)
      .page(params[:page].to_i || 1)
      .where("lower(title) like ?", "#{@filter}%")
  end
end
