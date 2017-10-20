get "/data.json" do
  return {
    questions: Question.all.map(&:json_hash),
    options: Option.all.map(&:json_hash),
    responses: Response.all.map(&:json_hash)
  }.to_json
end


post "/responses.json" do
  content_type :json
  if logged_in?
    JSON.parse(request.body.read).each do |option_hash|
      p option_hash
      @option = Option.find_by(stub: option_hash["optionStub"])
      if @option
        @option.responses.find_or_create_by(user_id: logged_in_user_id)
      end
    end  
  end
  {}.to_json
end