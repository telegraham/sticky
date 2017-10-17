get "/data.json" do
  return {
    questions: Question.all.map(&:json_hash),
    options: Option.all.map(&:json_hash),
    responses: Response.all.map(&:json_hash)
  }.to_json
end

# # get "/questions.json" do

# # end

# # get "/options.json" do

# # end

# # get "/responses.json" do

# # end

# post "/questions/:id/responses.json" do

# end