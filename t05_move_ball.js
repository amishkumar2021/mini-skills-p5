/********************************************************/
//
/********************************************************/
var circleX = 0;
var circleY = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill (250,200, 200)
  ellipse(circleX, circleY, 55, 55);
  circleX =circleX + 1
  circleY =circleY + 1
}