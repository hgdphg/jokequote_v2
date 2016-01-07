class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :emails, :password
end
