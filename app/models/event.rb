class Event < ActiveRecord::Base
  validates :title, :description, :start_time, :end_time, :category, 
            :longtitude, :latitude, presence: true
end
