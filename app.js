console.log("Hello world");

const cookieButton = document.getElementById("cookieButton");
const grandmaButton = document.getElementById("grandmaButton");
const ovenButton = document.getElementById("ovenButton");
const resetButton = document.getElementById("resetButton");
const cookiesSpan = document.getElementById("cookiesSpan");
const cpsSpan = document.getElementById("cpsSpan");

setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);

const stats = {
  cookieCount: 0,
  cps: 0,
  gUpgrade: 10,
  oUpgrade: 100,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.cookieCount = storageStats.cookieCount;
  stats.cps = storageStats.cps;
  updatePage();
}

function buyCookie() {
  stats.cookieCount++;
  updatePage();
  updateStorage();
}

function buyGrandma() {
  if (stats.cookieCount - stats.gUpgrade < 0) {
    console.log("nope");
  } else {
    stats.cps++;
    stats.cookieCount -= stats.gUpgrade;
    stats.gUpgrade += 2;
    updatePage();
    updateStorage();
  }
}

function buyOven() {
  if (stats.cookieCount - stats.oUpgrade < 0) {
    console.log("nope");
  } else {
    stats.cps += 10;
    stats.cookieCount -= stats.oUpgrade;
    stats.gUpgrade += 20;
    updatePage();
    updateStorage();
  }
}

function resetCookies() {
  stats.cookieCount = 0;
  stats.cps = 0;
  gUpgrade = 10;
  oUpgrade = 100;
  updatePage();
  updateStorage();
  setInterval(function () {
    stats.cookieCount += stats.cps;
    updatePage();
    updateStorage();
  }, 1000);
}

function updatePage() {
  cookiesSpan.textContent = stats.cookieCount;
  cpsSpan.textContent = stats.cps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

cookieButton.addEventListener("click", buyCookie);
grandmaButton.addEventListener("click", buyGrandma);
ovenButton.addEventListener("click", buyOven);
resetButton.addEventListener("click", resetCookies);
