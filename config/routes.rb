Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'


  get '/discover/', to: 'static_pages#root'
  get '/:display_name/', to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    get 'songs/bunch', to: 'songs#bunch_o_songs'
    get 'users/:display_name/fetchUserInfo', to: 'users#fetchUserInfo'

    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources  :songs, only: [:create, :index, :show, :destroy, :update]

    
  end
end
