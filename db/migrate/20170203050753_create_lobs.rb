class CreateLobs < ActiveRecord::Migration[5.0]
  def change
    create_table :lobs do |t|

      t.timestamps
    end
  end
end
