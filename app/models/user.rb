class User < ActiveRecord::Base
  has_many :albums
  has_many :photos, through: :albums
end
