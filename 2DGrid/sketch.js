// Project Title
// Your Name
// Date

// let grid = [[1,0,0,1],[0,0,1,1],[1,1,0,1],[0,1,1,1]];
let grid;
let cellSize;
const GRIDSIZE = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = genGrid(GRIDSIZE, GRIDSIZE);
}

function draw() {
  background(220);
  displayGrid();
  if(height > width){
    cellSize = width/GRIDSIZE;
  }
  else{
    cellSize = height/GRIDSIZE;
  }
  
}

function mousePressed(){
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  toggleCell(x,y);
  toggleCell(x, y-1);
  toggleCell(x, y+1);
  toggleCell(x-1, y);
  toggleCell(x+1, y);
}
function keyTyped(){
  if(key === "r"){
    grid = genGrid(GRIDSIZE, GRIDSIZE);
  } 
  if(key === "e"){
    grid = emptyGrid(GRIDSIZE, GRIDSIZE);
  }
  if(key === "f"){
    grid = fillGrid(GRIDSIZE, GRIDSIZE);
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
      if (grid[y][x]===1){
        fill("black");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
function genGrid(cols, rows){
  let randomArray = [];
  for(let y = 0; y < cols; y++){
    randomArray.push([]);
    for(let x = 0; x < rows; x++){
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
  for(let y = 0; y < cols; y++){
    randomArray.push([]);
    for(let x = 0; x < rows; x++){
      randomArray[y].push(0);
    }
  }
  return randomArray;
}
function fillGrid(cols, rows){
  let randomArray = [];
  for(let y = 0; y < cols; y++){
    randomArray.push([]);
    for(let x = 0; x < rows; x++){
      randomArray[y].push(1);
    }
  }
  return randomArray;
}