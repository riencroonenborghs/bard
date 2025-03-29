class CreateArtists < ActiveRecord::Migration[7.1]
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :last_fm_mbid
      t.string :last_fm_url
      t.string :last_fm_image

      t.timestamps
    end

    add_index :artists, :name, unique: true
  end
end
