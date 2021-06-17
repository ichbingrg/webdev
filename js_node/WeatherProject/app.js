//jshint esversion:6
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app=new express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
  //res.send("Server is up and running like usain bolt");
});

app.post("/",function(req,res){
  var city = req.body.city;
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=853a4ef4ef650aa6549af38240762134&units=metric";
  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data);
      const icon = "http://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png";
      console.log(weatherData);
      res.write("<h1>The temperature in "+ weatherData.name +", "+weatherData.sys.country+ " is " +weatherData.main.temp + " degrees Celsius</h1>");
      res.write("<p>The weather is currently : "+weatherData.weather[0].description+"</p>");
      res.write("<img src="+icon+">");
      res.send();
    });
  });
});

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
