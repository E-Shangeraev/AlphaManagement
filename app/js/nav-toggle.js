let pageHeaderMobile = document.querySelector('.page-header__mobile'),
    pageHeaderLogoMobile = document.querySelector('.page-header__logo-mobile'),
    navigationToggle = pageHeaderMobile.querySelector('.navigation__toggle'),
    pageHeaderNav = document.querySelector('.page-header__nav'),
    navigationItem = document.querySelectorAll('.navigation__item');


// Изменение состояния кнопки и открытие меню

navigationToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (pageHeaderMobile.classList.contains('page-header__mobile--closed')) {
        pageHeaderMobile.classList.remove('page-header__mobile--closed');
        pageHeaderMobile.classList.add('page-header__mobile--opened');
        pageHeaderNav.classList.remove('page-header__nav--closed');
        pageHeaderNav.classList.add('page-header__nav--opened');
        document.body.style.overflow = 'hidden';
    } else if (pageHeaderMobile.classList.contains('page-header__mobile--opened')) {
        pageHeaderMobile.classList.remove('page-header__mobile--opened');
        pageHeaderMobile.classList.add('page-header__mobile--closed');
        pageHeaderNav.classList.remove('page-header__nav--opened');
        pageHeaderNav.classList.add('page-header__nav--closed');
        document.body.style.overflow = 'auto';
    }
    
});

//////////////////////////////////////////////


// Закрытие меню при клике на один из пунктов 

for (item of navigationItem) {
    item.addEventListener('click', function() {
        pageHeaderNav.classList.remove('page-header__nav--opened');
        pageHeaderNav.classList.add('page-header__nav--closed');
        pageHeaderMobile.classList.remove('page-header__mobile--opened');
        pageHeaderMobile.classList.add('page-header__mobile--closed');
        document.body.style.overflow = 'auto';
    });
}

pageHeaderLogoMobile.addEventListener('click', function() {
    pageHeaderNav.classList.remove('page-header__nav--opened');
    pageHeaderNav.classList.add('page-header__nav--closed');
    pageHeaderMobile.classList.remove('page-header__mobile--opened');
    pageHeaderMobile.classList.add('page-header__mobile--closed');
    document.body.style.overflow = 'auto';
});

///////////////////////////////////////////////