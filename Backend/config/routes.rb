

  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
        resources :users
        post  '/',  to: 'users#create'
      end
    end
  end
