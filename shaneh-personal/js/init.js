/*
 * Copyright (c) 2020 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions

	shane_tm_jarallax();
	shane_tm_vcard_hero_height();
	shane_tm_scrollable();
	shane_mobile_menu();
	shane_tm_anchor();
	shane_tm_down();
	shane_tm_intro_tabs();
	shane_tm_switcher_opener();
	shane_tm_color_switcher();
	shane_tm_menu_switcher();
	shane_tm_cursor_switcher();
	shane_tm_progress();
	shane_tm_vcard_menu();
	shane_tm_vcard_menu_extra();
	shane_tm_cursor();
	shane_tm_partners();
	shane_tm_kenburn_slider();
	shane_tm_imgtosvg();
	shane_tm_popup();
	shane_tm_data_images();
	shane_tm_portfolio();
	shane_tm_isotope();
	shane_tm_contact_form();
	shane_tm_ripple();
	shane_tm_about_animation();
	shane_tm_animate_text_second();
	
	jQuery(window).on('resize',function(){
		shane_tm_isotope();
		shane_tm_portfolio();
		shane_tm_vcard_hero_height();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.shane_tm_preloader').addClass('loaded');
    }, 1000);
		setTimeout(function(){
        shane_tm_isotope();
    }, 5000);
	});
	
});

// -------------------------------------------------
// ---------------   FUNCTIONS    ------------------
// -------------------------------------------------

// -------------------------------------------------
// --------------   SIDEBAR SCROLL  ----------------
// -------------------------------------------------

function shane_tm_scrollable(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.shane_tm_sidebar .inner .menu.scrollable');
	var verMenu			= jQuery('.shane_tm_sidebar .inner .menu');
	var logoHeight		= jQuery('.shane_tm_sidebar .inner .logo').outerHeight();
	var socialHeight	= jQuery('.shane_tm_sidebar .inner .bottom').outerHeight()+100;

	verMenu.css({height:H-logoHeight-socialHeight});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		
		element.css({height: H-logoHeight-socialHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function shane_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// ----  VCARD PORTFOLIO SINGLE HERO HEIGHT    ---------
// -----------------------------------------------------

function shane_tm_vcard_hero_height(){
	"use strict";
	
	var wrapper		= jQuery('.shane_tm_extra_section').height();
	var wrapperBlog	= jQuery('.shane_tm_extra_section').height()-40;
	var hero		= jQuery('.shane_tm_portfolio_single .hero.vcard');
	var heroBlog	= jQuery('.shane_tm_blog_single .hero.vcard');
	
	hero.css({height:wrapper+'px'});
	heroBlog.css({height:wrapperBlog+'px'});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function shane_mobile_menu(){
	
	"use strict";
		
	var trigger			= jQuery('.shane_tm_mobile_menu .topbar_inner .trigger');
	var triggerClose	= trigger.find('a .close');
	var triggerMenu		= trigger.find('a .menu');
	var dropdown		= jQuery('.shane_tm_mobile_menu .dropdown');
	
	trigger.on('click',function(){
		var element	= jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			triggerMenu.removeClass('closed');
			triggerClose.removeClass('opened');
			dropdown.slideUp();
		}else{
			element.addClass('opened');
			triggerMenu.addClass('closed');
			triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function shane_tm_anchor(){
	
	"use strict";
	
	jQuery('.shane_tm_mobile_menu .dropdown .dropdown_inner ul li a,.shane_tm_sidebar .inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-75
			}, 1000);
		}
		return false;
	});
	
	jQuery('.shane_tm_sidebar .inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function shane_tm_down(){
	
	"use strict";
	
	jQuery('.shane_tm_arrow_wrap a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-75
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ------------------    INTRO TABS    -----------------
// -----------------------------------------------------

function shane_tm_intro_tabs(){
	"use strict";
	
	var button		= jQuery('.shane_tm_intro_page .main_filter ul li a');
	var tabList		= jQuery('.shane_tm_intro_page .demo_list');
	
	button.on('click',function(){
		var element		= jQuery(this);
		var elAttr		= element.attr('data-tab');
		button.removeClass('current');
		tabList.removeClass('current');
		element.addClass('current');
		jQuery("#"+elAttr).addClass('current');
		return false;
	});
}

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function shane_tm_color_switcher(){
	
	"use strict";
	
	var list	= jQuery('.shane_tm_settings .colors li a');
	
	list.on('click',function(){
		var element = jQuery(this);
		var elval	= element.attr('class');
		element.closest('.shane_tm_all_wrap').attr('data-color',''+elval+'');
		return false;
	});	
}

function shane_tm_menu_switcher(){
	
	"use strict";
	
	var list	= jQuery('.shane_tm_settings .position li a');
	
	list.on('click',function(){
		var element = jQuery(this);
		var elval	= element.attr('class');
		element.closest('.shane_tm_all_wrap').attr('data-menu-position',''+elval+'');
		
		if(elval == 'topLeft1'){
			element.closest('.shane_tm_all_wrap').find('.shane_tm_menu').removeClass('extra');
			element.closest('.shane_tm_all_wrap').attr('data-menu-style','');
		}else if(elval == 'topLeft2'){
			element.closest('.shane_tm_all_wrap').find('.shane_tm_menu').removeClass('extra');
			element.closest('.shane_tm_all_wrap').attr('data-menu-style','inline');
		}else if(elval == 'leftCenter'){
			element.closest('.shane_tm_all_wrap').find('.shane_tm_menu').removeClass('extra');
			element.closest('.shane_tm_all_wrap').attr('data-menu-style','');
		}else if(elval == 'leftBottom1'){
			element.closest('.shane_tm_all_wrap').find('.shane_tm_menu').removeClass('extra');
			element.closest('.shane_tm_all_wrap').attr('data-menu-style','');
		}else if(elval == 'leftBottom2'){
			element.closest('.shane_tm_all_wrap').find('.shane_tm_menu').removeClass('extra');
			element.closest('.shane_tm_all_wrap').attr('data-menu-style','inline');
		}else if(elval == 'center'){
			element.closest('.shane_tm_all_wrap').find('.shane_tm_menu').removeClass('extra');
			element.closest('.shane_tm_all_wrap').attr('data-menu-style','');
		}else if(elval == 'sidebar'){
			element.closest('.shane_tm_all_wrap').attr('data-menu-style','');
			element.closest('.shane_tm_all_wrap').find('.shane_tm_menu').addClass('extra');
		}
		
	});	
	
	var myList	= jQuery('.shane_tm_settings .position li');
	
	myList.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('selected')){
			myList.removeClass('selected');
			element.addClass('selected');
		}
	});
			
}

function shane_tm_switcher_opener(){
	
	"use strict";
	var settings	= jQuery('.shane_tm_settings');
	var button		= settings.find('.link');
	var direction	= settings.find('.direction li a');
	var light		= settings.find('.direction li a.light');
	var dark		= settings.find('.direction li a.dark');
	
	button.on('click',function(){
		var element = jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			element.closest('.shane_tm_settings').removeClass('opened');
		}else{
			element.addClass('opened');
			element.closest('.shane_tm_settings').addClass('opened');
		}
		return false;
	});
	
	direction.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('active')){
			direction.removeClass('active');
			element.addClass('active');
		}
	});
	
	dark.on('click',function(){
		var el = jQuery(this);
		jQuery('body').addClass('dark');
		jQuery('.shane_tm_partners').addClass('opened');
		el.closest('.shane_tm_settings').addClass('changed');
		return false;
	});
	
	light.on('click',function(){
		var ele = jQuery(this);
		jQuery('body').removeClass('dark');
		jQuery('.shane_tm_partners').removeClass('opened');
		ele.closest('.shane_tm_settings').removeClass('changed');
		return false;
	});
}

function shane_tm_cursor_switcher(){
	
	"use strict";
	
	var wrapper		= jQuery('.shane_tm_all_wrap');
	var button		= jQuery('.shane_tm_settings .cursor li a');
	var show		= jQuery('.shane_tm_settings .cursor li a.show');
	var hide		= jQuery('.shane_tm_settings .cursor li a.hide');
	
	button.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('showme')){
			button.removeClass('showme');
			element.addClass('showme');
		}
		return false;
	});
	show.on('click',function(){
		wrapper.attr('data-magic-cursor','')
	});
	hide.on('click',function(){
		wrapper.attr('data-magic-cursor','hide')
	});
	
}

// -----------------------------------------------------
// ---------------   PROGRESS BAR    -------------------
// -----------------------------------------------------

function shane_tm_progress(){
	
	"use strict";
	
	var list	= jQuery('.shane_tm_skills ul li');
	
	list.each(function(){
		var element		= jQuery(this);
		var progressVal	= element.find('.progress').data('value');
		var progressBar	= element.find('.bar');
		progressBar.css({width:progressVal+'%'});
	});
}

// -----------------------------------------------------
// ---------------   VCARD MENU    ---------------------
// -----------------------------------------------------

function shane_tm_vcard_menu(){
	
	"use strict";
	
	var list	 = jQuery('.shane_tm_menu ul li');
	var vContent = jQuery('.shane_tm_all_wrap');
	var vSection = jQuery('.shane_tm_section');
	
	list.on('click',function(){
		var element = jQuery(this);
		var myHref	= element.find('a').attr('href');
		if(!element.hasClass('active')){
			list.removeClass('active');
			element.addClass('active');
			vSection.removeClass('active');
			vContent.find(myHref).addClass('active');
		}
	});
}

function shane_tm_vcard_menu_extra(){
	
	"use strict";
	
	var list	 = jQuery('.shane_tm_menu_extra ul li');
	var vContent = jQuery('.shane_tm_all_wrap');
	var vSection = jQuery('.shane_tm_extra_section');
	
	list.on('click',function(){
		var element = jQuery(this);
		var myHref	= element.find('a').attr('href');
		if(!element.hasClass('active')){
			list.removeClass('active');
			element.addClass('active');
			vSection.removeClass('active');
			vContent.find(myHref).addClass('active');
		}
	});
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function shane_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function shane_tm_partners(){
	
	"use strict";
	
		var carouse1	= jQuery('.shane_tm_partners .owl-carousel');
		
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
		
		carouse1.owlCarousel({
			loop: true,
			items: 5,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				1040:{items:3},
				1200:{items:4},
				1600:{items:4},
				1920:{items:5}
			}
		});
	
		var carouse2			= jQuery('.shane_tm_testimonials .owl-carousel');
	
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
	
		carouse2.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:1},
				1040:{items:2},
				1200:{items:2},
				1600:{items:2},
				1920:{items:2}
			}
		});
		shane_tm_imgtosvg();
	
		var carouse3			= jQuery('.shane_tm_sertificate .owl-carousel');
	
		var rtlMode	= false;
	
		if(jQuery('body').hasClass('rtl')){
			rtlMode = 'true';
		}
	
		carouse3.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:1},
				1040:{items:2},
				1200:{items:2},
				1600:{items:2},
				1920:{items:2}
			}
		});
	}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function shane_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.shane_tm_fixed_image .overlay_slider,.shane_tm_leftside .overlay_slider,.shane_tm_sidebar_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/portfolio/7.jpg' },
				{ src: 'img/portfolio/8.jpg' },
				{ src: 'img/portfolio/5.jpg' },
			]

		});
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function shane_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function shane_tm_popup(){
		"use strict";
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

wow = new WOW({
    animateClass: 'animated',
    offset: 10
});
wow.init();

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function shane_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function shane_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.shane_tm_works .portfolio_list ul');
		var filter		 = jQuery('.shane_tm_works .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function shane_tm_isotope(){
	
	"use strict";
	
	var masonry = $('.masonry');
	if($().isotope){
		masonry.each(function(){
			$(this).isotope({
			  itemSelector: '.masonry_item',
			  masonry: {

			  }
			});
		});
	}
	
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function shane_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function shane_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function shane_tm_about_animation(){

	"use strict";

	if ($('.parallax').length > 0) { 
	  var scene = $('.parallax').get(0);
	  var parallax = new Parallax(scene, { 
		relativeInput: true,
		onReady: function() { console.log('ready!');
	  } });
	}
}

// -------------------------------------------------
// -------------   ANIMATE TEXT 2  -----------------
// -------------------------------------------------

function shane_tm_animate_text_second(){
	
	"use strict";
	
	var animateSpan			= jQuery('.shane_tm_animation_text_word');
	var animateSpan2		= jQuery('.shane_tm_animation_text_word2');
	
	animateSpan.typed({
		strings: ["freelancer", "developer", "photographer"],
		loop: true,
		startDelay: 1e3,
		backDelay: 2e3
	});
	animateSpan2.typed({
		strings: ["Santiago", "Developer", "Designer"],
		loop: true,
		startDelay: 1e3,
		backDelay: 2e3
	});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.edrea_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.edrea_tm_bar_wrap');
		var pBar 			= progress.find('.edrea_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}
jQuery('.edrea_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});