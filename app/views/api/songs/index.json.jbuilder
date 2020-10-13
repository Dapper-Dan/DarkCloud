@songs.each do |song|
    json.set! song.id do
        json.extract! song, :display_name, :title, :id, :music, :genre, :songImage, :duration, :waveForm
        json.songUrl url_for(song.music)
        json.pictureUrl song.songImage.attached? ? url_for(song.songImage) : false
        json.likes song.likes
    end
end

