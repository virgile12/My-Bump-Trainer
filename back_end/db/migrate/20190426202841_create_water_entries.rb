class CreateWaterEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :water_entries do |t|
      t.integer :volume
      t.datetime :drunk_at
      t.references :user, foreign_key: true, index: true
      t.timestamps
    end
  end
end
