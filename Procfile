web: bundle exec puma -C ./config/puma.rb
log: tail -f log/development.log
workers: bundle exec sidekiq -C config/sidekiq.yml
css: bin/rails tailwindcss:watch
# js: yarn build --watch
