image = new Array(5);
image[0] = 'inspo1.jpg';
image[1] = 'inspo2.png';
image[2] = 'inspo3.jpg';
image[3] = 'inspo4.png';
image[4] = 'inspo7.jpg';

function random() {
  var random = Math.floor((Math.random() * 5));
  document.getElementById("image").src = image[random];
}

function classDays() {
  var d = new Date();
  if (d.getDay() == 1) { }
  else if (d.getDay() == 3 || d.getDay() == 5) {
    document.getElementById("button0").style.visibility = "hidden";
    document.getElementById("button1").style.visibility = "hidden";
    document.getElementById("button2").style.visibility = "hidden";
    document.getElementById("button3").style.visibility = "hidden";
  }
  else if (d.getDay() == 2 || d.getDay() == 4) {
    document.getElementById("button4").style.visibility = "hidden";
    document.getElementById("button5").style.visibility = "hidden";
    document.getElementById("button6").style.visibility = "hidden";

  }
}
