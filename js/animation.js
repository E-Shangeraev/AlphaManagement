let advantagesCases = document.querySelectorAll('.advantages-cases__item'),
    advantagesCasesStat = document.querySelectorAll('.advantages-cases__statistic'),

    workStages = document.querySelectorAll('.work-stages__border'),
    workStagesLegend = document.querySelectorAll('.work-stages__legend'),
    workStagesData = document.querySelectorAll('.work-stages__data'),
    workStagesVerLine = document.querySelector('.work-stages__ver-line'),
    workStagesHorLine = document.querySelectorAll('.work-stages__hor-line'),

    exampleSlider1 = document.querySelectorAll('.example__slider-1'),
    exampleChart = document.querySelector('.example__chart'),
    
    exampleItem = document.querySelectorAll('.example__item'),

    button1 = document.querySelector('#slick-slide-control00'),
    button2 = document.querySelector('#slick-slide-control01'),
    button3 = document.querySelector('#slick-slide-control02'),
    button4 = document.querySelector('#slick-slide-control03'),

    buttons = document.querySelectorAll('.slider button'),

    buttonDirector = document.querySelector('.feedback__button--director');

window.addEventListener('scroll', function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 1015) {
        for (let i = 0; i < advantagesCases.length; i++) {
            advantagesCases[i].classList.add('advantages-cases__item--animated');
            advantagesCasesStat[i].classList.add('advantages-cases__statistic--animated');
        }
    }
    if (scrolled >= 1800) {
        for (let i = 0; i < workStages.length; i++) {
            workStages[i].classList.add('work-stages__border--animated');
            workStagesLegend[i].classList.add('work-stages__legend--animated');
            workStagesData[i].classList.add('work-stages__data--animated');
            workStagesHorLine[i].classList.add('work-stages__hor-line--animated');
            workStagesVerLine.classList.add('work-stages__ver-line--animated');
        }
    }
    if (scrolled >= 3010) {

        if (exampleItem[1].tabIndex == 0) {
            exampleChart.classList.remove('example__chart--animated');
            exampleSlider1[1].classList.add('example__slider-1--animated');
        }
    
        if (exampleItem[2].tabIndex == 0) {
            exampleSlider1[1].classList.remove('example__slider-1--animated');
            exampleChart.classList.add('example__chart--animated');
        }

        buttons[0].addEventListener('click', function() {
            exampleChart.classList.remove('example__chart--animated');
            exampleSlider1[1].classList.add('example__slider-1--animated');
        });

        buttons[1].addEventListener('click', function() {
            exampleSlider1[1].classList.remove('example__slider-1--animated');
            exampleChart.classList.add('example__chart--animated');
        });
    }
        
    if (scrolled >= 4885) {  
        buttonDirector.classList.add('feedback__button--animated');
    }
}); 
