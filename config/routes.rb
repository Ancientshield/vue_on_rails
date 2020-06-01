# frozen_string_literal: true

Rails.application.routes.draw do
  get 'static_pages/landing'
  get 'home/index'
  # root 'static_pages#landing'
  root 'home#index'
end
