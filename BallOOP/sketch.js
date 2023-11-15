
class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.radius = random(5, 30);
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  move(){
    this.x += this.dx;
    this.y += this.dy;
    if(this.y - this.radius < 0 || this.y - this.radius > height){
      this.dy *= -1;
    }
    if(this.x - this.radius < 0 || this.x - this.radius > width){
      this.dx *= -1;
    }
  }
  display(){
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius*2);
  }
  bounceOff(otherBall){
    let radiSum = this.radius + otherBall.radius;
    let distApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    if(radiSum > distApart){
      let tempX = this.dx;
      let tempY = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
    }
  }
}
let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  let theBall = new Ball(width/2, height/2);
  ballArray.push(theBall);
}

function draw() {
  background(220);
  for(let someBall of ballArray){
    someBall.move();
    for(let otherBall of ballArray){
      if(someBall !== otherBall){
        someBall.bounceOff(otherBall)
      }
    }
    someBall.display();
  }
}
function mousePressed(){
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}
