class CreateJokeContents < ActiveRecord::Migration
  def change
    create_table :joke_contents do |t|
      t.string :title
      t.text :content

      t.timestamps null: false
    end
  end
end
