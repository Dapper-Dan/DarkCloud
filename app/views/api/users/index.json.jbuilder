@users.each do |user|
    json.set! user.id do
        json.extract! user, :display_name, :created_at, :profile_photo, :city, :country, :first_name, :last_name
        json.profilePicUrl user.profile_photo.attached? ? url_for(user.profile_photo) : false
    end
end