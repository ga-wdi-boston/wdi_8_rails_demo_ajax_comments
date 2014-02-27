AjaxCommentDemo::Application.routes.draw do
  root to: 'comments#index'
  resources :comments
  resources :photos
end
