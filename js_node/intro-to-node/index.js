//jshint esversion:6

var superheroes = require("superheroes");

var mySuperheroName = superheroes.random();

//Exercise : Generate some supervillain names and console.log superheroes vs supervillains

var villains = require("supervillains");

var villain = villains.random();

console.log(mySuperheroName+ " vs. "+ villain);
