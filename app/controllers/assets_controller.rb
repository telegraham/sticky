get "/assets/*" do
  env["PATH_INFO"].sub!("/assets", "")
  settings.sprockets_environment.call(env)
end