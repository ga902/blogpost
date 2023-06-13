Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do 
      resources :blogs do
        resources :posts 
      end
    end
  end 
end
