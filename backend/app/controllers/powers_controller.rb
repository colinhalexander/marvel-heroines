class PowersController < ApplicationController
    def index
        @powers = Power.all
        render json: @powers, include: :heroines
    end

    def show
        @power = Power.find(params[:id])
        render json: @power, include: :heroines
    end
end
