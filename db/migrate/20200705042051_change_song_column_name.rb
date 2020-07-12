class ChangeSongColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :songs, :name, :title
    add_column :songs, :genre, :string, null: false
    add_column :songs, :description, :string
  end
end
