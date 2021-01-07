'use strict';
var prodslid1 = jQuery('#tabs-1 .products-slider-2');
var prodslid2 = jQuery('#tabs-2 .products-slider-2');

jQuery(window).scroll(function () {

    // --------------------------- Scroll To Top ------------------------ //
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.to-top').css({bottom: '0px'});
    }
    else {
        jQuery('.to-top').css({bottom: '-150px'});
    }

});


jQuery(document).ready(function ($) {

    // --------------------------- Custom Scroll Style ------------------------ // 
    (function () {
        jQuery(window).load(function () {
            if (jQuery(window).width() < 650) {
                if (jQuery(".top-bar .navigation").length) {
                    jQuery(".top-bar .navigation").mCustomScrollbar({
                        theme: "dark-2",
                        scrollButtons: {
                            enable: false
                        }
                    });
                }
                if (jQuery(".shop_table").length) {
                    jQuery(".shop_table").mCustomScrollbar({
                        axis: "x",
                        theme: "dark-2",
                        scrollButtons: {
                            enable: false
                        }
                    });
                }
            }

            if (jQuery(".scroll-div").length) {
                jQuery(".scroll-div").mCustomScrollbar({
                    theme: "dark-2",
                    scrollButtons: {
                        enable: false
                    }
                });
            }
        });
    }());

    // --------------------------- Remove Active Class ------------------------ // 
    (function () {
        jQuery(document).click(function (e) {
            jQuery(".header-wrap .navigation").removeClass('off-canvas');
            jQuery("body").removeClass('off-canvas-body');
        });
    }());

    // --------------------------- Header Off Canvas Add ------------------------ //
    (function () {
        jQuery(".nav-trigger").on("click", function (e) {
            e.stopPropagation();
            jQuery(".header-wrap .navigation").toggleClass("off-canvas");
            jQuery("body").toggleClass("off-canvas-body");
        });
    }());

    // --------------------------- Custom Scroll Style ------------------------ // 
    (function () {
        jQuery(window).load(function () {
            if (jQuery(window).width() < 767) {
                if (jQuery(".header-wrap .navigation").length) {
                    jQuery(".header-wrap .navigation").mCustomScrollbar({
                        theme: "light",
                        scrollButtons: {
                            enable: false
                        }
                    });
                }
            }
        });
    }());

    // --------------------------- Scroll To Top Animate ------------------------ //
    (function () {
        jQuery('.to-top').click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    }());

    // --------------------------- Subscribe Popup ------------------------ //
    (function () {
        if (jQuery(".subscribe-me").length) {
            jQuery(".subscribe-me").subscribeBetter({
                trigger: "onidle", // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
                animation: "flyInDown", // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
                delay: 0, // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
                showOnce: true, // Toggle this to false if you hate your users. :)
                autoClose: false, // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
                scrollableModal: false      //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
            });
        }
    }());


    // --------------------------- Coundown Timer in 'Carbon Fiber' section ------------------------ //
    (function () {
        if (jQuery("#countdown-timer1").length) {
            $("#countdown-timer1").countdown("2016/05/18", function (event) {
                var $this = $(this).html(event.strftime(''
                        + '<span>%D</span> days '
                        + '<span>%H</span> hours '
                        + '<span>%M</span> mins '
                        + '<span>%S</span> secs'));
            });
        }
    }());

    // Main Carousel
    $("#owl-carousel-main").owlCarousel({
        rtl: false,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        singleItem: true,
        responsive: {
            0: {items: 1}
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Carousel for 'Choose Your Bike' section
    $('.products-slider').owlCarousel({
        items: 4,
        rtl: false,
        center: true,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        responsive: {
            0: {items: 1},
            1200: {items: 4},
            990: {items: 4},
            600: {items: 2},
            480: {items: 2}
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Carousel for 'RELATED PRODUCTS' section
    $('.related-product').owlCarousel({
        items: 4,
        rtl: false,
        center: true,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        responsive: {
            0: {items: 1},
            1500: {items: 6},
            1200: {items: 4},
            990: {items: 4},
            600: {items: 4},
            320: {items: 2}
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });


    // Carousel for 'They Say' section
    $('.they-say').owlCarousel({
        items: 1,
        loop: true,
        navigation: true,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Carousel for 'Payment Systems' section
    $('.payment-systems').owlCarousel({
        items: 8,
        loop: true,
        navigation: true,
        nav: true,
        autoplay: true,
        responsive: {
            0: {items: 1},
            1200: {items: 8},
            990: {items: 7},
            700: {items: 5},
            600: {items: 4},
            480: {items: 3},
            320: {items: 2}
        },
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    // Carousel for 'Brand Slider' section
    $('.brand-slider').owlCarousel({
        items: 5,
        loop: true,
        navigation: true,
        nav: true,
        autoplay: true,
        responsive: {
            0: {items: 1},
            990: {items: 5},
            768: {items: 4},
            480: {items: 3},
            380: {items: 2}
        },
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });


    /*--- Home 2 ---*/

    // Carousel for 'Best Seller' section
    $('.best-seller').owlCarousel({
        items: 2,
        rtl: false,
        loop: true,
        dots: false,
        nav: true,
        margin: 30,
        autoplay: false,
        responsive: {
            0: {items: 1},
            568: {items: 2}
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Carousel for 'Top Features' section
    $('.top-features').owlCarousel({
        items: 2,
        rtl: false,
        loop: true,
        dots: false,
        margin: 30,
        nav: true,
        autoplay: false,
        responsive: {
            0: {items: 1},
            568: {items: 2}
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });


    // --------------------------- Isotope ------------------------ //    
    jQuery(window).load(function () {
        if (jQuery().isotope) {
            var jQuerycontainer = jQuery('.isotope'); // cache container
            jQuerycontainer.isotope({
                itemSelector: '.isotope-item'
            });
            jQuery('.filtrable a').click(function () {
                var selector = jQuery(this).attr('data-filter');
                jQuery('.filtrable li').removeClass('active');
                jQuery(this).parent().addClass('active');
                jQuerycontainer.isotope({filter: selector});
                return false;
            });
            jQuerycontainer.isotope('layout'); // layout/layout

            var jQuerycontainer2 = jQuery('.collection'); // cache container
            jQuerycontainer2.isotope({
                itemSelector: '.collection'
            });
            jQuery('.coll-filtrable a').click(function () {
                var selector = jQuery(this).attr('data-filter');
                jQuery('.coll-filtrable li').removeClass('active');
                jQuery(this).parent().addClass('active');
                jQuerycontainer2.isotope({filter: selector});
                return false;
            });
            jQuerycontainer2.isotope('layout'); // layout/layout
        }
    });
    jQuery(window).resize(function () {
        if (jQuery().isotope) {
            jQuery('.row.isotope').isotope('layout'); // layout/relayout on window resize
            jQuery('.row.collection').isotope('layout');
        }

    });
    jQuery('#product-filter').isotope({filter: '.tab-1'});
    jQuery('.cat-filter').isotope({filter: '.cat-1'});
    jQuery('.collection').isotope({filter: '*'});


    // --------------------------- Google Map ------------------------ //
    (function () {
        if (typeof google === 'object' && typeof google.maps === 'object') {
            if (jQuery('#map-canvas2').length) {

                var map;
                var marker;
                var infowindow;
                var mapIWcontent = '' +
                        '' +
                        '<div class="map-info-window">' +
                        '<div class="map-location">' +
                        '<div class="loctn-img">' +
                        '<a class="media-link" href="#">' +
                        '<img class="img-responsive" src="assets/img/banner/map-location.jpg" alt=""/>' +
                        '</a>' +
                        '</div>' +
                        '<div class="loctn-info">' +
                        '<h4 class="title-2"> Location </h4>' +
                        '<p> 79 Orchard St,New York <br>NY 10002, USA </p>' +
                        '<p> (0096) 8645 234 438 </p>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '';
                var contentString = '' +
                        '' +
                        '<div class="iw-container">' +
                        '<div class="iw-content">' +
                        '' + mapIWcontent +
                        '</div>' +
                        '<div class="iw-bottom-gradient"></div>' +
                        '</div>' +
                        '' +
                        '';
                var image = 'assets/img/extra/map-icon.png'; // marker icon
                google.maps.event.addDomListener(window, 'load', function () {
                    var mapOptions = {
                        scrollwheel: false,
                        zoom: 10,
                        center: new google.maps.LatLng(41.079379, 28.9984466) // map coordinates
                    };

                    map = new google.maps.Map(document.getElementById('map-canvas2'),
                            mapOptions);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(41.0096559, 28.9755535), // marker coordinates
                        map: map,
                        icon: image,
                        title: 'Hello World!'
                    });


                });

            }
        }
    }());

});
(function ($) {
    'use strict';
    // Popup for Menu and Search Links in the Header
    $('#open-popup-search').on('click', function () {
        $('.page-search-box').fadeIn(250);
        $('.page-search-box .search-query').focus();
    });
    $('.close-page-search').on('click', function () {
        $('.page-search-box').fadeOut(250);
    });
})(jQuery);


var swiperslider1 = jQuery('.swiper-slider-1 .swiper-container');
var swiperslider2 = jQuery('.swiper-slider-2 .swiper-container');
var swiperslider3 = jQuery('.swiper-slider-3 .swiper-container');
var swiperslider4 = jQuery('.swiper-slider-4 .swiper-container');
var swiperslider5 = jQuery('.swiper-slider-5 .swiper-container');
jQuery(document).ready(function ($) {

    // ---------------------------------------------------------------------------------------
    // Products Slider Start

    jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        updater();
    });


    if (jQuery().swiper) {
        //Product Slider 1
        if (swiperslider1.length) {
            swiperslider1 = new Swiper(swiperslider1, {
                pagination: '.swiper-pagination',
                slidesPerView: 4,
                paginationClickable: true,
                loop: true,
                nextButton: '.swiper-slider-1 .owl-next',
                prevButton: '.swiper-slider-1 .owl-prev',
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 10
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 20
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetweenSlides: 30
                    }
                }
            });
        }

        //Product Slider 2
        if (swiperslider2.length) {
            swiperslider2 = new Swiper(swiperslider2, {
                slidesPerView: 4,
                paginationClickable: true,
                loop: true,
                nextButton: '.swiper-slider-2 .owl-next',
                prevButton: '.swiper-slider-2 .owl-prev',
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 10
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 20
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetweenSlides: 30
                    }
                }
            });
        }

        //Product Slider 3
        if (swiperslider3.length) {
            swiperslider3 = new Swiper(swiperslider3, {
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 30,
                loop: true,
                nextButton: '.swiper-slider-3 .owl-next',
                prevButton: '.swiper-slider-3 .owl-prev',
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 10
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 20
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetweenSlides: 30
                    }
                }
            });
        }

        if (swiperslider4.length) {
            swiperslider4 = new Swiper(swiperslider4, {
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 30,
                loop: true,
                nextButton: '.swiper-slider-4 .owl-next',
                prevButton: '.swiper-slider-4 .owl-prev',
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 10
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 20
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetweenSlides: 30
                    }
                }
            });
        }
        if (swiperslider5.length) {
            swiperslider5 = new Swiper(swiperslider5, {
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 30,
                loop: true,
                nextButton: '.swiper-slider-5 .owl-next',
                prevButton: '.swiper-slider-5 .owl-prev',
                breakpoints: {
                    481: {
                        slidesPerView: 1,
                        spaceBetweenSlides: 10
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 20
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetweenSlides: 30
                    }
                }
            });
        }
    }
    updater();
    //Products Slider End
    // ---------------------------------------------------------------------------------------

    // --------------------------- Sticky Header ------------------------ //
    (function () {
        if (jQuery(window).width() > 760) {
            jQuery(".header-wrap").sticky({topSpacing: 0});
        }
    }());

    if (jQuery("#gallery-2").length) {
        $('#gallery-2').royalSlider({
            fullscreen: {
                enabled: true,
                nativeFS: true
            },
            controlNavigation: 'thumbnails',
            thumbs: {
                orientation: 'vertical',
                paddingBottom: 4,
                appendSpan: true
            },
            transitionType: 'fade',
            autoScaleSlider: true,
            autoScaleSliderWidth: 1000,
            autoScaleSliderHeight: 800,
            loop: true,
            arrowsNav: false,
            keyboardNavEnabled: true

        });

        $('.royalSlider').royalSlider(function () {
            $('.rsFullscreenBtn').addClass('rsHidden');
        });
    }

    if (jQuery("#gallery-1").length) {
        $('#gallery-1').royalSlider({
            fullscreen: {
                enabled: false,
                nativeFS: false
            },
            controlNavigation: 'thumbnails',
            thumbs: {
                orientation: 'vertical',
                paddingBottom: 4,
                appendSpan: true
            },
            transitionType: 'fade',
            autoScaleSlider: true,
            autoScaleSliderWidth: 1000,
            autoScaleSliderHeight: 800,
            loop: true,
            arrowsNav: false,
            keyboardNavEnabled: true

        });

        $('.royalSlider').royalSlider(function () {
            $('.rsFullscreenBtn').addClass('rsHidden');
        });
    }

    // --------------------------- Price Ranger ------------------------ //
    (function () {
        var price_slider = document.getElementById('price_slider');

        if (jQuery("#price_slider").length) {
            noUiSlider.create(price_slider, {
                start: [10, 80],
                connect: true,
                step: 1,
                range: {
                    'min': 10,
                    'max': 100
                }
            });


            var valueMax = document.getElementById('max_price');
            var valueMin = document.getElementById('min_price');

            var labelMin = document.getElementById('label_min');
            var labelMax = document.getElementById('label_max');

            valueMax.style.display = 'none';
            valueMin.style.display = 'none';

            // When the slider value changes, update the input and span
            price_slider.noUiSlider.on('update', function (values, handle) {
                if (handle) {
                    valueMax.value = values[handle];
                    labelMax.innerHTML = values[handle];
                } else {
                    valueMin.value = values[handle];
                    labelMin.innerHTML = values[handle];
                }
            });

            // When the input changes, set the slider value
            valueMax.addEventListener('change', function () {
                price_slider.noUiSlider.set([null, this.value]);
            });

        }
    }());


});

function updater() {

    // refresh swiper slider
    if (jQuery().swiper) {
        //
        if (typeof (swiperslider1.length) === 'undefined') {
            swiperslider1.update();
            swiperslider1.onResize();
        }
        //
        if (typeof (swiperslider2.length) === 'undefined') {
            swiperslider2.update();
            swiperslider2.onResize();
        }
        //
        if (typeof (swiperslider3.length) === 'undefined') {
            swiperslider3.update();
            swiperslider3.onResize();
        }
        //
        if (typeof (swiperslider4.length) === 'undefined') {
            swiperslider4.update();
            swiperslider4.onResize();
        }
        //
        if (typeof (swiperslider5.length) === 'undefined') {
            swiperslider5.update();
            swiperslider5.onResize();
        }
    }
}

jQuery(window).resize(function () {
    updater();
});