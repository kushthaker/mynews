class DesignsController < ApplicationController

	def add_article
		@status = self.create()

		if @status == 200
			@message = 'Favorite design saved'
		else
			@message = 'Favorite design did not save'
		end

		@response = { :status => @status, :message => @message }
		render :json => @response
	end

	def create
		@user = User.find(params[:user_id])
		@design = @user.designs.create(article_params)

		if @article
			return 200
		else
			return 204
		end
	end


end
