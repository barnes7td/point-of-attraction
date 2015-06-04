Rails.application.routes.draw do
  get 'home/index'
  get 'home/start'

  root to: 'home#index'
end
