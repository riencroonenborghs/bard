class CreateInputSources < ActiveRecord::Migration[7.1]
  def change
    create_table :input_sources do |t|
      t.string :path, null: false
      t.datetime :last_fetched
      t.boolean :active, default: true, null: false

      t.timestamps
    end
    
    add_index :input_sources, :path, unique: true
  end
end
