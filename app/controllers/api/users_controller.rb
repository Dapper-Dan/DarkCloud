class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def create
        puts 'usersconrtoller'
        @user = User.new(user_params)
    
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

    private

    def user_params
        puts params.inspect
        params.inspect
        params.require(:user).permit(:email, :password, :display_name, :age, :gender)
    end

end