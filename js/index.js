$.mobile.loading().hide();


//SHOW VIDEO DESKTOP
$(window).on('keydown', function(e) {
  $('[data-key="' + e.which + '"]').show();
  $('#letter-key').html(String.fromCharCode(event.keyCode)).show();				
});

$(window).on('keyup', function(e) {
  $('[data-key="' + e.which + '"]').hide();
  $('#letter-key').html(String.fromCharCode(event.keyCode)).hide();
});


//SHOW VIDEO MOBILE
var tapStart = function() {
    var randomGfy = Math.floor(Math.random() * $('.gfy').length);
    $('.gfy').hide().eq(randomGfy).show();      
}

var tapEnd = function() {
    $(randomGfy).hide();
}

function is_touch_device() {
    return (('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}

var init = function() {
    $(window).bind('touchstart',tapStart).bind('touchend',tapEnd);  
}

init();









//do not delete.  this works kinda
/*
$(window).on( "click", function() {
    var randomGfy = Math.floor(Math.random() * $('.gfy').length);
    $('.gfy').hide().eq(randomGfy).show();
});
*/






