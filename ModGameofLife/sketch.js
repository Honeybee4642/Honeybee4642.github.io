// Modified Game Of Life
// Tilden
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let cellSize;
const GRIDSIZE = 50;
let autoPlay = false;
let glitchSound;
let amongUs;
let amongUs2;
let amongUsSound;
let dSound;
let rSound;
function preload(){
  glitchSound = loadSound("glitchsound.mp3");
  amongUs = loadImage("RedImp.jpeg");
  amongUs2 = loadImage("Green.jpeg");
  amongUsSound = loadSound("amongUs.mp3");
  dSound = loadSound("slap.mp3");
  rSound = loadSound("rRoll.mp3");
  glitchSound.setVolume(4.5);
  amongUsSound.setVolume(5);
  dSound.setVolume(5.5);
  rSound.setVolume(5.7);
}

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.9);
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
  if(autoPlay && frameCount % 3 === 0){
    grid = nextTurn();
    dSound.stop();
  }
  displayGrid();
}

function mouseClicked(){
  let y = Math.floor(mouseY/cellSize);
  let x = Math.floor(mouseX/cellSize);
  let theRandomThing = random(1);
  let occur ={
    among: theRandomThing <= 0.25,
    among2: theRandomThing >= 0.75,
    normal: theRandomThing > 0.25 && theRandomThing < 0.75,
  };
  console.log(occur);
  if(occur.normal){
    toggleCell(x,y);
  }
  else if(occur.among){
    toggleAU(x,y);
    amongUsSound.play();
  }
  else if(occur.among2){
    toggleAU2(x,y);
  }
}
function keyTyped(){
  if(key === "r"){
    grid = genGrid(GRIDSIZE, GRIDSIZE);
  } 
  else if(key === "e"){
    grid = emptyGrid(GRIDSIZE, GRIDSIZE);
    glitchSound.stop();
    rSound.stop();
    dieSound();
  }
  else if(key === "f"){
    grid = fillGrid(GRIDSIZE, GRIDSIZE);
    if(!glitchSound.isPlaying() && !autoPlay){
      glitchSound.loop();
    }
  }
  else if(key === " "){
    grid = nextTurn();
    rSound.stop();
  }
  else if(key === "a"){
    autoPlay = !autoPlay;
  }
  else if(key === "i"){
    grid = fillAmong(GRIDSIZE, GRIDSIZE);
  }
  else if(key === "c"){
    // theDelay(1000, rSound);
    if(!rSound.isPlaying()){
      rSound.play();
    }
  }
}
function nextTurn(){
  rSound.stop();
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
      if(grid[y][x] === 1){
        if(neighbours === 2 || neighbours ===3){
          nextTurnGrid[y][x] = 1;
        }
        else{
          nextTurnGrid[y][x] = 0;
        } 
      }
      if(grid[y][x] === 0){
        if(neighbours === 3){
          nextTurnGrid[y][x] = 1;
        }
        else{
          nextTurnGrid[y][x] = 0;
        }
      }
      if(grid[y][x] === 2){
        nextTurnGrid[y][x] = 0;
      }
      if(grid[y][x] === 3){
        neighbours = 9;
        nextTurnGrid[y][x] = neighbours;
        nextTurnGrid[y][x] = 1;
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
    else if(grid[y][x] === 2){
      grid[y][x] = 1;
    } 
    else if(grid[x][y] === 3){
      grid[y][x] = 1;
    }
  } 
}
function toggleAU(x, y){
  if(x >= 0 && x <= GRIDSIZE && y >= 0 && y <= GRIDSIZE){
    if(grid[y][x] === 1){
      grid[y][x] = 2;
    }
    else if(grid[y][x] === 0){
      grid[y][x] = 2;
    }
    else if(grid[y][x] === 2){
      grid[y][x] = 1;
    } 
    else if(grid[x][y] === 3){
      grid[y][x] = 1;
    } 
  }
}
function toggleAU2(x, y){
  if(x >= 0 && x <= GRIDSIZE && y >= 0 && y <= GRIDSIZE){
    if(grid[y][x] === 1){
      grid[y][x] = 3;
    }
    else if(grid[y][x] === 0){
      grid[y][x] = 3;
    }
    else if(grid[y][x] === 3){
      grid[y][x] = 1;
    }
    else if(grid[x][y] === 2){
      grid[y][x] = 1; 
    } 
  }
}
function displayGrid(){
  for(let y = 0 ; y < GRIDSIZE; y++){
    for(let x = 0; x < GRIDSIZE; x++){
      if (grid[y][x]===0){
        fill("white");
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if(grid[y][x]===1){
        fill(random(255),random(255), random(255));
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if(grid[y][x]===2){
        image(amongUs, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if(grid[y][x]===3){
        image(amongUs2, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      // rect(x*cellSize, y*cellSize, cellSize, cellSize);
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
      dieSound();
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
function fillAmong(cols,rows){
  let randomArray = [];
  for(let y = 0; y < rows; y++){
    randomArray.push([]);
    for(let x = 0; x < cols; x++){
      randomArray[y].push(2);
    }
  }
  amongUsSound.play();
  return randomArray;
}
function dieSound(){
  if(!dSound.isPlaying()){
    dSound.play();
  }
}
// function theDelay(time, theSound){
//   let timePassed = 0;
//   if(millis() > timePassed + time){
//     theSound.play();
//     timePassed = millis();
//   }
//   else{
//     theSound.stop();
//   }
// }