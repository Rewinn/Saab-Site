//SHOW VIDEO 
$(window).on('keydown', function(e) {
  $('[data-key="' + e.which + '"]').show();
});

$(window).on('keyup', function(e) {
  $('[data-key="' + e.which + '"]').hide();
});

































