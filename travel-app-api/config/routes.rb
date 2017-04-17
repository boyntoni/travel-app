Rails.application.routes.draw do

  resources :trips, except: [:new, :edit] do
    resources :activities, except: [:new, :edit]
  end

  resources :registrations, only: :create
  resources :sessions, only: [:create, :destroy]
  
end
