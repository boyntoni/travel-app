class AccountTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :planned_trips do |t|
      t.references :trip, foreign_key: true
      t.references :account, foreign_key: true
    end
  end
end
