// $("h1").click(function(){
//   $("h1").css("color","purple");
// })
//
// $("button").click(function(){
//   $("h1").css("color","purple");
// })

/*
$("input").keypress(function(event){
  $("h1").text(event.key);
});
*/
//
// $("h1").on("mouseover", function(){
//   $("h1").css("color","pink");
// })


// buttonanimation

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({ //only elements with a numeric value
    opacity : 0.5
  })
})
