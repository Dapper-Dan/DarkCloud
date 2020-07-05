class AddUsernameToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :display_name, :string, null: false
  end
end
