# frozen_string_literal: true

class UsersController < ApplicationController
  def index; end

  def new; end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end