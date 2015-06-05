class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |a|
      a.string :name
      a.integer :user_id
      a.timestamps
    end
  end
end
