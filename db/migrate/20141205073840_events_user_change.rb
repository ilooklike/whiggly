class EventsUserChange < ActiveRecord::Migration
  def change
    remove_column :events, :created_user
    add_column :events, :created_user_id, :integer, references: :user
  end
end
