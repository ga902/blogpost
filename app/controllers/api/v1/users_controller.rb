class Api::V1::UsersController < ApplicationController
    def create
        user =User.new(user_params)
            if user.save
                render json:{sucess:"User Created"}
            else
                render json:{error:user.errors.full_messages}
            end
    end
    def index
        users=User.all
        render json:users
    end
    def login
        user =User.find_by(name: params[:name])
        if user && user.authenticate(params[:password]) 
            render json: { success: "Logged in successfully" }
        else
            render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end
    def show
        user =User.find(params[:id])
        render json:user
    end
  
    private
    def user_params
        params.require(:user).permit(:name, :password, :password_confirmation)
    end
end
