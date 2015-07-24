class User < ActiveRecord::Base
	has_many :articles, dependent: :destroy
	has_many :designs, dependent: :destroy
end
