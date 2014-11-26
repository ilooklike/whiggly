class AddConstraintEvent < ActiveRecord::Migration
  def change
    change_column :events, :longtitude, :float, null: false
    change_column :events, :latitude, :float, null: false
  end
end
