// Project Title
// Tilden
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theMoney = {
  money: 0,
  passiveIncome: 0,
  multi: 1,
  passiveMulti: 1,
  multiCost: 5,
  passiveCost: 10,
};
let passiveEarn = {
  passiveDelay: 1000,
  timePassedEarn: 0,
  shouldAdd: true,
};
let disInfo = {
  sizeText: 15,
};
let multi = 1;
let passiveMulti = 1;
let passiveIncome = 0;
let money = 0;
let passiveCost = 10;
let multiCost = 5;
let sizeText = 15;
let passiveDelay = 1000;
let timePassedEarn = 0;
let shouldAdd = true;
function setup() {
  createCanvas(windowWidth, windowHeight);
  keyTyped();
}

function draw() {
  background(220);
  displayStats();
  displayPrice();
  displayInfo();
  theDelay(earnPassive);
}
function mouseClicked() {
  money += multi;
}
function keyTyped() {
  if (key === "m" && money >= multiCost * multi) {
    money -= multiCost * multi;
    multi = multi * 2;
    multiCost*=2;
  }

  if (key === "p" && money >= passiveCost * passiveMulti) {
    money -= passiveCost * passiveMulti;
    passiveIncome+=passiveMulti;
    passiveCost*=3;
  }
  if (key === "s"){
    secretHack();
  }
}
function earnPassive() {
  money += passiveIncome;
}
function displayStats() {
  function displayMoney() {
    textSize(sizeText);
    text("Money: $" + money, sizeText, sizeText);
    
  }
  function displayMulti() {
    text("Multiplyer: " + multi + "x", sizeText, sizeText * 2);
    textSize(sizeText);
  }
  function displayPassive() {
    textSize(sizeText);
    text("Passive Income: $" + passiveIncome + "/s", sizeText, sizeText * 3);
  }
  displayMoney();
  displayMulti();
  displayPassive();
}
function displayPrice() {
  function displayMultiPrice() {
    textSize(sizeText);
    text("More Click Money: $" + multi * multiCost, sizeText, sizeText * 4);
  }
  function displayPassivePrice(textPos) {
    textSize(sizeText);
    if (passiveIncome <= 0) {
      text("Passive Income: $" + passiveCost, sizeText, sizeText * textPos);
    } 
    else {
      text(
        "More Passive Income: $" + passiveCost, sizeText, sizeText * textPos);
    }
  }
  displayMultiPrice();
  displayPassivePrice(5);
}
function displayInfo(){
  function displayInfoTitle(){
    textSize(sizeText);
    textStyle(BOLD);
    text("Instructions:", sizeText, sizeText * 6);
  }
  function displayTheInfo(){
    textSize(sizeText);
    textStyle(NORMAL);
    text("Press M to buy more click money.", sizeText, sizeText * 7);
    text("Press P to buy passive income.", sizeText, sizeText * 8);
  }
  displayInfoTitle();
  displayTheInfo();
}
function theDelay(theFunction){
  if(millis() > timePassedEarn + passiveDelay){
    shouldAdd = true;
    timePassedEarn = millis();
  }
  else{ 
    shouldAdd = false;
  }
  if(shouldAdd){
    theFunction();
  }
}
function secretHack(){
  money += 1000000;
}