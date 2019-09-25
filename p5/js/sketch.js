function setup() {
  createCanvas(400, 400);
}

function draw() {
  //circle
  fill("#32CD32");
  stroke(0);
  strokeWeight(4);
  circle(200, 200, 100);
  //square
  noFill();
  stroke("#DC143C");
  strokeWeight(4);
  square(260, 150, 100);
  //triangle
  fill("#00BFFF");
  stroke("#e7f03a");
  strokeWeight(4);
  triangle(200, 260, 100, 390, 300, 390);
}
