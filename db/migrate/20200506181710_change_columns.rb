class ChangeColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :full_name
    add_column :users, :age, :integer, null: false
    add_column :users, :gender, :string, null: false

  end
end
