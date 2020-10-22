class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        @user.profile_photo.attach(io: File.open(Rails.root.join('app', 'assets', 'images', 'gradient_left.png')), filename: 'gradient_left.png')
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    def show
        @user = User.find(params[:id])
        if (@user)
            render :show
        else
            render json: ["The user was not found."], status: 404
        end
    end


    def fetchUserInfo
        @user = User.find_by(display_name: user_params[:display_name])
        if (@user)
            render :show
        else
            render json: ["The user was not found."], status: 404
        end
    end

    def update
        @user = User.find(params[:id])
        @songs = @user.songs.map { |song| song}
        old_Display_Name = @user.display_name
        if @user.update(user_params)
            new_Display_Name = params[:user][:display_name]
            if new_Display_Name != old_Display_Name
                @songs.each do |song|
                    song.update({ display_name: new_Display_Name })
                end
            end
            # render 'api/songs/index'
            render :show
        else
            render json: song.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        puts params.inspect
        params.inspect
        params.require(:user).permit(:email, :password, :display_name, :age, :gender, :cover_photo, :profile_photo)
    end

end