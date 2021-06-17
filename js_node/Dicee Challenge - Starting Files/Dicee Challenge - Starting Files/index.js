// Dice1
var a =  Math.random();
a=a*6;
var randomNumber1 = (Math.floor(a))+1;

var randomImage1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

// Dice2
var b =  Math.random();
b=b*6;
var randomNumber2 = (Math.floor(b))+1;

var randomImage2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!"
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins!🚩"
}
else{
  document.querySelector("h1").innerHTML="Draw!"
}
