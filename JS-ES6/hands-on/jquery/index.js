$(function() {
    console.log('jQuery is ready');
    $('h1').text('Welcome to jQuery!'); //setter
    console.log($('h2').text());    // getter
    $('h1').addClass('bgcolor');
    $('.mypara').hover(function(){
        $(this).css('background', 'yellow').html('Old user');
    })
});