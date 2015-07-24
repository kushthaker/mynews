class User < ActiveRecord::Base
has_many :articles
has_one :profile
  
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  
  include DeviseTokenAuth::Concerns::User

end
