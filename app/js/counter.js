'use strict';

let statsCards = document.querySelectorAll('.stats__card');

let statsValue = [statsCards[0].children[0], statsCards[1].children[0], statsCards[2].children[0]];

let maxValue = [statsValue[0].dataset.max, statsValue[1].dataset.max, statsValue[2].dataset.max];

function counter(max, stats) {
  let currentCount = +stats.textContent;
  let interval = setInterval(() => {
    if (currentCount < max) {
      currentCount += 55;
      stats.textContent = currentCount;
    } else {
      stats.textContent = max;
      clearInterval(interval);
    }
  }, 20);
}

for (let i = 0; i < statsCards.length; i++) {
  counter(maxValue[i], statsValue[i]);
}
