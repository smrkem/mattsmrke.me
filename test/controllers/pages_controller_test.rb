require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get "/"
    assert_response :success
  end

  test "should get projects" do
    get "/projects"
    assert_response :success
  end

  test "should get courses" do
    get "/courses"
    assert_response :success
  end

end
