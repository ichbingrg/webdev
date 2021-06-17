//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>Hello Browser</h1>");
  console.log(request);
});
app.get("/contact", function(re1, res) {
  res.send("contact me at : <a>gsudip97@gmail.com</a>");
});
app.get("/about", function(req, res) {
  res.send("<h1>About:</h1><p>Owner : Sudip Gurung</p>" +
    "<p>Created: 09.03.2021, 10:30am</p>" +
    "<p>Location: Hamburg 22763, Germany</p> ");
});

app.get("/hobbies", function(req, res) {
  res.send("Hobbies : <ul><li>Watch Basketball</li> <li>learn new programming languages</li><li>Astrophysics</li></ul>");
});

app.listen(3000, function() {
  console.log("Server Started on Port 3000");
});
