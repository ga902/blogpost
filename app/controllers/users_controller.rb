class UsersController < ApplicationController
    def create
        user =User.new(user_params)
            if user.save
                render json:{sucess:"User Created"}
            else
                render json:{error:user.errors.full_messages}
            end
    end
end
