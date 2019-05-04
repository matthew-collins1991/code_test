class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :business
      t.string :email
      t.string :telephone
      t.date :date
      t.time :time

      t.timestamps
    end
  end
end
