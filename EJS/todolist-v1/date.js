//jshint esversion:6

//module.exports = getDate; //If you wish to only export one method i.e. getDate()

//For multiple methode extend module.exorts.*  like so:


module.exports.getDate = function(){
//line 7 to 15 is a solution from stackoverflow on how to get a formatted date on js
  const options = { weekday: 'long',
                  //year: 'numeric',
                  month: 'short',
                  day: 'numeric' };
  const today  = new Date();

  //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  //console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

  return (today.toLocaleDateString("en-DE", options)); // Saturday, September 17, 2016

};


exports.sayHello = function(){
  const str = "Hello !! ";

  return str;
};
//module.exports.sayHello = sayHello;



exports.getDay = function(){
  const options = { weekday: 'long'};
  const today  = new Date();

  //console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  const day = (today.toLocaleDateString("en-DE", options)); // Saturday, September 17, 2016
  //console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

  return day;
};
