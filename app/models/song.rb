class Song < ApplicationRecord
    validates :title, :display_name, presence: true

   

    has_one_attached :music
    has_one_attached :songImage
    


    belongs_to :user,
    primary_key: :display_name,
    foreign_key: :display_name,
    class_name: :User

    has_many :likes,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: :Like
    
end