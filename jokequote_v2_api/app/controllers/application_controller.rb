class ApplicationController < ActionController::API

  include ActionController::ImplicitRender

  respond_to :json

  def auth_preflight
    head 200
  end

end
