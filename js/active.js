(function ($) {
    'use strict';

    // Index of jQuery Active Code

    // :: 1.0 Welcome Slider Active Code
    // :: 2.0 Testimonials Slider Active Code
    // :: 3.0 App Screenshots Slider Active Code
    // :: 4.0 Meanmenu Active Code
    // :: 5.0 Onepage Nav Active Code
    // :: 6.0 Video Active Code
    // :: 7.0 ScrollUp Active Code
    // :: 8.0 MatchHeight Active Code
    // :: 9.0 YouTube Video Active Code
    // :: 10.0 wow active code
    // :: 11.0 PreventDefault a Click
    // :: 12.0 Hover Effect Active Code
    // :: 13.0 counterup active code
    // :: 14.0 Sticky Active Code
    // :: 15.0 Preloader active code

    var $window = $(window);
    // ScrollDown Active Code
    var downloadbtn = $("#downloadAppbtn");
    var contactbtn = $("#contactbtn");
    var knowmorebtn = $("#knowmorebtn");
    var featuresbtn = $("#featuresbtn");
    downloadbtn.click(function () {
        $('html, body').animate({
            scrollTop: $("#download").offset().top
        }, 1500);
    });
    contactbtn.click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });
    knowmorebtn.click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });
    featuresbtn.click(function () {
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 1500);
    });

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#corenav').onePageNav({
            currentClass: 'current_page_item',
            easing: 'easeInOutQuart',
            scrollSpeed: 1440
        });
    }

    // niceScroll Active Code
    if ($.fn.niceScroll) {
        $("body, textarea").niceScroll({
            cursorcolor: "#1a1a1a",
            cursorwidth: "5px",
            background: "transparent",
            cursorborder: "none",
            cursorborderradius: 0,
            zindex: "5000"
        });
    }
    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            easingType: 'easeInOutQuart',
            scrollText: ['<i class="ti-angle-up"></i>'],
            scrollImg: false
        });
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // Hover Effect Active Code
    $('.single_benifits').on('mouseenter', function () {
        $('.single_benifits').removeClass('active');
        $(this).addClass('active');
    });

    // counterup active code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
    }

    // Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 150) {
            $('.main_header').addClass('sticky animated bounceInDown');
            $('.main_header').removeClass('main_header_area')
            $('#home_nav').removeClass('active')
        } else {
            $('.main_header').addClass('main_header_area');
            $('.main_header').removeClass('sticky animated bounceInDown');
            $('#home_nav').addClass('active')
        }
    });

    // wow active code
    if ($window.width() > 767) {
        new WOW().init();
    }
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }
    
})(jQuery);