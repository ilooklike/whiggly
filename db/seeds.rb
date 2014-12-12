# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



# lat = 37.769709
# lng = -122.435044
# latSpan = 37.807238 - 37.769709
# lngSpan = -122.407317 + 122.435044
#
# 20.times do
#   start_time = Faker::Time.forward(2)
#   Event.create(title: Faker::Hacker.noun + " " + Faker::Hacker.verb + " " + Faker::Hacker.noun,
#                description: Faker::Hacker.say_something_smart + Faker::Hacker.say_something_smart,
#                start_time: start_time,
#                end_time: start_time + 2.hours,
#                category: Faker::Hacker.noun,
#                cost: (rand * 100).round(2),
#                venue_title: Faker::App.name,
#                address: Faker::Address.street_address,
#                longtitude: lng + lngSpan * rand,
#                latitude: lat + latSpan * rand
#                )
# end

User.create(username: "tutufruity", password:"tutufruity")

big6 = User.create(username: "big6", password:"soawesome")

Event.create(title: "Where I Live",
  description: "I know, this is where I've been living since mom and dad died. Aunt Cass has been taking care of us for a while. Tadashi tricked me to visit San Fransokyo's Institute of Technology today. It was totally AWESOME! I might just go! ",
  imageURL: "http://img1.wikia.nocookie.net/__cb20140906034212/disney/images/2/28/San_Fransokyo_Cass's_Cafe.jpg",
  date: Date.new(2014, 11, 7), 
  category: "Big Hero 6",  
  venue_title: "Lucky Cat Cafe",
  address: "1206 Masonic Ave",
  longtitude: -122.445323,
  latitude: 37.7702605, 
  created_user: big6,  
)

Event.create(title: "Tadashi and His Friends",
  description: "Look what a bunch of dorks they are!",
  imageURL: "http://41.media.tumblr.com/1fa74e88283654d9e41954cd3a25e739/tumblr_ncnei3wS7U1tgdoovo1_500.jpg",
  date: Date.new(2014, 11, 9), 
  category: "Big Hero 6",  
  venue_title: "Lucky Cat Cafe",
  address: "1206 Masonic Ave",
  longtitude: -122.445217, 
  latitude: 37.770168, 
  created_user: big6,  
)

Event.create(title: "San Fransokyo's Amazing!",
  description: "I love being able to fly! The view is so fantastic!",
  imageURL: "http://turntherightcorner.files.wordpress.com/2014/09/big-hero-6-screenshot-san-fransokyo.jpg?w=1772",
  date: Date.new(2014, 11, 17), 
  category: "Big Hero 6",  
  venue_title: "Golden Gate Bridge",
  address: "Golden Gate Bridge",
  longtitude: -122.4792104,
  latitude: 37.8172418, 
  created_user: big6,  
)



Event.create(title: "We Flew!!!!!",
  description: "I am never taking the bus again! Baymax didn't know why he need to be able to fly. I had to convince him that it makes him a better care provider. It really does make me feel AWESOME! WOW! WOW!",
  imageURL: "http://s.newsweek.com/sites/www.newsweek.com/files/styles/embedded_full/public/2014/10/31/1107dt0219bighero604.jpg?itok=Ayb0FBDA",
  date: Date.new(2014, 11, 15), 
  category: "Big Hero 6",  
  venue_title: "Really High",
  address: "Over SF",
  longtitude: -122.454319, 
  latitude: 37.814454, 
  created_user: big6,  
)

Event.create(title: "Great Day in the City",
  description: "It's a great day to take out the evil guy!",
  imageURL: "http://www.movieviral.com/wp-content/uploads/2014/09/big-hero-6-san-fransokyo.jpg",
  date: Date.new(2014, 11, 20), 
  category: "Big Hero 6",  
  venue_title: "Bay Bridge View",
  address: "350 Mission",
  longtitude: -122.396482, 
  latitude: 37.790672, 
  created_user: big6,  
)

fatboy = User.create(username: "fatboy", password: "burgercake")

Event.create(title: "Fenton's Ice Cream",
  description: "Sometimes I can't believe we went to South America. It's hard to imagine doing anything else when the ice cream is this good :)",
  imageURL: "http://www.seeknewtravel.com/wp-content/uploads/2011/09/fenton-creamery-up-movie.jpg",
  date: Date.new(2009, 9, 7), 
  category: "Up",  
  venue_title: "Fenton's Creamery",
  address: "4226 Piedmont Ave",
  longtitude: -122.249951, 
  latitude: 37.827913,
  created_user: fatboy,  
)

Event.create(title: "Star Wars",
  description: "OMG! The movie was soooooooooo good!!! I can't believe we got the tickets for the opening day!",
  imageURL: "http://static.businessinsider.com/image/534c01b0ecad043c7e16b73c-400/the-grand-lake-theater-in-up-can-be-found-in-oakland-calif.jpg",
  date: Date.new(2009, 11, 7), 
  category: "Up",  
  venue_title: "Grand Lake Theatre",
  address: "3200 Grand Ave",
  longtitude: -122.247276,
  latitude: 37.811539, 
  created_user: fatboy,  
)

Event.create(title: "Carl",
  description: "I've been going wanting to get the badge for assisting the elderly. I finally met Carl today! He seems a little grumpy but maybe he'll let me assist him :P",
  imageURL: "http://hookedonhouses.net/wp-content/uploads/2011/08/Pixars-Up-house-with-picket-fence.jpg",
  date: Date.new(2009, 11, 7), 
  category: "Up",  
  venue_title: "Carl's House",
  address: "2226 6th St",
  longtitude: -122.2964517,
  latitude: 37.8642306, 
  created_user: fatboy,  
)

# Event.create(title: ""
#   description: "",
#   imageURL: "",
#   date: Date.new(2009, 11, 7),
#   category: "Up",
#   venue_title: "",
#   address: "",
#   longtitude: ,
#   latitude: ,
#   created_user: fatboy,
# )
#
# Event.create(title: ""
#   description: "",
#   imageURL: "",
#   date: Date.new(2009, 11, 7),
#   category: "Up",
#   venue_title: "",
#   address: "",
#   longtitude: ,
#   latitude: ,
#   created_user: fatboy,
# )
#
# Event.create(title: ""
#   description: "",
#   imageURL: "",
#   date: Date.new(2009, 11, 7),
#   category: "Up",
#   venue_title: "",
#   address: "",
#   longtitude: ,
#   latitude: ,
#   created_user: fatboy,
# )