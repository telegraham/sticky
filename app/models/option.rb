class Option < ApplicationRecord
  belongs_to :question
  has_many :answers

  def json_hash
    {
      id: self.id,
      listId: self.question_id,
      name: self.name
    }
  end
end
