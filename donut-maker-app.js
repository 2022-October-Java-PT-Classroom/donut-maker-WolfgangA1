import DonutMaker from "./donut-maker";

let modal = document.getElementById("modal");
let modalTwo = document.getElementById("modalTwo");
let btn = document.getElementById("modalBtnOne");
let btnTwo = document.getElementById("modalBtnTwo");
let span = document.getElementsByClassName("close")[0];
let spanTwo = document.getElementsByClassName("closeTwo")[0];

let donutMaker = new DonutMaker();

btn.onclick = function () {
    modal.style.display = "block";
  };
  
  btnTwo.onclick = function () {
    modalTwo.style.display = "block";
  };
  
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  spanTwo.onclick = function () {
    modalTwo.style.display = "none";
  };


load();

function load() {
  addEventListeners();
}

function addEventListeners() {
  document
    .getElementById("Main-Click__Button")
    .addEventListener("click", mainButtonClick);
  document
    .getElementById("AutoClickerBuy-Click__Button")
    .addEventListener("click", buyAutoClicker);
  document
    .getElementById("MultiplierBuy-Click__Button")
    .addEventListener("click", buyClickMultiplier);
  document
    .getElementById("Restart-Click__Button")
    .addEventListener("click", restartButtonClick);

  document.getElementById("Donut-Count").innerHTML =
    "Donut Count: " + donutMaker.getDonutCount();
  document.getElementById("Click-Value").innerHTML =
    "Click Value: " + donutMaker.getCurrentClickValue();
  document.getElementById("AutoClicker-Cost").innerHTML =
    "Cost: " + donutMaker.getAutoClickerCost();
  document.getElementById("Multiplier-Cost").innerHTML =
    "Cost: " + donutMaker.getClickMultiplierCost();
}

// Click

function mainButtonClick() {
    donutMaker.addDonutCount(donutMaker.getCurrentClickValue());
  
    checkDonutCount();
  }


function buyClickMultiplier() {
  donutMaker.addMultiplierCount();
  document.getElementById("Multiplier-Count").innerHTML =
    "Owned Multiplier Count: " + donutMaker.getClickMultiplierCount();
  donutMaker.addDonutCount(-(donutMaker.getClickMultiplierCount()));
  donutMaker.updateClickMultiplierCost();
  donutMaker.updateCurrentClickValue();

  checkDonutCount();
}

function buyAutoClicker() {
  startAutoClick();

  donutMaker.addAutoClicker();
  document.getElementById("AutoClicker-Count").innerHTML =
    "Owned AutoClicker Count: " + donutMaker.getAutoClickerCount();
  donutMaker.addDonutCount(-(donutMaker.getAutoClickerCost()));
  donutMaker.updateAutoClickerCost();

  checkDonutCount();
}

function checkDonutCount() {
  if (donutMaker.getDonutCount() >= donutMaker.getAutoClickerCost()) {
    document.getElementById(
      "AutoClickerBuy-Click__Button"
    ).disabled = false;
  } else {
    document.getElementById(
      "AutoClickerBuy-Click__Button"
    ).disabled = true;
  }

  if (donutMaker.getDonutCount() >= donutMaker.getClickMultiplierCost()) {
    document.getElementById(
      "MultiplierBuy-Click__Button"
    ).disabled = false;
  } else {
    document.getElementById(
      "MultiplierBuy-Click__Button"
    ).disabled = true;
  }

  updateHtmlElements();
}

function updateHtmlElements() {
  document.getElementById("Donut-Count").innerHTML =
    "Donut Count: " + donutMaker.getDonutCount().toFixed(2);
  document.getElementById("Click-Value").innerHTML =
    "Click Value: " + donutMaker.getCurrentClickValue().toFixed(2);
  document.getElementById("AutoClicker-Cost").innerHTML =
    "Cost: " + donutMaker.getAutoClickerCost().toFixed(2);
  document.getElementById("Multiplier-Cost").innerHTML =
    "Cost: " + donutMaker.getClickMultiplierCost().toFixed(2);
}

function startAutoClick() {
  window.setInterval(() => {
    mainButtonClick();
  }, 1000);
}

function restartButtonClick() {
  window.location.reload();
}

export default DonutMaker;
