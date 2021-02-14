/********************************************************/
//
/********************************************************/
var circleX = 0;
var circleY = 0;
var speed = 3;
var height = 3;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill(250, 200, 200)
  ellipse(circleX, circleY, 55, 55);
  circleX = circleX + speed
  circleY = circleY + speed
  if (circleX >= 400) {
    speed = -3;
  } else if (circleX < 0) {
    speed = 3;
  }
  if (circleY >= 600) {
    height = -3;
  } else if (circleY < 0) {
    height = 3
  }


}

