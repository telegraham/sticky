helpers do 

  def logged_in?
    !!logged_in_user_id
  end

  def logged_in_user_id
    session[:user_id]
  end 

  def logged_in_user
    User.find_by(id: logged_in_user_id)
  end

  def log_in!(user_id)
    session[:user_id] = user_id
  end 

end