class CreateAlbums < ActiveRecord::Migration[7.1]
  def change
    create_table :albums do |t|
      t.references :artist, null: false, foreign_key: true
      t.string :title, null: false
      t.integer :year

      t.timestamps
    end

    add_index :albums, [:artist_id, :title]
  end
end
