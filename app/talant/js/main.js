$(function () {
    
  new WOW().init();

  let intro = document.querySelector('.intro__img');
  let introParallax = new Parallax(intro);

  let instruction = document.querySelector('.instruction__steps');
  let instructionParallax = new Parallax(instruction);

  $('.menu-btn').on('click', function () {
    $('.slide__menu').toggleClass('active');
  });

  $(window).on('resize', function () {
    if (this.innerWidth < 1000) {
      $('.slide__menu').removeClass('active');
    }
  });

});
