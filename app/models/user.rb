class User < ApplicationRecord
    validates :email, :session_token, :display_name, presence: true, uniqueness: true
    validates :password_digest, :age, :gender, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    before_validation :ensure_session_token

    has_one_attached :profile_photo
    has_one_attached :cover_photo

    has_many :songs,
    primary_key: :display_name,
    foreign_key: :display_name,
    class_name: :Song

    has_many :liked_songs,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
