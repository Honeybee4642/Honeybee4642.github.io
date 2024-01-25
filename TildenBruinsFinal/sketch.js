// Project Title
// Tilden
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theBall = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  for (let someBall of theBall){
    someBall.display();
    someBall.move();
  }
}
function mousePressed(){
  let theBalls = new Ball(random(0, width),random(0, height));
  theBall.push(theBalls);
}

class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-7,7);
    this.dy = random(-7,7);
    this.size = random(5, 25);
    this.color = color(random(0,255), random(0,255), random(0,255));
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  move(){
    this.x += this.dx;
    this.y += this.dy;
  }
}
