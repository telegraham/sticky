class Question < ApplicationRecord
  has_many :options

  def json_hash
    {
      id: self.id,
      name: self.name,
      subtitle: self.subtitle
    }
  end
end
