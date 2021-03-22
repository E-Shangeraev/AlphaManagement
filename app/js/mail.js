$(document).ready(function () {
  //E-mail Ajax Send
  $('form').submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      alert('Мы свяжемся с вами в ближайшее время!');
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});
