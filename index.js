
//Set header based on screen width
function setHeader() {
  if ($(window).width() < 769) {
    $('header').addClass('mobile-header');
    $('.mobile-header').addClass('active-header');
  } else {
    $('header').addClass('full-header');
    $('.full-header').addClass('active-header');
  }
}

//Open menu options on mobile
function handleMenubutton() {
  $('#menu').click(event => {
    event.preventDefault();
    $('nav').toggleClass('open');
    $('#menu-bars').toggleClass('hidden');
    $('#menu-open').toggleClass('hidden');
  })
}

function handleStartPage() {
  setHeader();
  handleMenubutton();
}

$(handleStartPage);