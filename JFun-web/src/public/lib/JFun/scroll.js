/**
 * Created by skylor on 2015/7/14.
 */

var active_slide;
var animationTime = 1000;
var quietPeriod = 500;
var lastAnimation;
var is_responsive;
var timer;

$(document).ready(function() {

    responsive();

    active_slide = Math.floor( $(window).scrollTop() / $(window).height() );

    scrollToIndex(active_slide);

    if( !is_responsive) {
        $('.slide').css({
            'height' : $(window).height() + 'px'
        });

        $('.slides').css({
            '-webkit-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            '-webkit-transition' : '-webkit-transform 1s ease',
            '-moz-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            '-moz-transition' : '-moz-transform 1s ease',
            '-ms-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            '-ms-transition' : '-ms-transform 1s ease',
            'transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            'transition' : 'transform 1s ease'
        });
    } else {
        $('.slide').css({
            'height' : 'auto'
        });
        $('.start').css({
            'height' : $(window).height() + 'px'
        });
        $('.slides').css({
            '-webkit-transform' : 'translateY(0)'
        });
        $('.logo').on('click', function() {
            $('html, body').animate({
                'scrollTop' : 0
            }, 800, 'swing')
        });
        $('.start > span').on('click', function() {
            $('html, body').animate({
                'scrollTop' : 385
            }, 800, 'swing')
        });
    }

    $(window).resize(function() {
        if( !is_responsive) {
            $('.slide').css({
                'height' : $(window).height() + 'px'
            });

            $('.slides').css({
                '-webkit-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
                '-webkit-transition' : 'none',
                '-moz-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
                '-moz-transition' : 'none',
                '-ms-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
                '-ms-transition' : 'none',
                'transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
                'transition' : 'none'
            });
        } else {
            $('.slide').css({
                'height' : 'auto'
            });
            $('.start').css({
                'height' : $(window).height() + 'px'
            });
            $('.slides').css({
                '-webkit-transform' : 'translateY(0)',
                '-moz-transform' : 'translateY(0)',
                '-ms-transform' : 'translateY(0)',
                'transform' : 'translateY(0)'
            });
        }
        responsive();
    });

    if( !is_responsive) {
        $('.pagination span, .logo, .start > span').on('click', function() {
            if($(this).attr('data-index') != active_slide) {
                scrollToIndex($(this).attr('data-index'));
            }
        });
    }

    $('.navigation span').on('click', function() {
        if (timer) {
            clearTimeout(timer);
        }
        $('.nav-wrapper').removeClass('open');
        $('.nav-wrapper').addClass('close');

        timer = setTimeout(function(){
            $('.nav-wrapper').removeClass('close');
        }, 500);

        if( !is_responsive && $(this).attr('data-index') != active_slide) {
            scrollToIndex($(this).attr('data-index'));
        }
    });

    function toggleBodyClass() {
        $('body').removeClass();
        $('body').addClass('viewing-index-' + active_slide);
    }

    function scrollToIndex(index) {
        active_slide = parseInt(index);
        $('.slides').css({
            '-webkit-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            '-webkit-transition' : '-webkit-transform 1s ease',
            '-moz-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            '-moz-transition' : '-moz-transform 1s ease',
            '-ms-transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            '-ms-transition' : '-ms-transform 1s ease',
            'transform' : 'translateY(-' + ($(window).height() * active_slide) + 'px)',
            'transition' : 'transform 1s ease'
        });
        toggleBodyClass();
        $('.pagination span').removeClass();
        $('.pagination li:nth-child(' + (active_slide + 1) + ') span').addClass('active');
    }

    $(document).bind('mousewheel DOMMouseScroll', function(event) {
        if( !is_responsive) {
            event.preventDefault();
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            init_scroll(event, delta);
        }
    });

    function init_scroll(event, delta) {
        var timeNow = new Date().getTime();
        if(timeNow - lastAnimation < quietPeriod + animationTime) {
            event.preventDefault();
            return;
        }

        if (delta < 0 && active_slide < 5 ) {
            scrollToIndex(active_slide + 1);
        } else if(delta > 0 && active_slide > 0) {
            scrollToIndex(active_slide - 1);
        }
        lastAnimation = timeNow;
    }

    function responsive() {
        if($(window).width() <= 1190 || $(window).height() <= 700) {
            is_responsive = true;
        } else {
            is_responsive = false;
        }
    }

});