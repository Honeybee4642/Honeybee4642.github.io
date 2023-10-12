// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let ballArray = [];
let time = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  theBall = spawnBall();
}

function draw() {
  background("white");
  noStroke();
  fill(theBall.color);
}

function spawnBall(){
  let theBall = {
    x: random(width),
    y: random(height),
    color: (random(255), random(255), random(255)),
    size: random(10, 55),
  };
}