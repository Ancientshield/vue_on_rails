# frozen_string_literal: true

require_relative 'config/application'

Rake::Task['yarn:install'].clear
namespace :yarn do
  desc 'Disabling internal yarn install from Rails'
  task install: [:environment] do
    puts 'Disabling internal yarn install from Rails'
  end
end

Rake::Task['webpacker:yarn_install'].clear
namespace :webpacker do
  desc 'Disabling internal yarn install from Rails'
  task yarn_install: [:environment] do
    puts 'Disabling internal yarn install from Rails'
  end
end

Rails.application.load_tasks
