class Option < ApplicationRecord
  belongs_to :question
  has_many :responses

  def json_hash
    {
      id: self.id.hash,
      listId: self.question_id.hash,
      stub: self.stub
    }
  end
end
