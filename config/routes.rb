require "sidekiq/web"
require "sidekiq/cron/web"

Rails.application.routes.draw do
  mount Sidekiq::Web => "/sidekiq"

  resources :artists, only: [:index, :show] do
    collection do
      get "filter/:filter" => "artists_filter#index", as: :filter
    end
  end
  resources :albums, only: [:index, :show] do
    collection do
      get "filter/:filter" => "albums_filter#index", as: :filter
    end
  end
  resources :tracks, only: [:index, :show] do
    collection do
      get "filter/:filter" => "tracks_filter#index", as: :filter
    end
    member do
      get "stream" => "stream_tracks#show", as: :stream
    end
  end
  
  get "radio" => "radio#index"

  root "artists#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
