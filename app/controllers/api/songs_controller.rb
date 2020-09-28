class Api::SongsController < ApplicationController
    def index
        @user = User.find_by(display_name: song_params[:display_name])
        if (@user)
            @songs = @user.songs
            render :index
        else
            render json: ["Can not find a user with that display name. Please try again"], status: 404
        end
    end


    def show
        @song = Song.find(params[:id])
      
        if (@song)
            render :show
        else
            render json: ["The song was not found."], status: 404
        end
    end

    def create
      
        @song = Song.new(song_params)
        if (@song.save)
            @songs = Song.all
            render :index
        else
            render json: @song.errors.full_messages, status: 422
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

    def bunch_o_songs
        @songs = Song.all
        render :bunch_songs
    end
    private
    def song_params
        puts params.inspect
        params.inspect
        params.require(:song).permit(:title, :display_name, :music, :genre, :songImage, :duration, :waveForm)
    end

end