let points =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let point of points){
    point.connectTo(points);
    point.update();
  }
  for(let point of points){
    point.display();
  }
}
function mousePressed(){
  let thePoint = new MovingPoint(mouseX, mouseY);
  points.push(thePoint);
}
class MovingPoint{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.color = color(random(255), random(255), random(255));
    this.timeX = random(1000);
    this.timeY = random(1000);
    this.deltaTime = 0.01;
    this.reach = 150;
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius);
  }
  update(){
    let dx = noise(this.timeX);
    this.dx = map(dx, 0, 1, -5, 5);
    let dy = noise(this.timeY);
    this.dy = map(dy, 0, 1, -5, 5);
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
    let mouseDist = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDist < this.reach){
      let theSize = map(mouseDist, 0, this.reach, 30, 15);
      this.radius = theSize;
    }
    else{
      this.radius = 15;
    }
  }
  connectTo(pointsArray){
    for(let otherPoint of pointsArray){
      if(this !== otherPoint){
        if (dist(this.x, this.y, otherPoint.x, otherPoint.y) <
             this.reach) {
          stroke(this.color);
          line(this.x, this.y, otherPoint.x, otherPoint.y);
        }
      }
    }
  }
}
