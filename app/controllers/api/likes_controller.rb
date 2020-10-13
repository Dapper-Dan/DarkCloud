class Api::LikesController < ApplicationController
    def create
        @like = Like.new(like_params)
        if @like.save
          render json: ['Liked'], status: 200
        else
          render json: ['Could not like'], status: 422
        end
      end
    
      def destroy
        @like = Like.find_by(like_params)
        if @like.destroy
          render json: ['Unliked'], status: 200
        else
          render json: ['Could not unlike'], status: 422
        end
      end

    private
    def like_params
        params.require(:like).permit(:user_id, :song_id)
    end

end