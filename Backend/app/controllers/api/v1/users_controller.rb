require 'pry'


class Api::V1::UsersController < ApplicationController

    def index
      @users = User.all
      render json: @users
    end

    def show
      render json: @user
    end

    def create
      @user = User.new(user_params)
      if @user.valid?
        @user.save
        puts 'hello'
        @user.make_post_req
        render json: @user, status: :accepted
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
        end
    end


    private

    def user_params
        params.require(:user).permit(:name, :business_name, :email, :telephone_number, :contact_time)
    end

  end
