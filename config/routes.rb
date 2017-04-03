Rails.application.routes.draw do
  resources :events
  root 'dashboard#index'
  namespace :api do
    resources :events
  end
end
