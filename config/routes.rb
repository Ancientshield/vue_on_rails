# frozen_string_literal: true

Rails.application.routes.draw do
  get 'static_pages/landing'
  get 'home/index'
  root 'static_pages#landing'
  # root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
