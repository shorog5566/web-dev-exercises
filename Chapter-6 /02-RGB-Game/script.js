var correct;

// now start game
function start() {

  var boxes = document.getElementsByClassName("box");

  // random colors
  for (var i = 0; i < boxes.length; i++) {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    var color = "rgb(" + r + "," + g + "," + b + ")";
    boxes[i].style.backgroundColor = color;
  }

  //  You can choose one correct
  correct = boxes[Math.floor(Math.random()*3)].style.backgroundColor;

  document.getElementById("rgbText").innerHTML = correct;
  document.getElementById("msg").innerHTML = "";
}

// check answer
function check(el) {

  if (el.style.backgroundColor == correct) {
    document.getElementById("msg").innerHTML = "Correct!";
  } else {
    document.getElementById("msg").innerHTML = "Try again";
  }

}
