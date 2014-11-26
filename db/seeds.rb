# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



lat = 37.769709
lng = -122.435044
latSpan = 37.807238 - 37.769709
lngSpan = -122.407317 + 122.435044

20.times do 
  start_time = Faker::Time.forward(2)
  Event.create(title: Faker::Hacker.noun + " " + Faker::Hacker.verb + " " + Faker::Hacker.noun,
               description: Faker::Hacker.say_something_smart + Faker::Hacker.say_something_smart, 
               start_time: start_time,  
               end_time: start_time + 2.hours,    
               category: Faker::Hacker.noun,    
               cost: (rand * 100).round(2),
               venue_title: Faker::App.name,
               address: Faker::Address.street_address,
               longtitude: lng + lngSpan * rand,
               latitude: lat + latSpan * rand                       
               )
end