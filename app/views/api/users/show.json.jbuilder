# json.partial! 'api/users/user', user: @user
json.extract! @user, :id, :display_name, :email, :age, :gender