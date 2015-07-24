class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :content
      t.string :url
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
