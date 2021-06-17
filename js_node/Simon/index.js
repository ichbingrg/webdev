var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

//userclickedButtons
$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

//random button Sequence
function nextSequence() {
  userClickedPattern = [];
  level++;
  if (level > 0) {
    $("#level-title").text("Level " + level);
  }
  var a = Math.random();
  a = a * 4;
  var randomNumber = Math.floor(a);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  var selectedButton = $('#' + randomChosenColour);

  flash(selectedButton);
  playSound(randomChosenColour);
}

//flashing animation on the button
function flash(id) {
  $(id).fadeOut(200).fadeIn(200);
}

// palying sound for the buttons
function playSound(color) {
  var sound = new Audio("sounds/" + color + ".mp3");
  sound.play();
}

//animation for the button pressed by userChosenColor
function animatePress(currentColor) {
  $('#' + currentColor).addClass("pressed");

  setTimeout(function() {
    $('#' + currentColor).removeClass("pressed");
  }, 100);
}

//Step8- Check the User's answer against the game Sequence

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence(), 1000);
    }
  } else {
    console.log("fail");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    level = 0;
    gamePattern=[];
  }
}

$(document).keypress(function() {
  if (level == 0) {
    nextSequence();
  }
});
