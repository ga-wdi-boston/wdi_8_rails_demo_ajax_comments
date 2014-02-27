AjaxCommentDemo::Application.routes.draw do
  root to: 'home#index'
  resources :comments
  resources :photos
end
