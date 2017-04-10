require 'test_helper'

class PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get posts_path
    assert_response :success
  end

  test "should get new" do
    get new_post_path
    assert_response :success
  end

  test "should get edit" do
    get edit_post_path posts(:one)
    assert_response :success
  end
end
