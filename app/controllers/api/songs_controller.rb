class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render "/api/songs/index"
  
    end

    def show
        @song = Song.find(params[:id])
      
        if (@song)
            render "/api/songs/show"
        else
            render json: ["The song was not found."], status: 404
        end
    end

    def create
     
        @song = Song.new(song_params)
        if (@song.save)
            @songs = Song.all
            render "/api/songs/index"
        end
    end

    def update
        song = Song.find(params[:id])
        if song.update(song_params)
            render json: ["Update was successful"], status: 200
        else
            render json: song.errors.full_messages, status: 422
        end
    end
    def destroy
        song = Song.find(params[:id])
        if song
            song.destroy
            render json: ["Song deleted."], status: 200
        else
            render json: ["The song was not found."], status: 404
        end
    end
    private
    def song_params
        params.require(:song).permit(:name)
    end

end