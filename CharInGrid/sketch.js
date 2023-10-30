// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let cellSize;
const GRIDSIZE = 50;
let player ={
  x: 0,
  y: 0,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genGrid(GRIDSIZE, GRIDSIZE);
  grid[player.y][player.x] = 9;
  if(height > width){
    cellSize = width/GRIDSIZE;
  }
  else{
    cellSize = height/GRIDSIZE;
  }
}

function draw() {
  background(220);
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
  }
  else if(key === "w"){
    movePlayer(0, -1);
  }
  else if(key === "a"){
    movePlayer(-1, 0);
  }
  else if(key === "s"){
    movePlayer(0, 1);
  }
  else if(key === "d"){
    movePlayer(1, 0);
  }
}
function movePlayer(x, y){
  if(player.x + x >=0 && player.x + x < GRIDSIZE && player.y + y >=0 && player.y + y < GRIDSIZE){
    if(grid[player.y + y][player.x + x] === 0){
      let tempX = player.x;
      let tempY = player.y
      player.x += x;
      player.y += y;
    }
  }
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
      else if (grid[y][x]===1){
        fill("black");
      }
      else if(grid[y][x]===9){
        fill("green");
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