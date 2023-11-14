// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
class Dog{
  constructor(name, color, breed, age, size){
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = breed;
    this.size = size;
  }
  bark(){
    console.log("Arf says" + this.name);
  }
}

let izzy = new Dog("Izzy", "white", "husky", 4, "big");
let rover = new Dog("Rover", "Yellow", "retreiver", 2, "big");

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
