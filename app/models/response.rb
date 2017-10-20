class Response < ApplicationRecord
  belongs_to :option
  belongs_to :user

  def json_hash
    {
      userId: (user_id.hash.abs / 10000000000000).floor,
      optionId: option_id.hash
    }
  end
end
