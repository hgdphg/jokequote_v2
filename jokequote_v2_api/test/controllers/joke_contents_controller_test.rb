require 'test_helper'

class JokeContentsControllerTest < ActionController::TestCase
  setup do
    @joke_content = joke_contents(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:joke_contents)
  end

  test "should create joke_content" do
    assert_difference('JokeContent.count') do
      post :create, joke_content: { content: @joke_content.content, title: @joke_content.title }
    end

    assert_response 201
  end

  test "should show joke_content" do
    get :show, id: @joke_content
    assert_response :success
  end

  test "should update joke_content" do
    put :update, id: @joke_content, joke_content: { content: @joke_content.content, title: @joke_content.title }
    assert_response 204
  end

  test "should destroy joke_content" do
    assert_difference('JokeContent.count', -1) do
      delete :destroy, id: @joke_content
    end

    assert_response 204
  end
end
