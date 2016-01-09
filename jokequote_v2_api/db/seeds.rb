# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'admin', email: 'adin@g.com', password: 'admin')
User.create(username: 'mod', email: 'mod@g.com', password: 'mod')

JokeContent.create(title: "truyen so 1", content: "truyen so 1")
JokeContent.create(title: "truyen so 2", content: "truyen so 2")
JokeContent.create(title: "truyen so 3", content: "truyen so 3")
