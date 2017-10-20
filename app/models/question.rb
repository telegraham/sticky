class Question < ApplicationRecord
  has_many :options

  def json_hash
    {
      id: self.id.hash,
    }
  end
end
