# json.partial! 'api/users/user', user: @user
json.extract! @user, :id, :display_name, :email, :age, :gender, :profile_photo, :cover_photo, :city, :country, :first_name, :last_name
json.likes @user.liked_songs
json.profilePicUrl @user.profile_photo.attached? ? url_for(@user.profile_photo) : false
json.coverPicUrl @user.cover_photo.attached? ? url_for(@user.cover_photo) : false

if !defined?(@songs).nil?
    json.songs do
        @songs.each do |song|
            json.set! song.id do
                json.extract! song, :display_name, :title, :id, :music, :genre, :songImage, :duration, :waveForm
                json.songUrl url_for(song.music)
                json.pictureUrl song.songImage.attached? ? url_for(song.songImage) : false
                json.likes song.likes
            end
        end
    end
end


