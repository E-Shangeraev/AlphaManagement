'use strict';

let statsCard = document.querySelectorAll('.stats__card');

let statsValue = [
    statsCard[0].children[0],
    statsCard[1].children[0],
    statsCard[2].children[0],
    ];

let maxValue = [
    statsValue[0].dataset.max,
    statsValue[1].dataset.max,
    statsValue[2].dataset.max,
    ];
    
function counter(max, stats) {

    let currentCount = +stats.textContent;
    let interval = setInterval(() => {
        if (currentCount < max) {
            currentCount += 55;
            stats.textContent = currentCount;
        } else {
            stats.textContent = max;
            clearInterval(interval);}
    }, 20);
    
}

for (let i = 0; i < statsCard.length; i++) {
    counter(maxValue[i],statsValue[i]);
} 