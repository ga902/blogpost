class Api::V1::PostsController < ApplicationController
    before_action :set_blog
    def create
        @post = @blog.post.build(params_post)
        
        if @post.save
            render json:{seccess:"Post Created Successfully"}
        else
            render json:{error:@post.errors.full_messages}
        end

     end

     def index
        @posts = @blog.post.all
        render json:@posts
     end

    def show
        render json: @post 
    end

    def update
        if @post.update
            render json: {success:"Successfully updated"}
        else
            render json:{error:@post.errors.full_messages}
        end
    end
        
     private

     def set_blog
        @blog = Blog.find(params[:blog_id])
    end
      

     def set_post
        @post = @blog.post.find([params[:id]])
     end
     def params_post
        params.require(:post).permit(:title, :body);
    end
end
