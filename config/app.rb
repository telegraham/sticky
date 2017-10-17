
# install and require all dependencies
require 'sinatra/base'
require 'sprockets'
require 'uglifier'
require 'sass'
require 'coffee-script'
require 'execjs'

class MyApp < Sinatra::Base

  set :sprockets_environment, Sprockets::Environment.new

  # append assets paths
  sprockets_environment.append_path "assets/stylesheets"
  sprockets_environment.append_path "assets/javascripts"

  # compress assets
  sprockets_environment.js_compressor  = :uglify
  sprockets_environment.css_compressor = :scss

  # get assets
  get "/assets/*" do
    env["PATH_INFO"].sub!("/assets", "")
    settings.sprockets_environment.call(env)
  end

  get "/" do
    erb :index
  end

end