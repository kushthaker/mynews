class UsersController < ApplicationController

	# before_action :authenticate_user!
	
	def create
		@user = User.new(user_params)
		@profile = Profile.new(profile_params)
		@profile.user_id = @user.id
	end


	def index
		@users = User.all
	end


	def destroy
		@user = User.find(params[:id])
		@user.destroy
		respond_to do |format|
			format.html { redirect_to users_path}
		end
	end

	private

	def user_params
		return params.require(:user).permit(:email, :password, :password_confirmation)
	end


	def profile_params
		return params.require(:user).permit(:name)
	end


end
