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
}

function draw() {
  background(220);
  displayStats();
  displayPrice();
  displayInfo();
  theDelay(earnPassive);
}
function mouseClicked() {
  theMoney.money += theMoney.multi;
}
function keyTyped() {
  if (key === "m" && theMoney.money >= theMoney.themoney.multiCost * theMoney.multi) {
    theMoney.money -= theMoney.themoney.multiCost * theMoney.multi;
    theMoney.multi *= theMoney.priceMulti;
    theMoney.multiCost *= theMoney.priceMulti;
  }

  if (key === "p" && theMoney.money >= theMoney.passiveCost * theMoney.passiveMulti) {
    theMoney.money -= theMoney.passiveCost * theMoney.passiveMulti;
    theMoney.passiveIncome += theMoney.passiveMulti;
    theMoney.passiveCost *= theMoney.passivePriceMulti;
  }
  if (key === "s"){
    secretHack();
  }
}
function earnPassive() {
  theMoney.money += theMoney.passiveIncome;
}
function displayStats() {
  function displayMoney() {
    textSize(disInfo.sizeText);
    text("Money: $" + theMoney.money, disInfo.sizeText, disInfo.sizeText);
    
  }
  function displayMulti() {
    text("Multiplyer: " + theMoney.multi + "x", disInfo.sizeText, disInfo.sizeText * 2);
    textSize(disInfo.sizeText);
  }
  function displayPassive() {
    textSize(disInfo.sizeText);
    text("Passive Income: $" + theMoney.passiveIncome + "/s", disInfo.sizeText, disInfo.sizeText * 3);
  }
  displayMoney();
  displayMulti();
  displayPassive();
}
function displayPrice() {
  function displayMultiPrice() {
    textSize(disInfo.sizeText);
    text("More Click Money: $" + theMoney.multi * theMoney.multiCost, disInfo.sizeText, disInfo.sizeText * 4);
  }
  function displayPassivePrice(textPos) {
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
    textSize(disInfo.sizeText);
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