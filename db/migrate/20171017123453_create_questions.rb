class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.column :stub, :string, null: false
      t.column :name, :string, null: false
      t.column :subtitle, :string
    end
    add_index :questions, :stub, unique: true
  end
end
