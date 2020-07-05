@songs.each do |song|
    json.set! song.id do
        puts song
        json.extract! song, :display_name, :title, :id
    end
end