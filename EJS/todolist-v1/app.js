//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
//using our own module date.js
const date = require(__dirname + "/date.js");


console.log(date.getDate());
console.log(date.getDay());
console.log(date.sayHello());


const app = new express();

//Entries Array with initial entries
const /*in const array new element can still be pushed in js*/ newEntries = ["Buy Food", "Cook Food", "Eat Food"]; // Array of new Entry in the input field of the frame: name = "newTodoItem"
const WorkItems = [];
//Adding EJS to the app, views folder necessary, reads the ejs file in it instead of the html
app.set('view engine', "ejs");

//Adding body-parser to the app
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//get request
app.get("/", function(req, res) {

  //let day = date.getDate();  // If you wish to get the whole date instead of just the day of the week like below
  let day = date.getDay();
  res.render("list", {ListTitle /*ListTitle is a variable defined in list.ejs*/: day,newListItems: newEntries}); // res.render only works in the get method
});


//post request
app.post("/", function(req, res) {
  let newEntry = req.body.newTodoItem;

  if (req.body.list === "Work") {
    WorkItems.push(newEntry);
    res.redirect("/work");
  } else {
    newEntries.push(newEntry);
    res.redirect("/");
  }
});


app.get("/work", function(req, res) {
  res.render("list", {
    ListTitle: "Work List",
    newListItems: WorkItems
  }); // render only works in get method
})

app.get("/about", function(req, res) {
  res.render("about");
})


app.listen(3000, function() {
  console.log("Server is using port 3000");
});
