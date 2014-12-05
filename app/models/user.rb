class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  attr_reader :password
  before_validation :ensure_session_token
  
  has_many(
    :created_events,
    foreign_key: :created_user_id,
    primary_key: :id,
    class_name: 'Event' 
  )
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    
    if !user.nil? && user.is_password?(password)
      user
    else
      nil
    end
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end
  
  private 
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
