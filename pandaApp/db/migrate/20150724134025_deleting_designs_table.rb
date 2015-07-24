class DeletingDesignsTable < ActiveRecord::Migration
  def change
  	drop_table :designs
  end
end
