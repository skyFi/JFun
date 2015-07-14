/**
 * Created by skylor on 2015/7/13.
 */

$(document).ready(function() {

    var timer = null;
    $('.menu-open').on('click', function() {
        $('.nav-wrapper').removeClass('close');
        $('.nav-wrapper').addClass('open');
    });

    $('.menu-close').on('click', function() {
        if (timer) {
            clearTimeout(timer);
        }
        $('.nav-wrapper').removeClass('open');
        $('.nav-wrapper').addClass('close');

        timer = setTimeout(function(){
            $('.nav-wrapper').removeClass('close');
        }, 500);
    });


});