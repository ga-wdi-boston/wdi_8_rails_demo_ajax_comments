class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    respond_to do |format|
      format.html # does default without a block (index.html.erb)
      format.json { render json: @photos }
    end
  end
end
