var level = 0;
var activeButton;
var sequence = [];
var button;
var i = 0;

$(document).keypress(function() {
  levelCreator();
  buttonFunc();
});

function buttonFunc() {
  $(".btn").click(function() {
    var audio = new Audio("sounds/" + this.id + ".mp3");
    audio.play();
    $(this).addClass("pressed");
    button = this;
    setTimeout(function() {
      $(button).removeClass("pressed");
    }, 100);
    conditionChecker(this.id);
    });
}

function conditionChecker(color) {
  if (color === "green" && sequence[i] === 0) {
    i++;
    if (i === sequence.length) levelCreator();
  } else if (color === "red" && sequence[i] === 1) {
    i++;
    if (i === sequence.length) levelCreator();
  } else if (color === "yellow" && sequence[i] === 2) {
    i++;
    if (i === sequence.length) levelCreator();
  } else if (color === "blue" && sequence[i] === 3) {
    i++;
    if (i === sequence.length) levelCreator();
  } else {
    gameOver();
  }
}

function levelCreator() {
  $(document).off();
  i = 0;
  level = level + 1;
  activeButton = Math.floor((Math.random() * 4));
  sequence.push(activeButton);

  $("h1").text("Level " + level);

  setTimeout(function() {
    switch (activeButton) {
      case 0:
        var audio0 = new Audio("sounds/green.mp3");
        audio0.play();
        $("#green").fadeOut(100).fadeIn(100);
        break;
      case 1:
        var audio1 = new Audio("sounds/red.mp3");
        audio1.play();
        $("#red").fadeOut(100).fadeIn(100);
        break;
      case 2:
        var audio2 = new Audio("sounds/yellow.mp3");
        audio2.play();
        $("#yellow").fadeOut(100).fadeIn(100);
        break;
      case 3:
        var audio3 = new Audio("sounds/blue.mp3");
        audio3.play();
        $("#blue").fadeOut(100).fadeIn(100);
        break;
      default:
        alert("Random generator is failing");
    }
  }, 500);
}

function gameOver() {
  level = 0;
  sequence = [];
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 100);
  $("h1").text("Game Over, Press Any Key to Restart");
  $(document).keypress(function() {
    levelCreator();
  });
}
