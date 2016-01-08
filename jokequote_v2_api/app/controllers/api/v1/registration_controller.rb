class Api::V1::RegistrationController < Devise::SessionsController

  include ActionController::ImplicitRender

  respond_to :json

end
