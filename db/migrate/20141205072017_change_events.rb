class ChangeEvents < ActiveRecord::Migration
  def change
    remove_column :events, :end_time
    remove_column :events, :start_time
    remove_column :events, :cost
    add_column :events, :imageURL, :text
    add_column :events, :created_user, :integer, null: false
    add_column :events, :date, :date 
    
  end
end
