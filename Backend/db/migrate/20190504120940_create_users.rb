class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :business_name
      t.string :email
      t.string :telephone_number
      t.datetime :contact_time

      t.timestamps
    end
  end
end
