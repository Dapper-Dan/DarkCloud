class Song < ApplicationRecord
    validates :title, :display_name, presence: true


    belongs_to :user,
    primary_key: :display_name,
    foreign_key: :display_name,
    class_name: :User
    
end