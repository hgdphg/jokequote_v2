class Api::V1::SessionController < Devise::SessionsController

  include ActionController::ImplicitRender

  respond_to :json

end
