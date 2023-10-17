// Project Title
// Tilden
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theClickBallArray = [];
let theMoney = {
  money: 0,
  passiveIncome: 0,
  multi: 1,
  passiveMulti: 1,
  multiCost: 5,
  passiveCost: 10,
  priceMulti: 2,
  passivePriceMulti: 3,
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
  let clickBall = makeBall();
  theClickBallArray.push(clickBall);
}

function draw() {
  background(220);
  displayStats();
  displayPrice();
  displayInfo();
  theDelay(earnPassive);
  displayBall();
}
function mouseClicked() {
  earnByClick();
}
function mousePressed(){
  ballClick();
}
function keyTyped() {
  if (key === "m" && theMoney.money >= theMoney.multiCost * theMoney.multi) {
    theMoney.money -= theMoney.multiCost * theMoney.multi;
    theMoney.multi *= theMoney.priceMulti;
    theMoney.multiCost *= theMoney.priceMulti;
  }

  if (key === "p" && theMoney.money >= theMoney.passiveCost * theMoney.passiveMulti) {
    theMoney.money -= theMoney.passiveCost * theMoney.passiveMulti;
    if (theMoney.passiveIncome <= 1){
      theMoney.passiveIncome += theMoney.passiveMulti;
    }
    else{
      theMoney.passiveIncome *= theMoney.passiveMulti * 2;
    }
    theMoney.passiveCost *= theMoney.passivePriceMulti;
  }
  if (key === "s"){
    secretHack();
  }
}
function earnByClick(){
  theMoney.money += theMoney.multi;
}
function ballClick(){
  let clickBall = makeBall();
  theClickBallArray.push(clickBall);
  makeBall();
}
function earnPassive() {
  theMoney.money += theMoney.passiveIncome;
}
function displayStats() {
  function displayMoney() {
    fill("black");
    textSize(disInfo.sizeText);
    text("Money: $" + theMoney.money, disInfo.sizeText, disInfo.sizeText);
    
  }
  function displayMulti() {
    fill("black");
    text("Multiplyer: " + theMoney.multi + "x", disInfo.sizeText, disInfo.sizeText * 2);
    textSize(disInfo.sizeText);
  }
  function displayPassive() {
    fill("black");
    textSize(disInfo.sizeText);
    text("Passive Income: $" + theMoney.passiveIncome + "/s", disInfo.sizeText, disInfo.sizeText * 3);
  }
  displayMoney();
  displayMulti();
  displayPassive();
}
function displayPrice() {
  function displayMultiPrice() {
    fill("black");
    textSize(disInfo.sizeText);
    text("More Click Money: $" + theMoney.multi * theMoney.multiCost, disInfo.sizeText, disInfo.sizeText * 4);
  }
  function displayPassivePrice(textPos) {
    fill("black");
    textSize(disInfo.sizeText);
    if (theMoney.passiveIncome <= 0) {
      text("Passive Income: $" + theMoney.passiveCost, disInfo.sizeText, disInfo.sizeText * textPos);
    } 
    else {
      text(
        "More Passive Income: $" + theMoney.passiveCost, disInfo.sizeText, disInfo.sizeText * textPos);
    }
  }
  displayMultiPrice();
  displayPassivePrice(5);
}
function displayInfo(){
  function displayInfoTitle(){
    fill("black");
    textSize(disInfo.sizeText);
    textStyle(BOLD);
    text("Instructions:", sizeText, sizeText * 6);
  }
  function displayTheInfo(){
    fill("black");
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
  money += 999999999;
}
function makeBall(size){
  let clickBall = {
    x: mouseX,
    y: mouseY,
    diameter: size,
    color: color(random(255), random(255), random(2550)),
  };
  return clickBall;
}
function growBall(){
  let grow;
  for (grow = 0; grow <=50; grow++){
    makeBall(grow);
  }
  for (grow >= 50; grow >=0; grow --){
    makeBall(grow);
  }
}
function displayBall(){
  for (let i = 0; i < theClickBallArray.length; i++){
    let theBall = theClickBallArray[i];
    fill(theBall.color);
    circle(theBall.x, theBall.y, theBall.diameter);
  }
}