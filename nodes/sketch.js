

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
function mousePressed(){
  let thePoint = new MovingPoint(mouseX, mouseY);
  points.push(thePoint);
}
class MovingPoint{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.timeX = random(1000);
    this.timeY = random(1000);
    this.deltaTime = 0.01;
    this.reach = 150;
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, 10);
  }
  update(){
    let dx = noise(this.timeX);
    this.dx = map(dx,0, 1, -5, 5);
    let dy = noise(this.timeY);
    this.dy = map(dx,0, 1, -5, 5);
    this.x += this.dx;
    this.y += this.dy;
    this.timeX += this.deltaTime;
    this.timeY += this.deltaTime;
    if(this.x < 0){
      this.x += width;
    }
    if(this.x > width){
      this.x -= width;
    }
    if(this.y < 0){
      this.y += height;
    }
    if(this.y > height){
      this.y -= height;
    }
  }
  connectTo(pointsArray){
    for(let otherPoint of pointsArray){
      if(this !== otherPoint){
        
      }
    }
  }
}
