console.log("Hello world");

const cookieButton = document.getElementById("cookieButton");
const upgradeButton = document.getElementById("upgradeButton");
const resetButton = document.getElementById("resetButton");
const cookiesSpan = document.getElementById("cookiesSpan");
const cpsSpan = document.getElementById("cpsSpan");

const stats = {
  cookieCount: 0,
  cps: 1,
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

function buyUpgrade() {
  if (stats.cookieCount - 10 < 0) {
    console.log("nope");
  } else {
    stats.cps++;
    stats.cookieCount -= 10;
    updatePage();
    updateStorage();
  }
}

function resetCookies() {
  stats.cookieCount = 0;
  stats.cps = 1;
  updatePage();
  updateStorage();
}

function updatePage() {
  cookiesSpan.textContent = stats.cookieCount;
  cpsSpan.textContent = stats.cps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}

cookieButton.addEventListener("click", buyCookie);
upgradeButton.addEventListener("click", buyUpgrade);
resetButton.addEventListener("click", resetCookies);

setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);
