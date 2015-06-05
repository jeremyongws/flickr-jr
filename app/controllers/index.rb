enable :sessions

get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/login' do
  @user = User.find_by_username(params[:username])
  session[:id] = @user.id
  redirect to "/users/#{session[:id]}/albums"
end

get '/users/:user_id/albums' do
  @user = User.find(params[:user_id])
  @albums = Album.where(user_id: params[:user_id])
  erb :albums
end

get '/photo/new' do
  erb :post_photos
end

# get '/photo/:photo_id' do
#   @photo = Photo.find params[:photo_id]
#   erb :photo
# end

post '/photo' do
  if !Album.find_by_name(params[:album]).present?
    @album = Album.create(name: params[:album], user_id: session[:id])
  else
    @album = Album.where(name: params[:album], user_id: session[:id]).first
  end
  @photo = Photo.new(album_id: @album.id, file: params[:filename])
  @photo.save
  redirect to "/album/#{@album.id}/photos"
end

get '/album/:album_id/photos' do
  @album = Album.find(params[:album_id])
  @photos = @album.photos
  erb :photo
end