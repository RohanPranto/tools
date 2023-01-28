//DETECTING BUTTON PRESS
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  })
}

//DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
   buttonAnimation(event.key);
});
// PRODUCE SOUND
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tomtom.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/clap.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/micro.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/shaker.mp3");
      audio.play();
      break;
    case "i":
      var audio = new Audio("sounds/openhat.mp3");
      audio.play();
      break;
      case "m":
      var audio = new Audio("sounds/bassdrum.mp3");
      audio.play();
      break;
  }
}
// DISPLAY ANIMATION
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}