
//set header based on screen width
function setHeader() {
  if ($(window).width() < 769) {
    $('.mobile-header').addClass('active-header');
  } else {
    $('.full-header').addClass('active-header');
  }
}

//open menu options for smaller screens
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