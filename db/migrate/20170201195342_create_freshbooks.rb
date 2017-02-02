class CreateFreshbooks < ActiveRecord::Migration[5.0]
  def change
    create_table :freshbooks do |t|

      t.timestamps
    end
  end
end
