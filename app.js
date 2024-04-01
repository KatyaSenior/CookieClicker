console.log("Hello world");

const cookieButton = document.getElementById("cookieButton");
const grandmaButton = document.getElementById("grandmaButton");
const ovenButton = document.getElementById("ovenButton");
const resetButton = document.getElementById("resetButton");
const cookiesSpan = document.getElementById("cookiesSpan");
const cpsSpan = document.getElementById("cpsSpan");
const gUpgradeNumberSpan = document.getElementById("gUpgradeNumberSpan");
const gUpgradeCostSpan = document.getElementById("gUpgradeCostSpan");
const oUpgradeNumberSpan = document.getElementById("oUpgradeNumberSpan");
const oUpgradeCostSpan = document.getElementById("oUpgradeCostSpan");

setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);

const stats = {
  cookieCount: 0,
  cps: 0,
  gUpgradeCost: 10,
  gUpgradeNumber: 0,
  oUpgradeCost: 100,
  oUpgradeNumber: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.cookieCount = storageStats.cookieCount;
  stats.cps = storageStats.cps;
  stats.gUpgradeCost = storageStats.gUpgradeCost;
  stats.gUpgradeNumber = storageStats.gUpgradeNumber;
  stats.oUpgradeCost = storageStats.oUpgradeCost;
  stats.oUpgradeNumber = storageStats.oUpgradeNumber;
  updatePage();
}

function buyCookie() {
  stats.cookieCount++;
  updatePage();
  updateStorage();
}

function buyGrandma() {
  if (stats.cookieCount - stats.gUpgradeCost < 0) {
    console.log("nope");
    document.getElementById("errorMessage").style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("errorMessage").style.visibility = "hidden";
    }, 5000);
  } else {
    stats.cps++;
    stats.cookieCount -= stats.gUpgradeCost;
    stats.gUpgradeCost += 2;
    stats.gUpgradeNumber++;
    updatePage();
    updateStorage();
  }
}

function buyOven() {
  if (stats.cookieCount - stats.oUpgradeCost < 0) {
    console.log("nope");
    document.getElementById("errorMessage").style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("errorMessage").style.visibility = "hidden";
    }, 5000);
  } else {
    stats.cps += 10;
    stats.cookieCount -= stats.oUpgradeCost;
    stats.oUpgradeCost += 20;
    stats.oUpgradeNumber++;
    updatePage();
    updateStorage();
  }
}

function resetCookies() {
  stats.cookieCount = 0;
  stats.cps = 0;
  gUpgradeCost = 10;
  gUpgradeNumber = 0;
  oUpgradeCost = 100;
  oUpgradeNumber = 0;
  document.getElementById("errorMessage").style.visibility = "hidden";
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
  gUpgradeNumberSpan.textContent = stats.gUpgradeNumber;
  gUpgradeCostSpan.textContent = stats.gUpgradeCost;
  oUpgradeNumberSpan.textContent = stats.oUpgradeNumber;
  oUpgradeCostSpan.textContent = stats.oUpgradeCost;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

cookieButton.addEventListener("click", buyCookie);
grandmaButton.addEventListener("click", buyGrandma);
ovenButton.addEventListener("click", buyOven);
resetButton.addEventListener("click", resetCookies);
