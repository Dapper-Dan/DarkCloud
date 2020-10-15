@songs.each do |song|
    json.set! song.id do
        json.extract! song, :display_name, :title, :id, :music, :genre, :songImage, :duration, :waveForm
        json.songUrl url_for(song.music)
        json.pictureUrl song.songImage.attached? ? url_for(song.songImage) : false
       
        if(song.likes.length != 0)
            json.likes do
                song.likes.each do |like|
                    json.set! like.user_id do
                        json.extract! like, :user_id, :song_id
                    end
                end
            end
        else
            json.likes ({})
        end
    end
end

