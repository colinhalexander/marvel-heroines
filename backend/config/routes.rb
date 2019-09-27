Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :powers, only: [:index, :show]
  resources :heroines, only: [:index, :show, :create]
end
