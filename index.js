function handleMenubutton() {
  $('#menu').click(event => {
    event.preventDefault();
    $('nav').toggleClass('hidden');
  })
}

function handleStartPage() {
  handleMenubutton();
  }

  $(handleStartPage);