@songs.each do |song|
    json.set! song.id do
        puts song
        json.extract! song, :name, :id
    end
end