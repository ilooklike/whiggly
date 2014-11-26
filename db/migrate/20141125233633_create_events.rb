class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.string :category, null: false
      t.float :cost, default: 0.0

      t.timestamps
    end
    
    add_index :events, :start_time
    add_index :events, :end_time
  end
end
