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
const priceGreenClicker = document.querySelector(".price-green-clicker");
const priceBlueClicker = document.querySelector(".price-blue-clicker");
const priceRedClicker = document.querySelector(".price-red-clicker");
const totalGreenClicker = document.querySelector(".total-green-clicker");
const totalBlueClicker = document.querySelector(".total-blue-clicker");
const totalRedClicker = document.querySelector(".total-red-clicker");
const divAutoClickers = document.querySelectorAll(".auto-clickers");

let donutCount = 190000;
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

divAutoClickers.forEach((divClicker) => {
  divClicker.addEventListener("click", function() {
    const color = this.id.split("-").pop();
    autoClickers[color]++;
    insertImage(color);
    donutCount = donutCount - Math.round(autoClickerCost[color]);
    autoClickerCost[color] += Math.round(autoClickerCost[color]) * .10;
  });
});

function insertImage(color){
  const divElement = document.querySelector(`#${color}`);
  const img = document.createElement("img");
  if(color === "green") img.src = "img/balbasaur.png";
  else if(color === "blue") img.src = "img/blastoise.png";
  else if(color === "red")img.src = "img/charizard.png";
  img.style.height = "50px";
  img.style.width = "50px";
  img.style.padding = "5px";
  divElement.appendChild(img);
}

setInterval(function () {
  let autoClicksPerSecond = 0;
  autoClicksPerSecond += autoClickers.green * 1;
  autoClicksPerSecond += autoClickers.blue * 2;
  autoClicksPerSecond += autoClickers.red * 3;
  donutCount += autoClicksPerSecond;
}, 1000);

setInterval(function () {
  totalDonuts.innerHTML = donutCount;
  priceGreenClicker.innerHTML = "Price: " + Math.round(autoClickerCost.green);
  totalGreenClicker.innerHTML = "Total purchased: " + autoClickers.green;
  priceBlueClicker.innerHTML = "Price: " + Math.round(autoClickerCost.blue);
  totalBlueClicker.innerHTML = "Total purchased: " + autoClickers.blue;
  priceRedClicker.innerHTML = "Price: " + Math.round(autoClickerCost.red);
  totalRedClicker.innerHTML = "Total purchased: " + autoClickers.red;
  if(donutCount < autoClickerCost.green) autoClickerGreenDiv.classList.add("disabled");
  else autoClickerGreenDiv.classList.remove("disabled");
  if(donutCount < autoClickerCost.blue) autoClickerBlueDiv.classList.add("disabled");
  else autoClickerBlueDiv.classList.remove("disabled");
  if(donutCount < autoClickerCost.red) autoClickerRedDiv.classList.add("disabled");
  else autoClickerRedDiv.classList.remove("disabled");
}, 100);