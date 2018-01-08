# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.find_by(email: 'pt@barnum.com').try(:destroy!)

User.create!([
  {email: 'pt@barnum.com', password: 'circus'}
])

Notebook.create!([
  {title: "History", user_id: User.last.id},
  {title: "Animals", user_id: User.last.id},
  {title: "Acts", user_id: User.last.id},
  {title: "Competition", user_id: User.last.id}
])

Note.create!([
  {title: "Summary", content: "Phineas Taylor Barnum (July 5, 1810 – April 7, 1891) was an American showman, politician, and businessman remembered for promoting celebrated hoaxes and for founding the Barnum & Bailey Circus (1871-2017)", user_id: User.last.id, notebook_id: User.last.notebooks.first.id },
  {title: "Jenny Lind", content: "Says there was never an affair...yeah right.", user_id: User.last.id, notebook_id: User.last.notebooks.first.id }
])
