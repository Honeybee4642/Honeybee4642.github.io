let theFireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,0,0);
  for(let i = theFireworks.length-1; i >= 0; i--){
    let particle = theFireworks[i];
    if(particle.isDead()){
      theFireworks.splice(i, 1);
    }
    else{
      particle.display();
    }
    particle.update();
  }
}

function mousePressed(){
  for(let i = 0; i < 100; i++){
    let dx = random(-5, 5);
    let dy = random(-5, 5);
    let particle = new Particle(mouseX, mouseY, dx, dy);
    theFireworks.push(particle);
  }
}

class Particle{
  constructor(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = 5;
    this.r = 255;
    this.g = 50;
    this.b = 255;
    this.alpha = 255;
  }
  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.size);
  }
  update(){
    this.x += this.dx;
    this.y += this.dy;
    this.alpha--;
  }
  isDead(){
    return this.alpha <= 0;
  }
}