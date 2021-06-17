//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = new express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/sleep.html");
});

app.post("/", function(req,res){
  var t1 = Number(req.body.t1);
  var t2 = Number(req.body.t2);
  if (t1>t2) t2 += 24;
  res.send("The amount of sleep you got is: "+ (t2-t1)+"hours");
});

app.listen(3000,function(){
  console.log("Listening to port 3000");
});
