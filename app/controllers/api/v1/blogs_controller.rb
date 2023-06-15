class Api::V1::BlogsController < ApplicationController

    def index
        blogs = Blog.includes(:posts).all

        render json:blogs
    end
    def show
        blog = Blog.find(params[:id])
        render json: blog
    end 
    def create
        blog =Blog.new(params_blog)
        if blog.save
            render json:{seccess:"Blog insreted successfully"}
        else
            render json:{error:blog.errors.full_messages}
        end
    end
    def update
        blog = Blog.find(params[:id])
        if blog.update(params_blog)
            render json:{sucess:"Blog updated successfully"}
        else
        render json:{error:blog.errors.full_messages}
        end
    end
    
    private

    def params_blog
        params.require(:blog).permit(:title,:body)
    end
end
