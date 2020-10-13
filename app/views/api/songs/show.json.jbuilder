json.extract! @song, :display_name, :title, :id, :music, :genre, :songImage, :duration, :waveForm
json.songUrl url_for(@song.music)
json.pictureUrl url_for(@song.songImage)


# if @song.likes.length != 0 
#     puts ' hellllllooooo '
#     json.likes do
#         @song.likes.each do |like|
#             json.set! like.user_id do
#                 json.extract! like, :user_id, :song_id
#             end
#         end
#     end
# end
