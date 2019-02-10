
function setHeader() {
 if ($(window).width() < 768) {
   $('.mobile-header').addClass('active-header');
 } else {
   $('.full-header').addClass('active-header');
 }
}


function handleMenubutton() {
  $('#menu').click(event => {
    event.preventDefault();
    $('nav').toggleClass('open');
    $('.content-veil').toggleClass('open');
  })
}

function handleStartPage() {
  setHeader();
  handleMenubutton();
  }

  $(handleStartPage);