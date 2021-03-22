const data = [
  {
    src: '#step-1',
    type: 'inline',
  },
  {
    src: '#step-2',
    type: 'inline',
  },
];

$(document).ready(function () {
  $('.open-popup').magnificPopup({
    type: 'inline',
    items: data,
    midClick: true,
    closeBtnInside: true,
    gallery: {
      enabled: true,
      // arrowMarkup:
      //   '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      // tPrev: 'Шаг 1',
      // tNext: 'Шаг 2',
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
    callbacks: {
      open: function () {
        const mfp = $.magnificPopup.instance;
        const proto = $.magnificPopup.proto;

        // mfp.arrowRight[0] = $('.popup__button');
        // console.log(mfp.arrowRight[0]);

        mfp.next = function () {
          if (mfp.index < mfp.items.length - 1) {
            $('.popup__step').animate({ opacity: 'hide' }, 120);
            setTimeout(function () {
              proto.next.call(self);
              $('.popup__step').animate({ opacity: 'show' }, 120);
              $('.popup__step').css('display', 'flex');
            }, 120);
          } else {
            // otherwise do whatever you want, e.g. hide "next" arrow
          }
        };

        let obj = {};

        document.querySelector('.popup__button--next').addEventListener('click', () => {
          const post = document.querySelector('.popup__field input[id="post"]');
          const place = document.querySelector('.popup__field input[id="place"]');
          const activity = document.querySelector('.popup__field input[id="activity"]');

          obj.post = post.value;
          obj.place = place.value;
          obj.activity = activity.value;

          if (obj.post && obj.place && obj.activity) {
            post.value = '';
            place.value = '';
            activity.value = '';

            mfp.next();
          }
        });

        document.querySelector('.popup__button--submit').addEventListener('click', () => {
          const name = document.querySelector('.popup__field input[id="name"]');
          const phone = document.querySelector('.popup__field input[id="phone"]');
          const email = document.querySelector('.popup__field input[id="email"]');

          obj.name = name.value;
          obj.phone = phone.value;
          obj.email = email.value;

          console.log(obj);

          if (obj.name && obj.phone && obj.email) {
            obj.name.value = '';
            obj.phone.value = '';
            obj.email.value = '';

            $.ajax({
              type: 'POST',
              url: '/talant/mail.php',
              data: 'param=' + JSON.stringify(obj),
            }).done(function () {
              alert('Мы свяжемся с вами в ближайшее время!');
              // setTimeout(function () {
              //   mfp.close();
              // }, 1000);
            });

            mfp.close();
          }
        });
      },
      close: function () {
        const inputs = document.querySelectorAll('.popup__field input');
        const select = document.querySelectorAll('.select span');

        console.log(inputs);

        select.forEach((item) => {
          item.textContent = 'Выбрать';
        });

        inputs.forEach((item) => {
          item.value = '';
        });
      },
    },
  });

  async function sendMail(obj) {
    $.ajax({
      type: 'POST',
      url: '../mail.php',
      data: 'param=' + JSON.stringify(obj),
    }).done(function () {
      alert('Мы свяжемся с вами в ближайшее время!');
      setTimeout(function () {
        mfp.close();
      }, 1000);
    });
  }

  // ======== Выпадающий список в попапе =======
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).text());
    // console.log($(this).parents('.dropdown').find('input').attr('value'));
  });
});
