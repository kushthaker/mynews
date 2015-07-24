class CreateDesigns < ActiveRecord::Migration
  def change
    create_table :designs do |t|
      t.string :image
      t.string :url
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
