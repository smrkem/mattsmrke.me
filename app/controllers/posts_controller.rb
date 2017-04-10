class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      flash[:notice] = "Successfully created post!"
      redirect_to posts_path
    else
      flash[:alert] = "Error creating post"
      render :new
    end
  end

  def edit
    find_post
  end

  def update
    find_post
    if @post.update_attributes(post_params)
      flash[:notice] = "Successfully updated post!"
      redirect_to post_path(@post)
    else
      flash[:alert] = "Error updating post"
      render :edit
    end
  end

  def show
    find_post
  end

  def destroy
    find_post
    if @post.destroy
      flash[:notice] = "Successfully deleted post!"
      redirect_to posts_path
    else
      flash[:alert] = "Error deleting post"
      render :edit
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
