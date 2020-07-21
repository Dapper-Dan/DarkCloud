@songs.each do |song|
    json.set! song.id do
        json.extract! song, :display_name, :title, :id, :music, :genre
        json.url url_for(song.music)
    end
end