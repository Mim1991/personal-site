Rails.application.routes.draw do
  root to: 'pages#home'
  resources :contacts, only: [:new, :create]
  get "thesearemymessages", to: "contacts#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "home/download_pdf"
end
