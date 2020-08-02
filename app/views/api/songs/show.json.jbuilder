json.extract! @song, :display_name, :title, :id, :music, :genre, :songImage
json.songUrl url_for(@song.music)
# json.pictureUrl url_for(@song.songImage)