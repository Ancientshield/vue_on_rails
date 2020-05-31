# frozen_string_literal: true

Rails.application.routes.draw do
  get 'users/index'
  get 'users/new'
  get 'user/index'
  get 'user/new'
  get 'home/index'
  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
