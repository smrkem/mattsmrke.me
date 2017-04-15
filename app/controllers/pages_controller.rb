class PagesController < ApplicationController
  def index
    @env_url = ENV['DATABASE_URL'] || 'pete'
  end

  def projects
  end

  def courses
  end
end
