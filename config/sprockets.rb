
# append assets paths
Sinatra::Application.sprockets_environment.append_path "assets/stylesheets"
Sinatra::Application.sprockets_environment.append_path "assets/javascripts"

# compress assets
Sinatra::Application.sprockets_environment.js_compressor  = :uglify
Sinatra::Application.sprockets_environment.css_compressor = :scss
