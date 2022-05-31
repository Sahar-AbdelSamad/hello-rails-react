Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'greetings/index'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
