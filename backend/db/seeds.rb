# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Power.destroy_all

p1 = Power.create({
    name: "Flight",
    description: "Like the birds do"
})
p2 = Power.create({
    name: "Super Strength",
    description: "Self-explanatory"
})
p3 = Power.create({
    name: "Invisibility",
    description: "Lets you be invisible"
})

Heroine.destroy_all

h1 = Heroine.create({
    name: "Alice",
    super_name: "WonderLady",
    power_id: 1
})
h2 = Heroine.create({
    name: "Jane",
    super_name: "LadyWonder",
    power_id: 2
})
h3 = Heroine.create({
    name: "Wanda",
    super_name: "Ghost",
    power_id: 3
})