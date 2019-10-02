Rails.application.routes.draw do
  devise_for :users

  # Ici on définit que l'url de base ('/') renvoit le HTML dans app/views/pages/home.html.erb
  root to: 'pages#home'
  get '/produit', to: 'pages#produit'
  get '/bibliotheque', to: 'pages#bibliotheque'

  # On peut ajouter d'autres pages comme :
  # get "/michel", to: 'pages#michel'
end
