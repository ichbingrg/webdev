//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = new express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/",function(req,res){
  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var bmi = w/(h*h);
  res.send("The BMI is : "+bmi);

});

app.listen(3000,function(){
  console.log("Listening to port 3000");
});
