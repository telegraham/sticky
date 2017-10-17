class Response < ApplicationRecord
  belongs_to :option
  belongs_to :user

  def json_hash
    {
      userId: user_id,
      optionId: option_id
    }
  end
end
