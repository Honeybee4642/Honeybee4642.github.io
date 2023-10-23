// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let terrain = [];
let xOffset = 0;
let numberOfRect = 10000;
let theXOffset = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
}

function draw() {
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
    if(xOffset < numberOfRect){
      xOffset += theXOffset;
    }
    
  }
  if(keyIsDown(LEFT_ARROW)){
    if(xOffset > theXOffset){
      xOffset -= theXOffset;
    }
    
  }
  displayRectangles();

}

function displayRectangles(){
  for(let i = xOffset; i < width + xOffset; i++){
    let theRect = terrain[i];
    rect(theRect.x - xOffset, height - theRect.height, 1, theRect.height);
  }
}

function spawnRectangles(){
  let time = 0;
  for(let x = 0; x < numberOfRect; x++){
    let h = noise(time) * height;
    let theRect = {
      x: x,
      height: h,
    };
    terrain.push(theRect);
    time += 0.001;
  }
  
}
