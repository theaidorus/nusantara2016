class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :image_full
      t.string :image_thumbnail
      t.string :username
      t.string :fullname
      t.string :caption
      t.string :link
      t.string :profile_picture
      t.integer :created_time
      t.integer :like_count
      t.integer :comment_count

      t.timestamps null: false
    end
  end
end
