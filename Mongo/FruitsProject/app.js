const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is a required field"] // name is a compulsory parameter for the entry
  },
  rating: {
    type: Number,
    min: [1, "too low rating, min: 1"],
    max: [10, "too high rating, max : 10"]
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 9,
  review: "Pretty solid as a fruit"
});

//fruit.save(); // comment out after the initial save to avoid multiple instances

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema //Important: embedded and related Schemas
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating : 9,
  review:"great for the summer"
});
//pineapple.save();

const amy = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
})
//amy.save();

const papaya = new Fruit({
  name:"Papaya",
  rating: 8,
  review : "My Favourite"
})
//papaya.save()

const john = new Person({
  name: "John",
  age: 31,
  favouriteFruit: papaya
});

//john.save(); // comment out after the initial save to avoid multiple instances


//UPDATING JOHN'S FAV Fruit

const orange = new Fruit({
  name: "Orange",
  rating: 7,
  review: "Too sour"
});

Person.updateOne({"name" : "John"},{"favouriteFruit" : orange},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("John updated")
  }
})

//Will be replaced by Validation
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 5,
  review: "Nothing special"
});

//kiwi.save();


const banana = new Fruit({
  name: "Banana",
  rating: 6,
  review: "weird texture"
});

/*
//Inserting multiple entries at the same time
Fruit.insertMany([kiwi, orange, banana], function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Successfully saved two new fruits")
  }
})

*/

//READING FROM THE DATABASE

// Person.find(function(err, people){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(people)
//   }
// })

Fruit.find(function(err, fruits) {

  if (err) {
    console.log(err);
  } else {
    console.log(fruits) //Prints the whole array
  }
})


//DELETING ENTRIES
/*
Person.deleteMany({"name" : "Amy"},function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Johns have been deleted")
  }
})
*/

/*
Fruit.deleteOne({"name":"Apple2"}, function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Successfully deleted the document entry")
  }
  mongoose.connection.close();
})
*/
