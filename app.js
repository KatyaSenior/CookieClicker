console.log("Hello world");

const cookieButton = document.getElementById("cookieButton");
const upgradeButton = document.getElementById("upgradeButton");
const pauseButton = document.getElementById("pauseutton");
const resetButton = document.getElementById("resetButton");
const cookiesSpan = document.getElementById("cookiesSpan");
const cpsSpan = document.getElementById("cpsSpan");

const gameStatus = "unpaused";

const stats = {
  cookieCount: 0,
  cps: 0,
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

function pauseGame() {
  if ((gameStatus = "unpaused")) {
    setInterval(function () {
      stats.cookieCount += stats.cps;
      updatePage();
      updateStorage();
    }, 0);
  }
  if ((gameStatus = "paused")) {
    setInterval(function () {
      stats.cookieCount += stats.cps;
      updatePage();
      updateStorage();
    }, 1000);
  }
}

function resetCookies() {
  stats.cookieCount = 0;
  stats.cps = 1;
  updatePage();
  updateStorage();
  if ((resetButton.textContent = "Start")) {
    resetButton.textContent = "Reset";
    setInterval(function () {
      stats.cookieCount += stats.cps;
      updatePage();
      updateStorage();
    }, 1000);
  }
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
pauseButton.addEventListener("click", pauseGame);
resetButton.addEventListener("click", resetCookies);
