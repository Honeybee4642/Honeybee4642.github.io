// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Walker{
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = 5;
    this.size = 5;
  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  move(){
    let theChoice = random(100);
    if(theChoice < 25){
      this.y += this.speed;
    }
    else if(theChoice < 50){
      this.y -= this.speed;
    }
    else if(theChoice < 75){
      this.x -= this.speed;
    }
    else{
      this.x += this.speed;
    }
  }
}
let bob;
let rob;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
  bob = new Walker(width/2, height/2, "black");
  rob = new Walker(width/2, height/2, "white");
}

function draw() {
  for(let person of theWalkers){
    person.move();
    person.display();
  }
}
function mousePressed(){
  
}
