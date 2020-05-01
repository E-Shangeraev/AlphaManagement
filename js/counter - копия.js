let statsCard = document.querySelectorAll('.stats__card');

var statsValue = [
    statsCard[0].children[0],
    statsCard[1].children[0],
    statsCard[2].children[0],
    ];

var maxValue = [
    statsValue[0].dataset.max,
    statsValue[1].dataset.max,
    statsValue[2].dataset.max,
    ]

for (let i = 0; i < statsCard.length; i++) {
    counter(maxValue[i]);
}

    
function counter(max) {
    for (let i = 0; i < statsCard.length; i++) {
        
        let currentCount = +statsValue[i].textContent;
        setInterval(() => {
            if (currentCount < max) {
                currentCount += 75;
                statsValue[i].textContent = currentCount;
            }
        }, 20);
        statsValue[i].textContent = max;
    }
}
