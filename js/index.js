$(document).ready(function() {
    //VIDEO DESKTOP
    $(window).on('keydown', function(e) {
        $('[data-key="' + e.which + '"]').show();
        $('#letter-key').html(String.fromCharCode(event.keyCode)).show(); 
    });

    $(window).on('keyup', function(e) {
        $('[data-key="' + e.which + '"]').hide();
        $('#letter-key').html(String.fromCharCode(event.keyCode)).hide();
    });

    //VIDEO MOBILE
    var hammertime = new Hammer(document.body);

    hammertime.on('tap', function(evt) {
        $('#music').trigger("play");
        var randomGfy = Math.floor(Math.random() * $('.gfy').length);
        $('.gfy').hide().eq(randomGfy).show();      
    });
});