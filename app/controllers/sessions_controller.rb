class SessionsController < ApplicationController
  before_action :redirect_to_root_if_logged_in, only: [:new, :create]
  
  def new 
    render :new
  end
  
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
  
    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email and/or password"]
      render :new
    end
  end
  
  def destroy 
    sign_out!
    redirect_to new_session_url
  end  
end