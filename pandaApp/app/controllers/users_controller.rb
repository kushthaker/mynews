class UsersController < ApplicationController

	# before_action :authenticate_user!
	

	def create
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
		return params.require(:user).permit(:name, :email, :password, :password_confirmation)
	end

end
