class Api::SessionsController < ApplicationController


    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
        else
            render json: ["Credentials are invalid. Try again."], status: 401
        end
    end

    def destroy
        if current_user
            logout
        else
            render json: ["No one is signed in"], status 404
        end
    end


end