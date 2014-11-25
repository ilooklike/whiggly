class UsersController < ApplicationController
  before_action :redirect_to_root_if_logged_in, only: [:new, :create]
  
  def new
    @user = User.new
    render :new
  end
  
  def create
    @user = User.new(user_params)
    
    if @user.save
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end
  
  private
  
  def user_params 
    params.require(:user).permit(:username, :password)
  end
end
