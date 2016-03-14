require 'net/http'

class PhotosController < ApplicationController
  before_action :set_photo, only: [:show, :edit, :update, :destroy]

  # GET /photos
  # GET /photos.json
  def index

    tag = 'beach'
    uri = URI('https://api.instagram.com/v1/tags/'+tag+'/media/recent?access_token=2712978932.18b244b.2468e739bd7b49f8b306bfe183926918')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE # You should use VERIFY_PEER in production
    request = Net::HTTP::Get.new(uri.request_uri)
    res = http.request(request)

    @result = Array.new
    response = JSON.parse(res.body)['data']
    response.each do |r|
      @newPhotos = Photo.new 

      @newPhotos.image_full = r['images']['standard_resolution']['url']
      @newPhotos.image_thumbnail = r['images']['thumbnail']['url']
      @newPhotos.username = r['user']['username']
      @newPhotos.fullname = r['user']['full_name']
      @newPhotos.caption = r['caption']['text']
      @newPhotos.link = r['link']
      @newPhotos.profile_picture = r['user']['profile_picture']
      @newPhotos.created_time = r['created_time']
      @newPhotos.like_count = r['likes']['count']
      @newPhotos.comment_count = r['comments']['count']

      # @newPhotos.save!
      @result.push(@newPhotos)
    end

    # @photos = Photo.all
    render :json => @result

  end

  # GET /photos/1
  # GET /photos/1.json
  def show
  end

  # GET /photos/new
  def new
    @photo = Photo.new
  end

  # GET /photos/1/edit
  def edit
  end

  # POST /photos
  # POST /photos.json
  def create
    @photo = Photo.new(photo_params)

    respond_to do |format|
      if @photo.save
        format.html { redirect_to @photo, notice: 'Photo was successfully created.' }
        format.json { render :show, status: :created, location: @photo }
      else
        format.html { render :new }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /photos/1
  # PATCH/PUT /photos/1.json
  def update
    respond_to do |format|
      if @photo.update(photo_params)
        format.html { redirect_to @photo, notice: 'Photo was successfully updated.' }
        format.json { render :show, status: :ok, location: @photo }
      else
        format.html { render :edit }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /photos/1
  # DELETE /photos/1.json
  def destroy
    @photo.destroy
    respond_to do |format|
      format.html { redirect_to photos_url, notice: 'Photo was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_photo
      @photo = Photo.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def photo_params
      params.require(:photo).permit(:url)
    end
end
