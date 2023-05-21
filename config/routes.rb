Rails.application.routes.draw do
  root "home#index", as: :home
  get "/blog", to: "home#blog", as: :blog
end
