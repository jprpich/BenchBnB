class Api::SessionsController < ApplicationController 
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render :show
    else
      render json: ["invalid credentials"], status: 422
    end
  end

  def destroy
    logout!
  end
end