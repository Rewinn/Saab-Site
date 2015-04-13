$.mobile.loading().hide();

//SHOW VIDEO 
$(window).on('keydown', function(e) {
  $('[data-key="' + e.which + '"]').show();
  $('#letter-key').html(String.fromCharCode(event.keyCode)).show();
});

$(window).on('keyup', function(e) {
  $('[data-key="' + e.which + '"]').hide();
  $('#letter-key').html(String.fromCharCode(event.keyCode)).hide();
});










