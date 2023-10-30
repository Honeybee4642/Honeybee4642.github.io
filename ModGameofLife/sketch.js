// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let cellSize;
const GRIDSIZE = 50;
let autoPlay = true;
let glitchSound;
function preload(){
  glitchSound = loadSound("glitchsound.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genGrid(GRIDSIZE, GRIDSIZE);
  if(height > width){
    cellSize = width/GRIDSIZE;
  }
  else{
    cellSize = height/GRIDSIZE;
  }
}

function draw() {
  background(220);
  if(autoPlay && frameCount % 10 === 0){
    grid = nextTurn();
  }
  displayGrid();
}

function mousePressed(){
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  toggleCell(x,y);
}
function keyTyped(){
  if(key === "r"){
    grid = genGrid(GRIDSIZE, GRIDSIZE);
  } 
  else if(key === "e"){
    grid = emptyGrid(GRIDSIZE, GRIDSIZE);
  }
  else if(key === "f"){
    grid = fillGrid(GRIDSIZE, GRIDSIZE);
    if(!glitchSound.isPlaying() && !autoPlay){
      glitchSound.loop();
    }
  }
  else if(key ===" "){
    grid = nextTurn();
  }
  else if(key === "a"){
    autoPlay = !autoPlay;
  }
}
function nextTurn(){
  let nextTurnGrid = emptyGrid(GRIDSIZE, GRIDSIZE);
  for(let y = 0; y < GRIDSIZE; y++){
    for(let x = 0; x < GRIDSIZE; x++){
      let neighbours = 0;
      for(let i = -1; i <= 1; i++){
        for(let j = -1; j <= 1; j++){
          if(y+i >=0 && y+i < GRIDSIZE && x+j >=0 && x+j < GRIDSIZE){
            neighbours += grid[y+i][x+j];
          }
        }
      }
      neighbours -= grid[y][x];
      if(grid[y][x] ===1){
        if(neighbours ===2 || neighbours ===3){
          nextTurnGrid[y][x] = 1;
        }
        else{
          nextTurnGrid[y][x] =0;
        } 
      }
    }
  }
  return nextTurnGrid;
}
function toggleCell(x, y){
  if(x >= 0 && x <= GRIDSIZE && y >= 0 && y <= GRIDSIZE){
    if(grid[y][x] === 1){
      grid[y][x] = 0;
    }
    else if(grid[y][x] === 0){
      grid[y][x] = 1;
    } 
  } 
}
function displayGrid(){
  for(let y =0 ; y < GRIDSIZE; y++){
    for(let x = 0; x < GRIDSIZE; x++){
      if (grid[y][x]===0){
        fill ("white");
      }
      if (grid[y][x]===1){
        fill(random(255),random(255), random(255));
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
function genGrid(cols, rows){
  let randomArray = [];
  for(let y = 0; y < rows; y++){
    randomArray.push([]);
    for(let x = 0; x < cols; x++){
      if(random(100) < 50){
        randomArray[y].push(0);
      }
      else{
        randomArray[y].push(1);
      }
    }
  }
  return randomArray;
}
function emptyGrid(cols, rows){
  let randomArray = [];
  for(let y = 0; y < rows; y++){
    randomArray.push([]);
    for(let x = 0; x < cols; x++){
      randomArray[y].push(0);
    }
  }
  return randomArray;
}
function fillGrid(cols, rows){
  let randomArray = [];
  for(let y = 0; y < rows; y++){
    randomArray.push([]);
    for(let x = 0; x < cols; x++){
      randomArray[y].push(1);
    }
  }
  return randomArray;
}