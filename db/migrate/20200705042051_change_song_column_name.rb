class ChangeSongColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :songs, :name, :title
  end
end
