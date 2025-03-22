class CreateTracks < ActiveRecord::Migration[7.1]
  def change
    create_table :tracks do |t|
      t.references :album, null: false, foreign_key: true
      t.string :path, null: false
      t.string :title, null: false
      t.integer :file_format, null: false, default: 0

      t.timestamps
    end

    add_index :tracks, [:album_id, :title]
    add_index :tracks, [:album_id, :title, :file_format]
  end
end
