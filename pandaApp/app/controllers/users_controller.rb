class UsersController < ApplicationController
	
	def create_user
		@status = self.create()

		
		if @status == 201
			@message = 'User Created'
		else
			@message = 'User not created'
		end

		@response = { :status => @status, :message => @message }
		render :json => @response
	end

	def index
		@users = User.all 
	end

	def create
		@user = User.new(user_params)

		if @user.save
			return 201
		else
			return 205
		end

	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		respond_to do |format|
			format.html { redirect_to users_path, notice: 'User was successfully destroyed.' }
		end
	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :password)
	end

end
