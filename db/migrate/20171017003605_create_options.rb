class CreateOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :options do |t|
      t.column :stub, :string, null: false, uniqueness: true
      t.column :question_id, :integer, null: false
      t.column :name, :string, null: false
    end
    add_index :options, :stub, unique: true
  end
end
