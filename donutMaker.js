const headerModal = document.querySelector("#header-modal");
const userNameModal = document.querySelector("#user-name-modal");
const bakingCompany = document.querySelector("#baking-company");
const cookieClicker = document.querySelector("#cookie-clicker");
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
const inputUserName = document.querySelector("#input-user-name");
const optionOne = document.querySelector(".optionOne");
const optionTen = document.querySelector(".optionTen");
const optionFifty = document.querySelector(".optionFifty");

let donutCount = 0;
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

fetchUserNameFromAPI();

bakingCompany.onclick = function() {
  headerModal.style.display = "block";
  image.classList.remove("profile-image");
  image.src = "img/baking-company.jpg";
  headerModalText.innerHTML = `I have been contracted by Fred the Baker Baking Company to take a concept, Donut Maker Clicker, from the drawing board to the browser. Fred the Baker is 
  tired of making real donuts and is ready to retire. He needs help to keep his love for donuts alive. He wants to create a game that uses button clicks to create virtual donuts for 
  the world to enjoy. It's always "Time to make the Donuts" and Fred is too busy to give guidance on how to implement the requirements.`;
}

cookieClicker.onclick = function() {
  headerModal.style.display = "block";
  image.classList.remove("profile-image");
  image.src = "img/cookie-clicker.png";
  headerModalText.innerHTML = `The inspiration for this game is cookie clicker. <a href="https://orteil.dashnet.org/cookieclicker/" target="_blank">Click here to check it out.</a>`;
}

contactInfo.onclick = function() {
  headerModal.style.display = "block";
  image.classList.add("profile-image");
  image.src = "img/profile.jpg";
  headerModalText.innerHTML = `You can contact me at 443-577-8160 or send me an email at <a title="My Email account" href="mailto:ggybzz2297@gmail.com">ggybzz2297@gmail.com.</a> 
  Want to play more games? Here are other games that I made: <a href="https://rheeze-racinggame.netlify.app/" target="_blank">Racing game</a> and 
  <a href="https://rheeze-guessinggame.netlify.app/" target="_blank">Guessing game</a>. Visit my portfolio at <a href="https://rheeze-dev.github.io/" target="_blank">https://rheeze-dev.github.io</a>.
  </a> Check out 
  my accounts at <a title="My GitHub account" href="https://github.com/rheeze-dev" target="_blank">GitHub, </a><a title="My BitBucket account" 
  href="https://bitbucket.org/rheeze-dev" target="_blank">BitBucket</a> and <a title="My LinkedIn account" href="https://www.linkedin.com/in/rheeze-gyver-kalahi-a372aa185/" target="_blank">LinkedIn.</a>`;
}

userName.onclick = function() {
  userNameModal.style.display = "block";
  inputUserName.setAttribute("value",userName.textContent);
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
  totalDonuts.innerText = donutCount;
}

optionsButton.forEach((option) => {
  option.addEventListener("click", function() {
    const attr = option.getAttribute("data-attr");
    optionValue = attr;
      optionOne.style.background = "#f0f0f0";
      optionTen.style.background = "#f0f0f0";
      optionFifty.style.background = "#f0f0f0";
      option.style.background = "rgb(253, 205, 132)";
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
  buyButton.style.background = "rgb(253, 205, 132)";
  sellButton.style.background = "#f0f0f0";
  isBuy = true;
}

sellButton.onclick = function() {
  sellButton.style.background = "rgb(253, 205, 132)";
  buyButton.style.background= "#f0f0f0";
  isBuy = false;
}

document.querySelector(".reset-button").onclick = function() {
  donutCount = 0;
  autoClickers.green = 0;
  autoClickers.blue = 0;
  autoClickers.red = 0;
  autoClickerCost.green = 100;
  autoClickerCost.blue = 200;
  autoClickerCost.red = 300;
  optionValue = 1;
  isBuy = true;
  removeAllImages();
  // fetchUserNameFromAPI();
  optionOne.style.background = "rgb(253, 205, 132)";
  optionTen.style.background = "#f0f0f0";
  optionFifty.style.background = "#f0f0f0";
  buyButton.style.background = "rgb(253, 205, 132)";
  sellButton.style.background = "#f0f0f0";
}

document.querySelector("#confirm-button").onclick = function() {
  userName.innerHTML = inputUserName.value;
  userNameModal.style.display = "none";
}

document.querySelector("#cancel-button").onclick = function() {
  userNameModal.style.display = "none";
}

document.querySelector("#random-button").onclick = function() {
  fetchUserNameFromAPI("randomUserName");
}

document.querySelector("footer").innerHTML = "Copyright &copy; " + new Date().getFullYear();

function insertImage(color) {
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

function removeAllImages(){
  document.querySelector("#green").replaceChildren();
  document.querySelector("#blue").replaceChildren();
  document.querySelector("#red").replaceChildren();
}

async function fetchUserNameFromAPI(param) {
  let response = await fetch("https://randomuser.me/api/");
  let data = await response.json();
  let username = data.results[0].login.username.substring(0, 15);
  if(param === "randomUserName") {
    inputUserName.value = username;
  }
  else
    userName.innerHTML = username;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

setInterval(async () => {
  const limit = 1;
	const response = await fetch(
		"https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
		{
			method: "GET",
			headers: {
				"X-Api-Key": "54/p8rt+p9QhgeN9G/Z5Sg==wrJ1tX7OT2EAdJcR",
        "Content-type": "application/json; charset=UTF-8"
			}
		});
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
  document.querySelector("#random-jokes-area").classList.add("animate")
  document.querySelector("#random-jokes-area").innerHTML = data[0].joke;
  setTimeout(() => {
    document.querySelector("#random-jokes-area").classList.remove("animate")
  },5000);
}, 20000);

setInterval(() => {
  donutCount += autoClickers.green + (autoClickers.blue * 5) + (autoClickers.red * 10);
}, 1000);

setInterval(() => {
  totalDonuts.innerHTML = donutCount.toLocaleString();
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
  priceGreenClicker.innerHTML = isBuy ? (Math.round(autoClickerCost.green) * optionValue).toLocaleString() 
    : autoClickers.green === 0 ? "" : ((Math.round(autoClickerCost.green) * optionValue) - (Math.round(autoClickerCost.green * .545) * optionValue)).toLocaleString();
  greenDonutPerSecond.innerHTML = isBuy ? "+" + optionValue + " donuts per second"
    : autoClickers.green === 0 ? "" : "-" + optionValue + " auto clickers if sold";
  totalGreenClicker.innerHTML = "Total auto clickers: " + autoClickers.green 
  priceBlueClicker.innerHTML = isBuy ? (Math.round(autoClickerCost.blue) * optionValue).toLocaleString()
    : autoClickers.blue === 0 ? "" : ((Math.round(autoClickerCost.blue) * optionValue) - (Math.round(autoClickerCost.blue * .545) * optionValue)).toLocaleString();
  blueDonutPerSecond.innerHTML = isBuy ? "+" + 5 * optionValue + " donuts per second"
    : autoClickers.blue === 0 ? "" : "-" + 5 * optionValue + " auto clickers if sold";
  totalBlueClicker.innerHTML = "Total auto clickers: " + autoClickers.blue;
  redDonutPerSecond.innerHTML = isBuy ? "+" + 10 * optionValue + " donuts per second"
    : autoClickers.red === 0 ? "" : "-" + 10 * optionValue + " auto clickers if sold";
  priceRedClicker.innerHTML = isBuy ? (Math.round(autoClickerCost.red) * optionValue).toLocaleString()
    : autoClickers.red === 0 ? "" : ((Math.round(autoClickerCost.red) * optionValue) - (Math.round(autoClickerCost.red * .545) * optionValue)).toLocaleString();
  totalRedClicker.innerHTML = "Total auto clickers: " + autoClickers.red;
  let donutsPerSecond = autoClickers.green + (autoClickers.blue * 5) + (autoClickers.red * 10);
  totalDonutsPerSecond.innerHTML = donutsPerSecond <= 1 ? donutsPerSecond + " donut per second"
    : donutsPerSecond.toLocaleString() + " donuts per second";
}, 100);