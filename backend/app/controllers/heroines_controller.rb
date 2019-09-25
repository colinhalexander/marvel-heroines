class HeroinesController < ApplicationController
    def index
        @heroines = Heroine.all_heroine_data
        render json: @heroines
    end

    def show
        @heroine = Heroine.find(params[:id]).heroine_data
        render json: @heroine
    end

end
