class Event < ActiveRecord::Base
  validates :title, :description, :start_time, :end_time, :category, 
            :longtitude, :latitude, presence: true
  
  def self.search(params)
    return Event.all if params.nil? 
    
    query_str, query_val = "", []
    if params["start_date"] != ""
      query_str += "start_time > ? AND " 
      query_val << params["start_date"]
    end
    
    if params["end_date"] != ""
      query_str += "end_time < ? AND " 
      query_val << params["end_date"]
    end
    
    if params["tag"] != ""
      query_str += "(category ILIKE ? OR title ILIKE ?)"
      2.times { query_val << "%" + params["tag"] + "%" }
    end

    Event.where(query_str.gsub(/ AND $/, ''), *query_val)
  end
end
