AjaxCommentDemo::Application.routes.draw do
  root 'comments#index'
  resources :comments
end
