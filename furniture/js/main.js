﻿$(function () {

    "use strict";

    // Main navigation & mega menu
    // ----------------------------------------------------------------

    // Global menu variables

    var objSearch = $('.search-wrapper'),
        objLogin = $('.login-wrapper'),
        objCart = $('.cart-wrapper'),
        objMenu = $('.floating-menu'),
        objMenuLink = $('.floating-menu a'),
        $search = $('.open-search'),
        $login = $('.open-login'),
        $cart = $('.open-cart'),
        $menu = $('.open-menu'),
        $openDropdown = $('.open-dropdown'),
        $settingsItem = $('.nav-settings .nav-settings-list li'),
        $close = $('.close-menu');

    // Open/close login

    $login.on('click', function () {
        toggleOpen($(this));
        objLogin.toggleClass('open');
        closeSearch();
        closeCart();
    });

    // Open/close search bar

    $search.on('click', function () {
        toggleOpen($(this));
        objSearch.toggleClass('open');
        objSearch.find('input').focus();
        closeLogin();
        closeCart();
    });

    // Open/close cart

    $cart.on('click', function () {
        toggleOpen($(this));
        objCart.toggleClass('open');
        closeLogin();
        closeSearch();
    });

    // Mobile menu open/close

    $menu.on('click', function () {
        objMenu.addClass('expanded');
        closeSearch();
        closeLogin();
        closeCart();
    });

    // Settings language & currency dropdown

    $settingsItem.on('click', function () {
        var $value = $(this).closest('.nav-settings').find('.nav-settings-value');
        $value.text($(this).text());
    });

    // Floating menu hyperlink
    if ($('nav').hasClass('navbar-single-page')) {
        objMenuLink.on('click', function () {
            objMenu.removeClass('expanded');
        });
    }

    // Open dropdown/megamenu

    $openDropdown.on('click', function (e) {

        e.preventDefault();

        var liParent = $(this).parent().parent(),
            liDropdown = liParent.find('.navbar-dropdown');

        liParent.toggleClass('expanded');

        if (liParent.hasClass('expanded')) {
            liDropdown.slideDown();
        }
        else {
            liDropdown.slideUp();
        }
    });

    // Close menu (mobile)

    $close.on('click', function () {
        $('nav').find('.expanded').removeClass('expanded');
        $('nav').find('.navbar-dropdown').slideUp();
    });

    // Global functions

    function toggleOpen(el) {
        $(el).toggleClass('open');
    }

    function closeSearch() {
        objSearch.removeClass('open');
        $search.removeClass('open');
    }
    function closeLogin() {
        objLogin.removeClass('open');
        $login.removeClass('open');
    }
    function closeCart() {
        objCart.removeClass('open');
        $cart.removeClass('open');
    }

    // Sticky header
    // ----------------------------------------------------------------

    var navbarFixed = $('nav.navbar-fixed');

    // When reload page - check if page has offset
    if ($(document).scrollTop() > 94) {
        navbarFixed.addClass('navbar-sticked');
    }
    // Add sticky menu on scroll
    $(document).on('bind ready scroll', function () {
        var docScroll = $(document).scrollTop();
        if (docScroll >= 10) {
            navbarFixed.addClass('navbar-sticked');
        } else {
            navbarFixed.removeClass('navbar-sticked');
        }
    });

    // Tooltip
    // ----------------------------------------------------------------

    $('[data-toggle="tooltip"]').tooltip()

    // Main popup
    // ----------------------------------------------------------------

    $('.mfp-open').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in',
        callbacks: {
            open: function () {
                // wait on popup initalization
                // then load owl-carousel
                $('.popup-main .owl-carousel').hide();
                setTimeout(function () {
                    $('.popup-main .owl-carousel').slideDown();
                }, 500);
            }
        }
    });

    // Main popup gallery
    // ----------------------------------------------------------------

    $('.open-popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    // Frontpage slider
    // ----------------------------------------------------------------

    var arrowIcons = [
        '<span class="icon icon-chevron-left"></span>',
        '<span class="icon icon-chevron-right"></span>'
    ];

    $.each($(".owl-slider"), function (i, n) {

        $(n).owlCarousel({
            autoHeight: false,
            navigation: true,
            navigationText: arrowIcons,
            items: 1,
            singleItem: true,
            addClassActive: true,
            transitionStyle: "fadeUp",
            afterMove: animatetCaptions,
            autoPlay: 8000,
            stopOnHover: false
        });

        animatetCaptions(); 

        function animatetCaptions(event) {
            "use strict";
            var activeItem = $(n).find('.owl-item.active'),
            timeDelay = 100;
            $.each(activeItem.find('.animated'), function (j, m) {
                var item = $(m);
                item.css('animation-delay', timeDelay + 'ms');
                timeDelay = timeDelay + 180;
                item.addClass(item.data('animation'));
                setTimeout(function () {
                    item.removeClass(item.data('animation'));
                }, 2000);
            });
        }

        if ($(n).hasClass('owl-slider-fullscreen')) {
            $('.header-content .item').height($(window).height());
        }
    });

    // Quote carousel
    // ----------------------------------------------------------------

    $.each($(".quote-carousel"), function (i, n) {
        $(n).owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            items: 3,
            paginationSpeed: 400,
            singleItem: false,
            navigationText: arrowIcons,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoPlay: 3000,
            stopOnHover: true
        });
    });

    // Icon slider
    // ----------------------------------------------------------------


    $.each($(".owl-icons"), function (i, n) {
        $(n).owlCarousel({
            autoHeight: false,
            pagination: false,
            navigation: true,
            navigationText: arrowIcons,
            items: 6,
            itemsDesktop: [1199, 5],
            itemsDesktopSmall: [979, 5],
            itemsTablet: [768, 4],
            itemsTabletSmall: false,
            itemsMobile: [479, 3],
            addClassActive: true,
            autoPlay: 5500,
            stopOnHover: true
        });
    });

    //Product slider
    $.each($(".owl-product-gallery"), function (i, n) {
        $(n).owlCarousel({
            //transitionStyle: "fadeUp",
            autoHeight: true,
            slideSpeed: 800,
            navigation: true,
            navigationText: arrowIcons,
            pagination: true,
            items: 1,
            singleItem: true
        });
    });


    // Scroll to top
    // ----------------------------------------------------------------

    var $wrapper = $('.wrapper');
    $wrapper.append($("<div class='scroll-top'><i class='icon icon-chevron-up'></i></div>"));

    var $scrollbtn = $('.scroll-top');

    $(document).on('ready scroll', function () {
        var docScrollTop = $(document).scrollTop(),
            docScrollBottom = $(window).scrollTop() + $(window).height() == $(document).height();

        if (docScrollTop >= 150) {
            $scrollbtn.addClass('visible');
        } else {
            $scrollbtn.removeClass('visible');
        }
        if (docScrollBottom) {
            $scrollbtn.addClass('active');
        }
        else {
            $scrollbtn.removeClass('active');
        }
    });

    $scrollbtn.on('click', function () {
        $('html,body').animate({
            scrollTop: $('body').offset().top
        }, 1000);
        return false;
    });

    // Product color var
    // ----------------------------------------------------------------

    $.each($('.product-colors'), function (i, n) {
        var $btn = $('.color-btn');
        $btn.on('click', function () {
            $(this).parent().find($btn).removeClass('checked');
            $(this).addClass('checked');
        });
    });

    // Tabsy images
    // ----------------------------------------------------------------

    var tabsyImg = $('.tabsy .tabsy-images > div'),
        tabsyLink = $('.tabsy .tabsy-links figure');

    // apply images to parent background
    tabsyImg.each(function (i, n) {
        $(n).css('background-image', 'url(' + $(n).find('img').attr('src') + ')');
    });

    tabsyLink.bind('mouseenter mouseleave', function () {
        var self = $(this),
            tabID = self.attr('data-image');
        tabsyLink.removeClass('current');
        tabsyImg.removeClass('current');
        self.addClass('current');
        self.closest('.tabsy').find("#" + tabID).addClass('current');
    });


    // Add to favorites list / product list
    // ----------------------------------------------------------------

    $('.add-favorite').on('click', function () {
        $(this).toggleClass("added");
    });

    $('.info-box-addto').on('click', function () {
        $(this).toggleClass('added');
    });

    // Filters toggle functions
    // ----------------------------------------------------------------

    // Check if some filter boxes has class active
    // then show hidden filters
    $('.filters .filter-box').each(function () {
        if ($(this).hasClass('active')) {
            $(this).find('.filter-content').show();
        }
    });

    var $filtersTitle = $('.filters .title');

    // Add emtpy span on title
    $filtersTitle.append('<span>' + '</span>');

    // Toggle filter function
    $filtersTitle.on('click', function (e) {
        var $this = $(this),
            $parent = $this.parent();
        $parent.toggleClass('active');

        if ($parent.hasClass('active')) {
            $parent.find('.filter-content').slideDown(300);
        }
        else {
            $parent.find('.filter-content').slideUp(200);
        }
    });

    // Update filter results - close dropdown filters
    // ----------------------------------------------------------------

    $('.filters .filter-update').on('click', function (e) {
        $(this).closest('.filter-box')
            .removeClass('active')
            .find('.filter-content').slideUp(200);
    });

    // Only for filters topbar
    // ----------------------------------------------------------------

    $('.filters input').on('change', function () {
        if ($(this).is(':checked')) {
            var $labelText = $(this).parent().find('label').text(),
                $title = $(this).closest('.filter-box').find('.title');
            
            $title.find('span').text($labelText);
        }
    });

    // Show hide filters (only for mobile)
    // ----------------------------------------------------------------

    $('.toggle-filters-mobile').on('click', function () {
        $('.filters').addClass('active');
    });
    $('.toggle-filters-close').on('click', function () {
        $('.filters').removeClass('active');
        $('html,body').animate({
            scrollTop: $('body').offset().top
        }, 800);
        return false;
    });


    // Strecher accordion
    // ----------------------------------------------------------------

    var $strecherItem = $('.stretcher-item');
    $strecherItem.bind({
        mouseenter: function (e) {
            $(this).addClass('active');
            $(this).siblings().addClass('inactive');
        },
        mouseleave: function (e) {
            $(this).removeClass('active');
            $(this).siblings().removeClass('inactive');
        }
    });

    // Blog image caption
    // ----------------------------------------------------------------

    var $blogImage = $('.blog-post-text img');
    $blogImage.each(function () {
        var $this = $(this);
        $this.wrap('<span class="blog-image"></span>');
        if ($this.attr("alt")) {
            var caption = this.alt;
            var link = $this.attr('data');
            $this.after('<span class="caption">' + caption + '</span>');
        }
    });

    // Coupon code 
    // ----------------------------------------------------------------

    $(".form-coupon").hide();
    $("#couponCodeID").on('click', function () {
        if ($(this).is(":checked")) {
            $(".form-coupon").fadeIn();
        } else {
            $(".form-coupon").fadeOut();
        }
    });

    // Checkout login / register
    // ----------------------------------------------------------------

    var loginWrapper = $('.login-wrapper'),
        loginBtn = loginWrapper.find('.btn-login'),
        regBtn = loginWrapper.find('.btn-register'),
        signUp = loginWrapper.find('.login-block-signup'),
        signIn = loginWrapper.find('.login-block-signin');

    loginBtn.on('click', function () {
        signIn.slideDown();
        signUp.slideUp();
    });

    regBtn.on('click', function () {
        signIn.slideUp();
        signUp.slideDown();
    });

    // Isotope filter
    // ----------------------------------------------------------------

    $(function () {
        var price = 0;
        var $products = $("#products");
        var $checkboxes = $("#filters input");
        var $sortPrice = $("#sort-price");
        var filters = [];

        $(".item").addClass("show-me");
        filters.push(".show-me");

        // Sort products
        // --------------------------------------

        $products.isotope({
            itemSelector: '.item',
            getSortData: {
                number: '.price parseInt'
            },
            sortBy: 'number'
        });

        // Checkboxes & radiobuttons
        // --------------------------------------

        $sortPrice.on('change', function () {
            var order = $('option:selected', this).attr('data-option-value');
            var valAscending = (order == "asc");

            $products.isotope({
                itemSelector: '.item',
                getSortData: {
                    number: '.price parseInt'
                },
                sortBy: 'number',
                sortAscending: valAscending,
                filter: filters
            });

        });

        // Checkboxes & radiobuttons
        // --------------------------------------

        $checkboxes.on('change', function () {
            filters = [];
            filters.push(".show-me");
            $checkboxes.filter(':checked').each(function () {
                filters.push(this.value);
            });

            filters = filters.join('');
            $products.isotope({
                filter: filters
            });

        });

        // Range slider
        // --------------------------------------

        $("#range-price-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 4000,
            from: 150,
            to: 3800,
            prefix: "$",
            onChange: function (data) {

                $(".item").each(function () {

                    price = parseInt($(this).find(".price").text(), 10);

                    if (data.from <= price && data.to >= price) {
                        $(this).addClass('show-me');
                    }
                    else {
                        $(this).removeClass('show-me');
                    }
                });

                $products.isotope({
                    itemSelector: '.item',
                    filter: filters
                });
            }
        });

    });

    // Single page - box filters
    // ----------------------------------------------------------------
    $(function () {

        // Filter buttons - toggle click event

        var $boxFilter = $('.box-filters figure');

        // init Isotope
        var $grid = $('#box-filters-results').isotope({
            itemSelector: '.item'
        });

        $boxFilter.on('click', function () {
            var $this = $(this);
            // Filter buttons - toggle click event
            if ($this.hasClass('active')) {
                $this.removeClass('active');

                $grid.isotope({ filter: "" });
            }
            else {
                $boxFilter.removeClass('active');
                $this.addClass('active');

                // Filter results
                var filterValue = $this.attr('data-filter');
                $grid.isotope({ filter: filterValue });
            }



        });


    });



    // Team members hover effect
    // ----------------------------------------------------------------

    var $member = $('.team article');
    $member.bind({
        mouseenter: function (e) {
            $member.addClass('inactive');
            $(this).addClass('active');
        },
        mouseleave: function (e) {
            $member.removeClass('inactive');
            $(this).removeClass('active');
        }
    });

    // Toggle contact form
    // ----------------------------------------------------------------

    $('.open-form').on('click', function () {
        var $this = $(this),
            parent = $this.parent();
        parent.toggleClass('active');
        if (parent.hasClass('active')) {
            $this.text($this.data('text-close'));
            $('.contact-form').slideDown();
        }
        else {
            $this.text($this.data('text-open'));
            $('.contact-form').slideUp();
        }

    });

    // Single page navigation (scroll to)
    // ----------------------------------------------------------------


    if ($('nav').hasClass('navbar-single-page')) {

        var $singleHyperlink = $('.navigation-main a');

        $singleHyperlink.on('click', function () {

            $singleHyperlink.removeClass('current');

            $(this).addClass('current');

            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - $('.navigation-main').height()
            }, 500);
            return false;
        });

        // Magnific popup scroll to content
        // ----------------------------------------------------------------

        $('.mfp-open-scrollto').on('click', function () {
            $('html,body').animate({
                scrollTop: $('.mfp-content').offset().top - 200
            }, 300);
            return false;
        });
    }

});

$(window).bind('load', function () {
    setTimeout(function () {
        $('.page-loader').addClass('loaded');
    }, 1000);
});



