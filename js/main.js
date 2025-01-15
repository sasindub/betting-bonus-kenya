(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });



    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


// Initialize the counterUp plugin for general counters
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});

// Manually append "%" for Accuracy and Winning Rate counters
$('#accuracy-counter').counterUp({
    delay: 10,
    time: 2000,
    callback: function (value) {
        $('#accuracy-counter').text('100%');  // Append the percentage symbol after the value
    }
});

$('#winning-rate-counter').counterUp({
    delay: 10,
    time: 2000,
    callback: function (value) {
        $('#winning-rate-counter').text('100%');  // Append the percentage symbol after the value
    }
});

$('#sites').counterUp({
    delay: 10,
    time: 2000,
    callback: function (value) {
        $('#sites').text('10+');  
    }
}); 

$('#clients').counterUp({
    delay: 10,
    time: 2000,
    callback: function (value) {
        $('#clients').text('2000+');  
    }
});



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

