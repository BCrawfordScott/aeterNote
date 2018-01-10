Rails.application.routes.draw do
  root 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :user, only: [ :create ]
    resource :session, only: [ :create, :destroy ]
    resources :notebooks, only: [ :index, :show, :create, :update, :destroy ]
    resources :notes, only: [ :index, :show, :create, :update, :destroy]
    resources :tags, only: [ :index, :show, :create, :update, :destory]
  end
end
