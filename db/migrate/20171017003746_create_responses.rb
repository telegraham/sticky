class CreateResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
      t.column :user_id, :integer, null: false
      t.column :option_id, :integer, null: false
      t.timestamps
    end
    add_index :responses, [:user_id, :option_id], unique: true
  end
end
