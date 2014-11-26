class AddLocToEvents < ActiveRecord::Migration
  def change
    add_column :events, :venue_title, :string
    add_column :events, :address, :string
    add_column :events, :longtitude, :float
    add_column :events, :latitude, :float
  end
end
