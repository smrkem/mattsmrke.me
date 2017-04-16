require 'test_helper'

class PageFlowsTest < ActionDispatch::IntegrationTest
  test "homepage introduces me and links to projects and courses" do
    get root_path
    assert_response :success
    assert_select '#site-brand', "mattsmrke"
    assert_select 'div#description'
    assert_select "a[href=\"/projects\"]", "My Projects"
    assert_select "a[href=\"/courses\"]", "My Courses"
  end

  test "projects page has a list of projects" do
    get '/projects'
    assert_response :success
    assert_select 'div#projects'
  end

  test "courses page has a list of courses" do
    get '/courses'
    assert_response :success
    assert_select 'div#courses'
  end

  test "projects page has link to courses" do
    get '/projects'
    assert_select "a[href=\"/courses\"]", "My Courses"
  end

  test "courses page has a link to projects" do
    get '/courses'
    assert_select "a[href=\"/projects\"]", "My Projects"
  end
end
