const headerModal = document.querySelector("#header-modal");
const userNameModal = document.querySelector("#user-name-modal");
const bakingCompany = document.querySelector("#baking-company");
const donutClicker = document.querySelector("#donut-clicker");
const contactInfo = document.querySelector("#contact-info");
const image = document.querySelector("#img");
let headerModalText = document.querySelector(".header-modal-text");
const userName = document.querySelector("#btn-user-name");
const btnClose = document.querySelectorAll(".close");
const clickArea = document.querySelector("#click-area");
let totalDonuts = document.querySelector(".total-donut-count");
const donutImage = document.querySelector("#donut-img");
const autoClickerGreenDiv = document.querySelector("#auto-clicker-green");
const autoClickerBlueDiv = document.querySelector("#auto-clicker-blue");
const autoClickerRedDiv = document.querySelector("#auto-clicker-red");
const greenDonutPerSecond = document.querySelector(".green-donut-per-second");
const blueDonutPerSecond = document.querySelector(".blue-donut-per-second");
const redDonutPerSecond = document.querySelector(".red-donut-per-second");
const priceGreenClicker = document.querySelector(".price-green-clicker");
const priceBlueClicker = document.querySelector(".price-blue-clicker");
const priceRedClicker = document.querySelector(".price-red-clicker");
const totalGreenClicker = document.querySelector(".total-green-clicker");
const totalBlueClicker = document.querySelector(".total-blue-clicker");
const totalRedClicker = document.querySelector(".total-red-clicker");
const divAutoClickers = document.querySelectorAll(".auto-clickers");
const optionsButton = document.querySelectorAll(".options");
const totalDonutsPerSecond = document.querySelector(".total-donuts-per-second");
const buyButton = document.querySelector("#buy-button");
const sellButton = document.querySelector("#sell-button");

let donutCount = 9000;
let autoClickers = {
  green: 0,
  blue: 0,
  red: 0
};
let autoClickerCost = {
  green: 100,
  blue: 200,
  red: 300
};
let optionValue = 1;
let isBuy = true;

bakingCompany.onclick = function() {
  headerModal.style.display = "block";
  headerModalText.innerHTML = "Fred the Baker is tired of making real donuts and is ready to retire. He needs our help to keep his love of donuts alive. He wants you to create a game that uses button clicks to create virtual donuts for the world to enjoy.";
}

donutClicker.onclick = function() {
  headerModal.style.display = "block";
  // image.src = this.src;
  headerModalText.innerHTML = "The inspiration for this game is donut clicker.";
}

contactInfo.onclick = function() {
  headerModal.style.display = "block";
  // image.src = this.src;
  headerModalText.innerHTML = "You can contact me at 443-477-8160 or send me an email at ggybzz2297@gmail.com";
}

userName.onclick = function() {
  userNameModal.style.display = "block";
}

btnClose.forEach((btn) => {
  btn.addEventListener("click", function() {
    headerModal.style.display = "none";
    userNameModal.style.display = "none";
  });
});

window.onclick = function(event) {
  if (event.target == headerModal) {
    headerModal.style.display = "none";
  } 
  else if(event.target == userNameModal) {
    userNameModal.style.display = "none";
  }
}

clickArea.onclick = function() {
  donutCount++;
  // donutImage.style.transform = "scale(0.9)";
  totalDonuts.innerText = donutCount;
}

optionsButton.forEach((option) => {
  option.addEventListener("click", function() {
    const attr = option.getAttribute("data-attr");
    optionValue = attr;
      document.querySelector(".optionOne").style.background = "#f0f0f0";
      document.querySelector(".optionTen").style.background = "#f0f0f0";
      document.querySelector(".optionFifty").style.background = "#f0f0f0";
      option.style.background = "#00FFFF";
  });
});

divAutoClickers.forEach((divAutoClicker) => {
  divAutoClicker.addEventListener("click", function() {
    const color = this.id.split("-").pop();
    if(isBuy) {
      autoClickers[color] += parseInt(optionValue);
      insertImage(color);
      donutCount -= Math.round(autoClickerCost[color] * parseInt(optionValue));
      autoClickerCost[color] += Math.round(autoClickerCost[color] * .10);
    }
    else {
      autoClickers[color] -= parseInt(optionValue);
      removeImage(color);
      donutCount += (Math.round(autoClickerCost[color] * .455)) * parseInt(optionValue);
      autoClickerCost[color] -= Math.round(autoClickerCost[color] * .09);
    }
  });
});

buyButton.onclick = function() {
  buyButton.style.background = "#00FFFF";
  sellButton.style.background = "#f0f0f0";
  isBuy = true;
}

sellButton.onclick = function() {
  sellButton.style.background = "#00FFFF";
  buyButton.style.background= "#f0f0f0";
  isBuy = false;
}

function insertImage(color){
  const divElement = document.querySelector(`#${color}`);
  const img = document.createElement("img");
  img.setAttribute("data", optionValue);
  if(optionValue == 1) {
    if(color === "green") img.src = "img/balbasaur.png";
    else if(color === "blue") img.src = "img/blastoise.png";
    else if(color === "red") img.src = "img/charizard.png";
    img.style.height = "30px";
    img.style.width = "30px";
    img.style.padding = "5px";
  }
  else if(optionValue == 10) {
    if(color === "green") img.src = "img/balbasaur.png";
    else if(color === "blue") img.src = "img/blastoise.png";
    else if(color === "red")img.src = "img/charizard.png";
    img.style.height = "40px";
    img.style.width = "40px";
    img.style.padding = "5px";
  }
  else {
    if(color === "green") img.src = "img/balbasaur.png";
    else if(color === "blue") img.src = "img/blastoise.png";
    else if(color === "red")img.src = "img/charizard.png";
    img.style.height = "50px";
    img.style.width = "50px";
    img.style.padding = "5px";
  }
  divElement.appendChild(img);
}

function removeImage(color){
  const imageElement = document.querySelector(`#${color}`).querySelectorAll(`[data="${optionValue}"]`);
  imageElement[imageElement.length - 1].remove(imageElement);
}

setInterval(function () {
  donutCount += autoClickers.green + (autoClickers.blue * 5) + (autoClickers.red * 10);
}, 1000);

setInterval(function () {
  totalDonuts.innerHTML = donutCount;
  if(isBuy) {
    if(donutCount < (autoClickerCost.green * optionValue)) autoClickerGreenDiv.classList.add("disabled");
    else autoClickerGreenDiv.classList.remove("disabled");
    if(donutCount < (autoClickerCost.blue * optionValue)) autoClickerBlueDiv.classList.add("disabled");
    else autoClickerBlueDiv.classList.remove("disabled");
    if(donutCount < (autoClickerCost.red * optionValue)) autoClickerRedDiv.classList.add("disabled");
    else autoClickerRedDiv.classList.remove("disabled");
  }
  else {
    if(document.querySelector("#green").querySelector(`[data="${optionValue}"]`) == null ) autoClickerGreenDiv.classList.add("disabled");
    else autoClickerGreenDiv.classList.remove("disabled");
    if(document.querySelector("#blue").querySelector(`[data="${optionValue}"]`) == null ) autoClickerBlueDiv.classList.add("disabled");
    else autoClickerBlueDiv.classList.remove("disabled");
    if(document.querySelector("#red").querySelector(`[data="${optionValue}"]`) == null ) autoClickerRedDiv.classList.add("disabled");
    else autoClickerRedDiv.classList.remove("disabled");
  }

  priceGreenClicker.innerHTML = isBuy ? `x${optionValue} = ${Math.round(autoClickerCost.green) * optionValue}` 
    : autoClickers.green === 0 ? "" : `x${optionValue} = ${(Math.round(autoClickerCost.green) * optionValue) - (Math.round(autoClickerCost.green * .545) * optionValue)}`;
  greenDonutPerSecond.innerHTML = isBuy ? "+" + optionValue + " donuts per second"
    : autoClickers.green === 0 ? "" : "-" + optionValue + " donuts per second";
  totalGreenClicker.innerHTML = "Total auto clickers: " + autoClickers.green 
  priceBlueClicker.innerHTML = isBuy ? `x${optionValue} = ${Math.round(autoClickerCost.blue) * optionValue}`
    : autoClickers.blue === 0 ? "" : `x${optionValue} = ${(Math.round(autoClickerCost.blue) * optionValue) - (Math.round(autoClickerCost.blue * .545) * optionValue)}`;
  blueDonutPerSecond.innerHTML = isBuy ? "+" + 5 * optionValue + " donuts per second"
    : autoClickers.blue === 0 ? "" : "-" + 5 * optionValue + " donuts per second";
  totalBlueClicker.innerHTML = "Total auto clickers: " + autoClickers.blue;
  redDonutPerSecond.innerHTML = isBuy ? "+" + 10 * optionValue + " donuts per second"
    : autoClickers.red === 0 ? "" : "-" + 10 * optionValue + " donuts per second";
  priceRedClicker.innerHTML = isBuy ? `x${optionValue} = ${Math.round(autoClickerCost.red) * optionValue}`
    : autoClickers.red === 0 ? "" : `x${optionValue} = ${(Math.round(autoClickerCost.red) * optionValue) - (Math.round(autoClickerCost.red * .545) * optionValue)}`;
  totalRedClicker.innerHTML = "Total auto clickers: " + autoClickers.red;
  let donutsPerSecond = autoClickers.green + (autoClickers.blue * 5) + (autoClickers.red * 10);
  totalDonutsPerSecond.innerHTML = donutsPerSecond <= 1 ? donutsPerSecond + " donut per second"
    : donutsPerSecond + " donuts per second";
}, 100);