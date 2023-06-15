Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do 
      post '/users/login', to: 'users#login'
      resources :users 
      resources :blogs do
        resources :posts 
      end
      
    end
  end 
end
