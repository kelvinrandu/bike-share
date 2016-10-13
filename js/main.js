(function ($) {

    "use strict";
    /*-------------------------------------
     jQuery MeanMenu
     -------------------------------------*/
    $('nav#dropdown').meanmenu({ siteLogo: "<a href='index.html'><img src='img/logo.png' /></a>" });

    /*-------------------------------------
     Wow js Active
     -------------------------------------*/
    new WOW().init();

    /*-------------------------------------
     Jquery Scollup
     -------------------------------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*-------------------------------------
     Jquery Serch Box
     -------------------------------------*/
    $('#search-button').on('click', function (e) {
        e.preventDefault();
        $(this).prev('.search-form').slideToggle('slow');
    });

    /*-------------------------------------
     Jquery Team
     -------------------------------------*/
    $('#team-carousel').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });

    /*-------------------------------------
     Jquery Blog slider initiating
     -------------------------------------*/
    $('#blog-carousel').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });

    /*-------------------------------------
     Jquery Our Projects
     -------------------------------------*/
    $('#our-projects-carousel').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });

    /*-------------------------------------
     Jquery Clients
     -------------------------------------*/
    $('#client-carousel').owlCarousel({
        autoPlay: true,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });

    /*-------------------------------------
     Jquery Our Projects
     -------------------------------------*/
    $('#our-projects2-carousel').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: true,
        navigation: false,
        items: 4,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });


    /*-------------------------------------
     Jquery Related Products
     -------------------------------------*/
    $('#related-products-carousel').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });



    /*-------------------------------------
     About Counter
     -------------------------------------*/
    var aboutContainer = $('.about-counter');
    if (aboutContainer.length) {
        aboutContainer.counterUp({
            delay: 50,
            time: 3000
        });
    }

    /*-------------------------------------
     Input Quantity Up & Down
     ***************************************/
    $('#quantity-holder').on('click', '.quantity-plus', function () {
        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(),10);
        if ($.isNumeric($quantity) && $quantity > 0) {
            $quantity = $quantity + 1;
            $target.val($quantity);
        } else {
            $target.val($quantity);
        }
    }).on('click', '.quantity-minus', function () {
        var $holder = $(this).parents('.quantity-holder');
        var $target = $holder.find('input.quantity-input');
        var $quantity = parseInt($target.val(),10);
        if ($.isNumeric($quantity) && $quantity >= 2) {
            $quantity = $quantity - 1;
            $target.val($quantity);
        } else {
            $target.val(1);
        }
    });

    /*-------------------------------------
     Accordion
     -------------------------------------*/
    var accordion = $('#accordion');
    accordion.children('.panel').children('.panel-collapse').each(function () {
        if ($(this).hasClass('in')) {
            $(this).parent('.panel').children('.panel-heading').addClass('active');
        }
    });
    accordion
        .on('show.bs.collapse', function (e) {
            $(e.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function (e) {
            $(e.target).prev('.panel-heading').removeClass('active');
        });


    /*-------------------------------------
     Contact Form initiating
     -------------------------------------*/
    if ($('#contact-form').length) {
        var contactForm = $('#contact-form');
        contactForm.validator().on('submit', function (e) {
            var $this = $(this),
                $target = contactForm.find('.form-response');
            if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-success'><p>Please select all required field.</p></div>");
            } else {
                var name = contactForm.find('#form-name').val();
                var email = contactForm.find('#form-email').val();
                var message = contactForm.find('#form-message').val();
                // ajax call
                $.ajax({
                    url: "php/form-process.php",
                    type: "POST",
                    data: "name=" + name + "&email=" + email + "&message=" + message,
                    beforeSend: function () {
                        $target.html("<div class='alert alert-info'><p>Loading ...</p></div>");
                    },
                    success: function (text) {
                        if (text == "success") {
                            $this[0].reset();
                            $target.html("<div class='alert alert-success'><p>Message has been sent successfully.</p></div>");
                        } else {
                            $target.html("<div class='alert alert-success'><p>" + text + "</p></div>");
                        }
                    }
                });
                return false;
            }
        });
    }


    /*-------------------------------------
        Jquery Loadf function
     -------------------------------------*/

     $(window).on('load', function () {

        // Place holder
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });


        // portfolio 1 Isotope Initialization
        var $container = $('.project-gallery1-area');
        var $isotope1 = $container.find('.featuredContainer').isotope({
            itemSelector: '.project1-box',
            percentPosition: true,
            masonry: {
                columnWidth: '.project1-box.small',
            }
        });
        $container.find('.isotop-classes-tab').on('click', 'a', function () {
            $container.find('.isotop-classes-tab a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $isotope1.isotope({
                filter: selector
            });
            return false;
        });

        // portfolio 2 Isotope Initialization
        var $container2 = $('.project-gallery2-area');
        var $isotope2 = $container2.find('.featuredContainer2').isotope({
            itemSelector: '.project2-box',
            percentPosition: true,
            masonry: {
                columnWidth: '.project2-box.small',
            }
        });

        $container2.find('.isotop-classes-tab2').on('click', 'a', function () {
            $container2.find('.isotop-classes-tab2 a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $isotope2.isotope({
                filter: selector
            });
            return false;
        });

        // portfolio 3 Isotope Initialization
        var $container3 = $('.project-gallery3-area');
        var $isotope3 = $container3.find('.featuredContainer3').isotope({
            itemSelector: '.project3-box',
            percentPosition: true,
            masonry: {
                columnWidth: '.project3-box.small',
            }
        });

        $container3.find('.isotop-classes-tab3').on('click', 'a', function () {
            $container3.find('.isotop-classes-tab3 a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $isotope3.isotope({
                filter: selector
            });
            return false;
        });
    });  // End of load function


    /*-------------------------------------
     Jquery Stiky Menu
     -------------------------------------*/
    $(window).on('scroll', function () {
        var s = $('#sticker'),
            w = $('.wrapper-area'),
            h = s.outerHeight(),
            windowpos = $(window).scrollTop(),
            windowWidth = $(window).width(),
            s4 = $('.header-style4-area'),
            s3 = $('.header-style3-area');

        if (windowWidth > 767) {
            var topBar = s.prev('.header-top-area'),
                topBarH = 0;
            if (topBar.length) {
                topBarH = topBar.outerHeight();
            }
            if (s4.length) {
                topBarH = h = 1;
            }
            if (s3.length) {
                h = 0;
            }
            if (windowpos >= topBarH) {
                s.addClass('stick');
                w.css('padding-top', h + 'px');
            } else {
                s.removeClass('stick');
                w.css('padding-top', 0);
            }

        } else {
            var meanContainer = $('.mean-container .mean-bar');
            if (windowpos >= 1) {
                meanContainer.css('position', 'fixed');
            } else {
                meanContainer.css('position', 'initial');
            }
        }
    });

    /*-------------------------------------
     Google Map
     -------------------------------------*/
    if ($('#googleMap').length) {
        var initialize = function () {
            var mapOptions = {
                zoom: 15,
                scrollwheel: false,
                center: new google.maps.LatLng(-37.81618, 144.95692)
            };
            var map = new google.maps.Map(document.getElementById("googleMap"),
                mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: 'img/map-marker.png',
                map: map
            });
        }
        google.maps.event.addDomListener(window, "load", initialize);
    }

})(jQuery);

