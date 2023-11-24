// Inheritance OOP

let particle;
let confetti;

function setup() {
  createCanvas(windowWidth, windowHeight);
  particle = new Particle (width/2, height/2);
  confetti = new Confetti(width/2, height/2);
}

function draw() {
  background(220);
  particle.update();
  particle.display();

}


class Particle{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 10;
  }
  update(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  display(){
    fill(255,0,255);
    circle(this.x, this.y, this.size);
  }
}
class Confetti extends Particle{
  constructor(x, y){
    super(x, y);
  }
  display(){
    fill(255,50,255);
    square(this.x, this.y, this.size);
  }
}