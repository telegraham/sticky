get "/" do
  unless logged_in?
    @user = User.create()
    log_in!(@user.id)
  else
    @user = logged_in_user
  end
  @questions = Question.all
  erb :index
end