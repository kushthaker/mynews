class ArticlesController < ApplicationController

	def add_article
		@status = self.create()

		if @status == 200
			@message = 'Favorite article saved'
		else
			@message = 'Favorite article did not save'
		end

		@response = { :status => @status, :message => @message }
		render :json => @response
	end

	def create
		@user = User.find(params[:user_id])
		@article = @user.articles.create(article_params)

		if @article
			return 200
		else
			return 204
		end

	end
	

	private

	def article_params
		params.require(:article).permit(:user_id, :title, :url)
	end


end
