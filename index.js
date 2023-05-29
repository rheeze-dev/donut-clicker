const headerModal = document.querySelector("#header-modal");
const userNameModal = document.querySelector("#user-name-modal");
const bakingCompany = document.querySelector("#baking-company");
const cookieClicker = document.querySelector("#cookie-clicker");
const contactInfo = document.querySelector("#contact-info");
const image = document.querySelector("#img");
let text = document.querySelector(".text");
const userName = document.querySelector("#btn-user-name");
const btnClose = document.querySelectorAll(".close");
const clickArea = document.querySelector("#click-area");
let totalDonuts = document.querySelector(".total-donut-count");
const donutImage = document.querySelector("#donut-img");

let donutCount = 0;
let autoClicker = {
  yellow: 0,
  orange: 0,
  green: 0,
  blue: 0,
  red: 0
};
let autoClickerCount = 0;

bakingCompany.onclick = function() {
  headerModal.style.display = "block";
  text.innerHTML = "Fred the Baker is tired of making real donuts and is ready to retire. He needs our help to keep his love of donuts alive. He wants you to create a game that uses button clicks to create virtual donuts for the world to enjoy.";
}

cookieClicker.onclick = function() {
  headerModal.style.display = "block";
  // image.src = this.src;
  text.innerHTML = "The inspiration for this game is cookie clicker.";
}

contactInfo.onclick = function() {
  headerModal.style.display = "block";
  // image.src = this.src;
  text.innerHTML = "You can contact me at 443-477-8160 or send me an email at ggybzz2297@gmail.com";
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
