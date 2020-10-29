/**
***************************************************************
* AUTHOR : CKavArt
* PROJECT : PINAK - Coming Soon Creative Template
* Purchase : https://themeforest.net/user/c-kav
*
* Copyright 2015-2016 CKavArt
* NOTE : This file licensed to CKavArt - https://themeforest.net/user/c-kav and it is strictly prohibited to copy or reuse it.
***************************************************************
*/

/**
*****************************************************************
* This file is licensed to CKavArt.
* It's not allowed to copy or reuse it Copyright CKavArt 2017-2018
* CKavArt : https://themeforest.net/user/c-kav
*****************************************************************
*/

; (function () {
	'use strict';

	var ckav = {};
	var package_ver = 'v0.7';

	/*----------  CONFIG  ----------*/
	ckav.config = {
		/*
		TWITTER
		String: consumer key. make sure to have your app read-only
		String: consumer secret key. make sure to have your app read-only
		*********************/
		twitter: {
			consumer_key: 'YOUR_CONSUMER_KEY',
			consumer_secret: 'YOUR_CONSUMER_SECRET_KEY'
		},

		/*
		URL OF SUCCESS PAGE ON FORM SUBMIT
		*********************/
		success_url: "thankyou.html",
		
		/*
		NAVIGATION
		*********************/
		anchors: ['intro-section', 'about-section', 'contact-section', 'subscribe-section', 'social-section'],
		navigationTooltips: ['Intro', 'About', 'Contact', 'Subscribe', 'Social'],
	}

	/*----------  RESPONSIVE  ----------*/
	enquire.register("screen and (min-width: 992px)", {
		match : function() {
			ckav.device = 'd';
		},  
		unmatch : function() {}
	}).register("(min-width: 200px) and (max-width: 991px)", {
		match : function() {
			ckav.device = 'm';
		},  
		unmatch : function() {}
	});

	/*----------  CHECK  ----------*/
	ckav.dmod = false;
	ckav.elcheck = function (el) {
		'use strict';
		if ($(el).length > 0) {
			return true;
		} else {
			return false;
		};
	}

	/*----------  UNIQUE  ----------*/
	ckav.window = $(window);
	ckav.uid = function () {
		'use strict';
		var uid = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 3; i++)
			uid += possible.charAt(Math.floor(Math.random() * possible.length));
		return 'rg' + uid;
	}

	/*----------  SET ID  ----------*/
	ckav.demo = function () { if (ckav.dmod) { return ckavNotice(); } else { return true; }; }
	ckav.setId = function (obj, prefix, n) {
		'use strict';

		n++;
		var a = prefix + n;
		$(obj).css({ opacity: 0 });
		$(obj).attr("id", a);
		$(obj).addClass(a);

		// Accordion setup
		if ($(obj).is(".accordion-widget")) {
			$(obj).find(".acc-block").each(function (index, el) {
				var id = a + "-acc-block-" + index;
				$(this).find(".acc-hd").attr("data-accid", "#" + id);
				$(this).find(".acc-content").attr("id", id);
				$(this).find(".acc-hd").append('<i class="acc-open ' + $(obj).attr("data-acc-openclass") + ' "></i><i class="acc-close ' + $(obj).attr("data-acc-closeclass") + '"></i>');
			});
		}
	}

	/*----------  MULTI-SCRIPT  ----------*/
	ckav.getMultiScripts = function (arr, path) {
		'use strict';

		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr);
		});

		_arr.push($.Deferred(function (deferred) {
			$(deferred.resolve);
		}));

		return $.when.apply($, _arr);
	}

	/*----------  MOBILE-MENU  ----------*/
	ckav.mobmenu = function (el) {
		'use strict';
		var $container = $(el).closest('.container');

		$(el).off("click");
		$container.find('.menu .sub-handler').off('click');

		$(el).on("click", function (e) {
			var nav = $(this).attr('data-nav');
			var c = $(this).attr('data-navclose');
			var o = $(this).attr('data-navopen');
			if ($(nav).hasClass('open')) {
				$(nav).removeClass('open');
				//$(this).find('i').removeClass($(this).attr('data-navclose')).addClass($(this).attr('data-navopen'));
				$(this).find('i').removeClass(c).addClass(o);
			} else {
				$(nav).addClass('open m-nav');
				//$(this).find('i').removeClass($(this).attr('data-navopen')).addClass($(this).attr('data-navclose'));

				$(this).find('i').removeClass(o).addClass(c);
			};

		});

		$container.find('.menu .sub-handler').on('click', function(event) {
			event.preventDefault();
			$(this).parent().toggleClass('active');

			if ($(this).hasClass('fa-plus')) {
				$(this).removeClass('fa-plus').addClass('fa-minus');
			} else {
				$(this).removeClass('fa-minus').addClass('fa-plus');
			}
		});
	}

	ckav.menuH = function (header, menu) {
		'use strict';
		$(menu).removeAttr('style');
		$(menu).css({
			minHeight: $(header).height()
		});
	}

	ckav.menuFn = function ($menu) {
		'use strict';
		$menu.on('mouseenter', '.has-dropdown', function(event) {
			$(this).addClass('active');
		});
		$menu.on('mouseleave', '.has-dropdown', function(event) {
			$(this).removeClass('active');
			$(this).children('.sub').removeAttr('style');
		});

		$menu.on('mouseenter', '.menu-item', function(event) {
			event.preventDefault();

			if($(this).children('.sub').length != 0){
				$(this).children('.sub').removeAttr('style');

				var submenu = $(this).children('.sub'),
					dropdown = $(submenu).offset(),
					l_offset_from_container = dropdown.left - (($(window).width()-$('.main-head > .container').width())/2),
					overflow_menu_w = l_offset_from_container + $(submenu).outerWidth() - $('.main-head > .container').width();
				
				if (overflow_menu_w > 0) {
					$(submenu).css({
						marginLeft: '-' + overflow_menu_w + 'px',
					});
				}

			}

		});
	}

	ckav.headerFn = function ($header) {
		if ($header.attr('data-sticky') == 'y') {
			
			// Hook to check data-sticky menu
			$('html').addClass('data-sticky');

			$header.addClass('navbar-fixed-top').removeClass('show-above');

			if ($(window).scrollTop() > $header.height()) {
				//console.log($header.height());
				$header.addClass("header-sticky");
				$header.attr('data-glass') === 'y' ? $header.removeClass('bg-glass') : null;
				ckav.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass("header-sticky");
				$header.attr('data-glass') === 'y' ? $header.addClass('bg-glass') : null;
				ckav.menuH($header, $header.find('.menu'));
			}
		};

		if ($header.attr('data-sticky-scroll') == 'y') {
			if ($(window).scrollTop() > $header.height()) {
				$header.addClass('navbar-fixed-top').addClass("header-sticky");
				ckav.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass('navbar-fixed-top').removeClass("header-sticky");
				ckav.menuH($header, $header.find('.menu'));
			}
		}

		if ($header.attr('data-hide') == 'y' && ckav.device == 'd') {
			
			$header.addClass('header-hide');

			if ($(window).scrollTop() > $header.height()) {
				$header.addClass("header-show");
				ckav.menuH($header, $header.find('.menu'));
			} else {
				$header.removeClass("header-show");
				ckav.menuH($header, $header.find('.menu'));
			}
		};
	}

	/*----------  OWL-CAROUSEL  ----------*/
	ckav.owlitems = function (arr) {
		'use strict';
		if (typeof (arr) == "string" && arr != 'false') {
			var t1 = arr.split('|');
			var t2 = {};
			$.each(t1, function (index, val) {
				var str = val;
				var newarr = str.split(',');
				t2[newarr[0]] = {}
				t2[newarr[0]] = { items: parseInt(newarr[1], 10) };
			});
			return t2;
		} else if (arr === 'false') {
			return {};
		} else {
			return false;
		}
	}
	ckav.getvar = function (v, default_v, val_type) {
		'use strict';
		if (val_type == 'n') {
			return v ? parseInt(v, 10) : default_v;
		}
		if (val_type == 'b') {
			if (v == 'true') { return true; }
			else if (v == 'false') { return false; }
			else { return default_v; }
		}
		if (val_type == 's') {
			if (v == 'false') {
				return false;
			} else {
				return v ? v : default_v;
			};

		}
	}
	ckav.slider = function (owlObj) {

		'use strict';

		var resObj = {
			0: { items: 1 },
			420: { items: 2 },
			600: { items: 3 },
			768: { items: 3 },
			980: { items: 4 }
		}

		var owlEle = $(owlObj + ' .owl-carousel'),
			o = $(owlObj);

		var config = {
			center: ckav.getvar(o.attr('data-center'), false, 'b'),
			stagePadding: ckav.getvar(o.attr('data-stpd'), 0, 'n'),
			items: ckav.getvar(o.attr('data-items'), 5, 'n'),
			margin: ckav.getvar(o.attr('data-margin'), 0, 'n'),
			nav: ckav.getvar(o.attr('data-nav'), false, 'b'),
			dots: ckav.getvar(o.attr('data-pager'), false, 'b'),
			slideby: ckav.getvar(o.attr('data-slideby'), 1, 'n'),
			rbase: ckav.getvar(o.attr('data-rbase'), o.parent(), 's'),
			res: o.attr('data-itemrange') ? ckav.owlitems(o.attr('data-itemrange')) : resObj,
			animOut: ckav.getvar(o.attr('data-out'), 'fadeOut', 's'),
			animIn: ckav.getvar(o.attr('data-in'), 'fadeIn', 's'),
			autoplay: ckav.getvar(o.attr('data-autoplay'), false, 'b'),
			autoplayTimeout: ckav.getvar(o.attr('data-timeout'), 3000, 'n'),
			autoplayHoverPause: ckav.getvar(o.attr('data-hstop'), true, 'b'),
			loop: ckav.getvar(o.attr('data-loop'), false, 'b'),
			autoWidth: ckav.getvar(o.attr('data-awidth'), false, 'b'),
			autoHeight: ckav.getvar(o.attr('data-hauto'), true, 'b'),
			touchDrag: ckav.getvar(o.attr('data-tdrag'), true, 'b'),
			mouseDrag: ckav.getvar(o.attr('data-mdrag'), true, 'b'),
			pullDrag: ckav.getvar(o.attr('data-pdrag'), true, 'b'),
			contentHeight: ckav.getvar(o.attr('data-h'), true, 'b')
		}
		o.animate({ opacity: 1 }, 300, function () {

			if (owlEle.find(".owl-stage").length === 0) {
				owlEle.owlCarousel({
					center: config.center,
					stagePadding: config.stagePadding,
					items: config.items,
					margin: config.margin,
					nav: config.nav,
					dots: config.dots,
					slideBy: config.slideby,
					navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					responsiveBaseElement: config.rbase,
					responsive: config.res,
					loop: $(owlObj + " .owl-carousel > .item").length > 1 ? config.loop : false,
					animateOut: config.animOut, //'slideOutDown',
					animateIn: config.animIn, //'flipInX',
					autoplay: config.autoplay,
					autoplayTimeout: config.autoplayTimeout,
					autoplayHoverPause: config.autoplayHoverPause,
					autoHeight: config.autoHeight,
					autoWidth: config.autoWidth,
					touchDrag: config.touchDrag,
					mouseDrag: config.mouseDrag,
					pullDrag: config.pullDrag,
					autoplaySpeed: 2000,

					onInitialized: function () {
						owlEle.animate({ opacity: 1 }, 300);
						
						// Align arrows
						owlEle.find('.owl-nav').css({
							top: owlEle.find('.owl-stage-outer').outerHeight() / 2
						});
						ckav.blazyload(owlEle);
					}
				});

				o.find('.carousel-btn .prev').on('click', function () { owlEle.trigger('prev.owl.carousel'); });
				o.find('.carousel-btn .next').on('click', function () { owlEle.trigger('next.owl.carousel'); });
			}
		});
	}

	/*----------  FULL-HEIGHT & WIDTH  ----------*/
	ckav.fullwh = function (obj) {
		'use strict';
		// global vars
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		// set initial div height / width
		$(obj).css({
			'width': winWidth,
			'height': winHeight,
		});
	}

	/*----------  FULL HEIGHT  ----------*/
	ckav.fullh = function (obj, wrp) {
		'use strict';

		if (wrp) {
			var winHeight = $(obj).closest(wrp).height();
		} else {
			var winHeight = $(window).height();
		}

		// set initial div height / width
		$(obj).css({
			'height': winHeight,
		});
	}

	/*----------  SWIPER SLIDER  ----------*/
	ckav.swiper_slider = function (obj) {

		'use strict';

		var config = {
			autoplay: ckav.getvar($(obj).attr('data-autoplay'), false, 'b'),
			speed: ckav.getvar($(obj).attr('data-speed'), 1000, 'n'),
			fullsize: ckav.getvar($(obj).attr('data-fullsize'), false, 'b'),
		}

		if (config.fullsize) {
			ckav.fullwh(obj);
			$(window).resize(function () {
				ckav.fullwh(obj);
			});
		};

		var swiper = new Swiper(obj, {

			direction: 'horizontal',
			touchEventsTarget: 'container',
			speed: config.speed,
			autoplay: config.autoplay,
			effect: 'fade', // 'slide' or 'fade' or 'cube' or 'coverflow'
			parallax: false,
			pagination: {
				el: obj + ' .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
			  nextEl: obj + ' .swiper-button-next',
			  prevEl: obj + ' .swiper-button-prev',
			},
			on: {
				init: function () {
					$(obj).animate({ opacity: 1 }, 300);
				},
			},
		});
	}

	/*----------  SWIPER GALLERY  ----------*/
	ckav.swiper_gallery = function (obj) {
		'use strict';


		var config = {
			autoplay: ckav.getvar($(obj).attr('data-autoplay'), false, 'b'),
			/*speed: ckav.getvar($(obj).attr('data-speed'), 1000, 'n'),
			fullsize: ckav.getvar($(obj).attr('data-fullsize'), false, 'b'),*/
		}

		var galleryTop = new Swiper(obj + ' .gallery-top', {
			spaceBetween: 10,
			effect: 'fade',
			// Navigation arrows
			navigation: {
			  nextEl: obj + ' .swiper-button-next',
			  prevEl: obj + ' .swiper-button-prev',
			},
			on: {
				init: function () {
					$(obj).animate({ opacity: 1 }, 300);
				},
			},
		});
		var galleryThumbs = new Swiper(obj + ' .gallery-thumbs', {
			spaceBetween: 10,
			centeredSlides: true,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true,
			autoplay: config.autoplay
		});

		galleryTop.controller.control = galleryThumbs;
	    galleryThumbs.controller.control = galleryTop;
	    
	}

	/*----------  TABS  ----------*/
	ckav.tabs = function (obj) {
		'use strict';

		if ($(obj.tb).hasClass('tabs-auto')) {
			var t = 0,
				tb_activeClass = $(obj.tb).attr('data-tb-active') ? 'active '+$(obj.tb).attr('data-tb-active') : 'active',
				pn_activeClass = $(obj.tb).attr('data-pn-active') ? 'active '+$(obj.tb).attr('data-pn-active') : 'active',
				
				tb_normalClass = $(obj.tb).attr('data-tb-normal') ? $(obj.tb).attr('data-tb-normal') : '',
				pn_normalClass = $(obj.tb).attr('data-pn-normal') ? $(obj.tb).attr('data-pn-normal') : '';

			$(obj.tb).find('.tb-list > .tb').each(function () {
				var tb = obj.count + '-tb-' + t;
				$(this).attr("data-tb", '#' + tb);
				$(this).addClass(tb_normalClass);
				$(obj.tb).find('.tb-content > .tb-pn:eq(' + t + ')').attr("id", tb);
				t++;
			});

			$(obj.tb).on('click', '.tb-list > .tb', function (e) {
				e.preventDefault();

				$(this).closest('.tb-list').find('.tb').removeClass(tb_activeClass).addClass(tb_normalClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tb-pn').removeClass(pn_activeClass);
				target.addClass(pn_activeClass);

			});
			if ($(obj.tb).find('.tb-list > .tb').hasClass(tb_activeClass)) {
				$(obj.tb).find('.tb-list > .tb.active').trigger('click');
			} else {
				$(obj.tb).find('.tb-list > .tb:first').trigger('click');
			};

		} else {

			$('[data-tb]').each(function (index, el) {
				var target = $(this).attr('data-tb');
				$(target).addClass('tab-pn');
			});
			$(obj).on('click', function (e) {
				e.preventDefault();

				var	tb_activeClass = $(obj).attr('data-tb-active') ? 'active '+$(obj).attr('data-tb-active') : 'active',
					pn_activeClass = $(obj).attr('data-pn-active') ? 'active '+$(obj).attr('data-pn-active') : 'active',
					tb_normalClass = $(obj).attr('data-tb-normal') ? $(obj).attr('data-tb-normal') : '',
					pn_normalClass = $(obj).attr('data-pn-normal') ? $(obj).attr('data-pn-normal') : '';

				$(obj).closest('.tab-widget').find('[data-tb]').addClass(tb_normalClass).removeClass(tb_activeClass);
				$(this).removeClass(tb_normalClass).addClass(tb_activeClass);

				var target = $($(this).attr('data-tb'));
				target.siblings('.tab-pn').addClass(tb_normalClass).removeClass(pn_activeClass).hide();
				target.show().removeClass(tb_normalClass).addClass(pn_activeClass);

			}).eq(0).trigger('click');
		};

	}

	/*----------  ACCORDION  ----------*/
	ckav.accordion = function (obj) {
		'use strict';

		function close_acc(parent_obj) {
			$(parent_obj).find('.acc-hd').removeClass('active');
			$(parent_obj).find('.acc-content').stop().slideUp(200).removeClass('open');
		}

		$(obj).animate({ opacity: 1 }, 500, function () { });

		$(obj).on('click', '.acc-hd', function (e) {
			e.stopPropagation();
			e.preventDefault();

			var content = $(this).attr('data-accid');
			if ($(this).is('.active')) {
				close_acc(obj);
			} else {
				close_acc(obj);

				// Add active class to section title
				$(this).addClass('active');
				// Open up the hidden content panel
				$(obj).find(content).stop().slideDown(200).addClass('open');
			}

		});

		// First open option
		if ($(obj).attr("data-acc-firstopen") == 'y') {
			$(obj).find(".acc-block:first .acc-hd").trigger('click');
		} else {
			close_acc(obj);
		}

	}

	/*----------  GLOBAL VALIDATION  ----------*/
	ckav.global_validation = {
		form: '',
		rules: {
			email: { required: true, email: true },
			name: { required: true },
			message: { required: true },
			phone: { required: true, number: true },
			date: { required: true, date: true },
			datetime: { required: true, date: true },
			people: { required: true, number: true }
		},
		msgpos: 'normal',
		msg: {
			email: { email: "Please, enter a valid email" }
		},
		subscribe_successMsg: "You are in list. We will inform you as soon as we finish.",
		form_successMsg: "Thank you for contact us. We will contact you as soon as possible.",

		successMsg: "",
		errorMsg: "Oops! Looks like something went wrong. Please try again later."
	}

	/*----------  FORM VALIDATION  ----------*/
	ckav.formVaidate = function (obj) {
		'use strict';
		var msgpos = $(obj.form).attr('data-msgpos') ? $(obj.form).attr('data-msgpos') : 'normal';
		if (msgpos == 'append') {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				errorPlacement: function (error, element) {
					if (msgpos == 'append') {
						error.appendTo(element.closest("form").find('.msg-wrp'));
					};
				},
				success: function (element) {
					element.remove();
				}
			});
		} else {
			$(obj.form).validate({
				onfocusout: false,
				onkeyup: false,
				rules: obj.rules,
				messages: obj.msg,
				highlight: false,
				success: function (element) {
					element.remove();
				}
			});
		};
	}

	/*----------  FORM RESET  ----------*/
	ckav.resetForm = function (form) {
		'use strict';
		$(form).find('input[type="text"], input[type="email"], textarea').val(null);
	}

	/*----------  CONTACT FORM  ----------*/
	ckav.contactForm = function ($form, formData, validate_data) {
		'use strict';

		if ($form.find('label.error').length > 0) { $form.find('label.error').hide(); }

		var $btn = $form.find(".btn").button('loading');
		var timer = 4000;

		if ($form.valid()) {
			$.ajax({
				url: $form.attr('action'),
				type: 'POST',
				data: formData,
				success: function (data) {
					if (data.status == 'error') {
						// Email subscription error messages
						swal("Error!", data.type, "error");
						$btn.button('reset');
						ckav.resetForm($form);
					} else {
						//swal("Success!", validate_data.successMsg, "success");
						swal({
							type: "success",
							title: "Success!",
							text: validate_data.successMsg,
							timer: timer
						}, function () {
							if ($form.attr('data-success-redirect') === 'y') {
								window.location = ckav.config.success_url;
							}
						});

						$btn.button('reset');
						$.magnificPopup.close();
						ckav.resetForm($form);

						setTimeout(function () { swal.close(); }, timer);
					};
				},
				error: function () {
					swal("Error!", validate_data.errorMsg, "error");
					$btn.button('reset');
					$.magnificPopup.close();
					setTimeout(function () { swal.close(); }, timer);
				}
			});
		} else {
			$form.find("label.error").delay(timer).fadeOut('400', function () {
				$(this).remove();
			});
			$btn.button('reset');
		};
	}

	/*----------  FORM WIDGET  ----------*/
	ckav.formWidget = function (obj) {
		'use strict';

		var config = {
			popup_selector: $(obj).attr('data-popup') ? '.' + $(obj).attr('data-popup') : false,
			form_type: $(obj).attr('data-formtype') ? $(obj).attr('data-formtype') : 'normal',
			form_selector: obj
		}

		var $form = $(config.form_selector);

		// Validation rules
		ckav.global_validation.form = config.form_selector;
		var validate_data = ckav.global_validation;

		// Pop up form
		if (config.popup_selector) {
			$(config.popup_selector).each(function (index, el) {
				$(this).magnificPopup({
					type: 'inline',
					preloader: false
				});
			});
		};

		// Date and time picker options
		if ($form.find(".date-pick").length > 0 || $form.find(".datetime-pick").length > 0) {

			var date_script_arr = [
				/*
				http://www.malot.fr/bootstrap-datetimepicker/index.php
				https://github.com/smalot/bootstrap-datetimepicker
				*/
				"lib/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"
			];

			ckav.getMultiScripts(date_script_arr, '').done(function () {
				// Date picker
				if ($form.find(".date-pick").length > 0) {
					$form.find(".date-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true,
							startView: 2,
							minView: 2
						});
					});
				};

				// Date time picker
				if ($form.find(".datetime-pick").length > 0) {
					$form.find(".datetime-pick").each(function (index, el) {
						$(this).datetimepicker({
							autoclose: true
						});
					});
				};
			});
		}
		

		// Form validation
		ckav.formVaidate(validate_data);

		// Form
		$form.find('button').off('click').on('click', function (e) {
			e.preventDefault();
			if (config.form_type == "newsletter") {
				ckav.global_validation.successMsg = ckav.global_validation.subscribe_successMsg;
			} else {
				ckav.global_validation.successMsg = ckav.global_validation.form_successMsg;
			};

			ckav.contactForm($form, $form.serializeObject(), validate_data);
			return false;
		});
	}

	$.fn.serializeObject = function () {
		'use strict';

		var o = {};
		var a = this.serializeArray();
		$.each(a, function () {

			// Field labels
			var field_label = $('[name=' + this.name + ']').attr('data-label') ? $('[name=' + this.name + ']').attr('data-label') : this.name;

			// Field values
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push({ val: this.value, label: field_label } || '');
			} else {
				//o[this.name] = this.value || '';
				o[this.name] = { val: this.value, label: field_label } || '';
			}
		});
		return o;
	};

	/*----------  VIDEO BG  ----------*/
	ckav.videoBg = function (obj, imglist) {
		'use strict';
		var isMobile = {
			Android: function () {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function () {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function () {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function () {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function () {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		if (isMobile.any()) {
			$(obj).css("display", "none");
			/*$(obj).vegas({
				slides: [
					{ src: "images/bg-1.jpg" },
					{ src: "images/bg-2.jpg" },
					{ src: "images/bg-3.jpg" },
					{ src: "images/bg-4.jpg" }
				]
				slides: imglist
			});*/
		}
		else {
			$(obj).css("display", "block");
			$(obj).YTPlayer({
				//fitToBackground: true,
    			videoId: $(obj).attr('data-videoid'),
    			start: $(obj).attr('data-start') ? parseInt($(obj).attr('data-start')) : 0,
    			playerVars: {
					autoplay: 1,
				},
				onReady: function (player) { }
			});
		}
	}

	/*----------  VIDEO POPUP  ----------*/
	ckav.videoPopup = function (obj) {
		'use strict';
		$(obj).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};

	/*----------  INLINE POPUP  ----------*/
	ckav.inlinePopup = function (obj) {
		'use strict';
		$('body').off('click').on('click', obj, function (e) {
			$(this).magnificPopup({
				type: 'inline',
				preloader: false
			}).trigger('click');
		});
	}

	/*----------  SLIDESHOW  ----------*/
	ckav.bgSlider = function (setting) {
		'use strict';
		setTimeout(function () {
			$(setting.obj).vegas({
				delay: setting.delay,
				slides: setting.slides,
				animation: setting.effect
			});
		}, 1000);

	}

	/*----------  LINK SCROLL  ----------*/
	ckav.linkscroll = function (obj) {
		'use strict';
		$(document).on('click', obj, function (e) {
			e.preventDefault();
			if ($(this).closest('.nav-links').hasClass('nav-links') == false && $(this).attr('href').indexOf("popup") === -1) {
				// target element id
				var id = $(this).attr('href');
				// target element
				var $id = $(id);
				if ($id.length === 0) { return; }
				// top position relative to the document
				var pos = $(id).offset().top;
				// animated top scrolling
				$('body, html').animate({ scrollTop: pos }, 1200);
			};
		});
	}

	/*----------  CLOCK  ----------*/
	ckav.countdown = function (obj) {
		'use strict';

		var o = $(obj);
		var config = {
			day: parseInt(o.attr("data-day"), 10),
			month: parseInt(o.attr("data-month"), 10),
			year: parseInt(o.attr("data-year"), 10),
			hour: parseInt(o.attr("data-hr"), 10),
			min: parseInt(o.attr("data-min"), 10),
			sec: parseInt(o.attr("data-sec"), 10)
		}

		var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date(config.year, config.month - 1, config.day - 1);
		var d = new Date();
		var secondDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

		var countdownHtml = '<div class="inner-dashboard">';
		countdownHtml += '	<!-- DAYS -->';
		countdownHtml += '	<div class="dash days_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += diffDays > 99 ? '<div class="digit">0</div>' : '';
		//countdownHtml += '<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">days</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- HOURS -->';
		countdownHtml += '	<div class="dash hours_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">hours</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- MINIUTES -->';
		countdownHtml += '	<div class="dash minutes_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">minutes</span>';
		countdownHtml += '	</div>';
		countdownHtml += '	<!-- SECONDS -->';
		countdownHtml += '	<div class="dash seconds_dash">';
		countdownHtml += '		<div class="inner-dash">';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '			<div class="digit">0</div>';
		countdownHtml += '		</div>';
		countdownHtml += '		<span class="dash_title">seconds</span>';
		countdownHtml += '	</div>';
		countdownHtml += '</div>';

		o.html(countdownHtml);

		// DESKTOP CLOCK
		o.countDown({
			targetDate: {
				'day': config.day,
				'month': config.month,
				'year': config.year,
				'hour': config.hour,
				'min': config.min,
				'sec': config.sec
			},
			omitWeeks: true
		});
	}

	/*----------  INSTAGRAM  ----------*/
	ckav.instagram = function (obj) {
		'use strict';

		var o = $(obj),
			id = o.attr('id');
		o.find('.feed-data').socialfeed({
			instagram: {
				accounts: ['*'],
				limit: o.attr('data-insta-limit') ? o.attr('data-insta-limit') : 8,
				userdata: o.attr('data-insta-user') ? o.attr('data-insta-user') : '',
				client_id: ckav.config.instagram.client_id,
				access_token: ckav.config.instagram.access_token,
				tpl_class: o.attr('data-insta-tplclass') ? o.attr('data-insta-tplclass') : '',
			},

			// GENERAL SETTINGS
			template: 'lib/social-feed/' + o.attr('data-insta-tpl') + '.html',
			length: o.attr('data-insta-length') ? parseInt(o.attr('data-insta-length'), 10) : 256,
			show_media: true,
			update_period: false,

			callback: function () {
				o.animate({ opacity: 1 }, 500, function () {
					if (ckav.elcheck('#' + id + ' .instagram-carousel')) {
						ckav.slider('#' + id + ' .instagram-carousel');
					}
				});
			}
		});
	}

	/*----------  TWITTER  ----------*/
	ckav.twitter = function (obj) {
		'use strict';

		var o = $(obj),
			id = o.attr('id');
		o.find('.feed-data').socialfeed({
			twitter: {
				accounts: ['@' + o.attr('data-twitter-user')],
				limit: o.attr('data-twitter-limit') ? o.attr('data-twitter-limit') : 6,
				consumer_key: ckav.config.twitter.consumer_key,
				consumer_secret: ckav.config.twitter.consumer_secret,
				tpl_class: o.attr('data-twitter-tplclass') ? o.attr('data-twitter-tplclass') : '',
				tpl_class1: o.attr('data-twitter-tplclass1') ? o.attr('data-twitter-tplclass1') : '',
				tpl_class2: o.attr('data-twitter-tplclass2') ? o.attr('data-twitter-tplclass2') : '',
				tpl_class3: o.attr('data-twitter-tplclass3') ? o.attr('data-twitter-tplclass3') : '',
				tpl_class4: o.attr('data-twitter-tplclass4') ? o.attr('data-twitter-tplclass4') : ''
			},

			// GENERAL SETTINGS
			template: 'lib/social-feed/' + o.attr('data-twitter-tpl') + '.html',
			length: o.attr('data-twitter-length') ? parseInt(o.attr('data-twitter-length'), 10) : 256,
			show_media: true,
			update_period: false,

			callback: function () {
				o.animate({ opacity: 1 }, 500, function () {
					if (ckav.elcheck('#' + id + ' .twitter-carousel')) {
						ckav.slider('#' + id + ' .twitter-carousel');
					}
				});
			}
		});
	}

	/*----------  FILTER  ----------*/
	ckav.filter = function (obj) {
		'use strict';

		$(obj).animate({ opacity: 1 }, 500, function () { });
		var filterObj = $(obj);
		var container = filterObj.find('.filter-container');
		var list = filterObj.find('.filter-list');
		var time = 500;

		list.find('[data-filter]').on('click', function (event) {
			event.preventDefault();

			var filter = $(this).attr("data-filter");

			list.find("[data-filter]").removeClass('active');
			$(this).addClass('active');

			container.find('.filter-content').stop().animate({ opacity: 0 }, 150, function () {
				$(this).hide();
				if (filter == 'all') {
					container.find('.filter-content').show().stop().animate({ opacity: 1 }, time);
				} else {
					$(filter).show().stop().animate({ opacity: 1 }, time);
				}
			});

		});

		list.find('.active') ? list.find('.active').trigger('click') : list.find('[data-filter]').first().trigger('click');
	}

	/*----------  GOOGLE MAP  ----------*/
	ckav.gmapset = function (obj) {
		'use strict';

		var o = $(obj);
		o.css({ height: o.attr("data-map-height") });
		o.animate({ opacity: 1 }, 500, function () {
			o.mapit({
				latitude: o.attr("data-map-latitude"),
				longitude: o.attr("data-map-longitude"),
				zoom: 16,
				type: 'ROADMAP',
				scrollwheel: false,
				marker: {
					latitude: o.attr("data-map-latitude"),
					longitude: o.attr("data-map-longitude"),
					icon: 'images/gmap-marker.png',
					title: o.attr("data-map-markerhd"),
					open: false,
					center: true
				},
				address: o.attr("data-map-markerhtml"),
				styles: o.attr("data-map-styles") ? 'GRAYSCALE' : false //'GRAYSCALE',
			});
		});

	}

	/*----------  VIDE VIDEO BACKGROUND  ----------*/
	ckav.vide = function (obj) {
		'use strict';

		var videofile = $(obj).attr("data-vide-src");
		$(obj).animate({ opacity: 1 }, 500, function () { });
		$(obj).vide({
			mp4: videofile,
			webm: videofile,
			ogv: videofile,
			poster: videofile + ".jpg"
		}, {
				volume: 1,
				playbackRate: 1,
				muted: true,
				loop: true,
				autoplay: true,
				position: 'center center', // Similar to the CSS `background-position` property.
				posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
				resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
				bgColor: 'transparent', // Allow custom background-color for Vide div,
				className: '' // Add custom CSS class to Vide div
			});
	}

	/*----------  LAZY LOAD  ----------*/
	ckav.blazyload = function (obj){
		'use strict';

		var bLazy = new Blazy({
			loadInvisible: true,
			success: function(ele){
				if ($(obj).hasClass('owl-carousel')) {
					$(obj).find('.owl-nav').css({
						top: $(obj).find('.owl-stage-outer').outerHeight() / 2
					});
				}
			}
		});
	}

	/*----------  CKAV FULLPAGE SCROLL  ----------*/
	ckav.fullPageScroll = function() {
		var scrollname 		= '#ckav-sscroll',
			verticleCenter 	= false,
			scrollSpeed 	= 900,
			dotnavigation 	= true,
			tooltip 		= true,
			mainbody		= 'body';


		$(scrollname).fullpage({
			verticalCentered: verticleCenter,
			navigation: dotnavigation,
			scrollingSpeed: scrollSpeed,
			menu: '#mainmenu',
			anchors: ckav.config.anchors,
			navigationTooltips: ckav.config.navigationTooltips,
			
			showActiveTooltip: tooltip,

			afterLoad: function(anchorLink, index){
				var loadedSection = $(this);
				var sectiontheme = $(this).attr("data-tsection");
				
				ckav.animationIn(".ckav-section.active");

				if(sectiontheme == "sdark") {
					$(mainbody).removeClass("slight");
					$("#trigger-menu").removeClass("txt-dark");
					$("#trigger-menu").addClass("txt-white");
					$(mainbody).addClass("sdark");
				}
				if(sectiontheme == "slight") {
					$(mainbody).removeClass("sdark");
					$("#trigger-menu").addClass("txt-dark");
					$("#trigger-menu").removeClass("txt-white");
					$(mainbody).addClass("slight");
				}
			},

			onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);

				ckav.animationOut(".ckav-section");
			},

			afterRender: function(){
				ckav.tooltipFonts();
				$(".loader-bg").fadeOut("slow");
			}
		});
	}

	/*----------  SCROLL-DOWN BUTTON  ----------*/
	ckav.scrollDownBtn = function() {
		$(".scroll-down-btn").on("click", function() {
			$.fn.fullpage.moveSectionDown();
		});
	}

	/*----------  SCROLL-TO  ----------*/
	ckav.scrollTo = function() {
		$(".scroll-to").on("click", function() {
			var tosection = $(this).attr('data-tosection');
			console.log(tosection);
			$.fn.fullpage.moveTo(tosection);
		});
	}

	ckav.tooltipFonts = function() {
		var fontFamily = $("body").attr("data-tooltipfont");
		$("#fp-nav ul li .fp-tooltip").css("font-family",fontFamily);
	}

	/*----------  ANIMATION OUT  ----------*/
	ckav.animationOut = function(obj) {
		'use strict';

		var newO = $(obj+" .animated");

		for (var i = 0; i < newO.length; i++) {
			var animateobj = $(newO[i]), 
				animateOut = animateobj.attr('data-animOut'),
				animateIn = animateobj.attr('data-animIn');

			if (animateOut || animateIn) {
				if (animateOut){
					var animatearrout = animateOut.indexOf('|') > -1 ? animateOut.split('|') : animateOut,
					animateclassout = typeof animatearrout == 'object' ? animatearrout[0] : animatearrout,
					animatedelayout = typeof animatearrout == 'object' ? animatearrout[1] : 0;
				}
				if (animateIn){
					var	animatearrin = animateIn.indexOf('|') > -1 ? animateIn.split('|') : animateIn,
					animateclassin = typeof animatearrin == 'object' ? animatearrin[0] : animatearrin,
					animatedelayin = typeof animatearrin == 'object' ? animatearrin[1] : 0;
				}

				
				animateobj.css({
					'-webkit-animation-delay' : animatedelayout+'s',
					'animation-delay' : animatedelayout+'s'
				});
				
				animateobj.removeClass(animateclassout).removeClass(animateclassin).addClass(animateclassout);
			}

		}
	}

	/*----------  ANIMATION IN  ----------*/
	ckav.animationIn = function(obj) {
		'use strict';

		var newO = $(obj+" .animated");
		
		for (var i = 0; i < newO.length; i++) {
			var animateobj = $(newO[i]), 
				animateOut = animateobj.attr('data-animOut'),
				animateIn = animateobj.attr('data-animIn');
			
			if (animateOut || animateIn) {
				if(animateOut){
					var animatearrout = animateOut.indexOf('|') > -1 ? animateOut.split('|') : animateOut,
					animateclassout = typeof animatearrout == 'object' ? animatearrout[0] : animatearrout,
					animatedelayout = typeof animatearrout == 'object' ? animatearrout[1] : 0;	
				}

				if(animateIn){
					var	animatearrin = animateIn.indexOf('|') > -1 ? animateIn.split('|') : animatearrouteIn,
					animateclassin = typeof animatearrin == 'object' ? animatearrin[0] : animatearrin,
					animatedelayin = typeof animatearrin == 'object' ? animatearrin[1] : 0;	
				}

				animateobj.css({
					'-webkit-animation-delay' : animatedelayin+'s',
					'animation-delay' : animatedelayin+'s'
				});
				
				animateobj.removeClass(animateclassin).removeClass(animateclassout).addClass(animateclassin);
			}

		}
	}	
	

	jQuery(document).ready(function ($) {

		var menulinks = $(".ckav-navigation").attr("data-menulinks"),
			menuarr =  menulinks.split(","),
			anchors = [],
			tooltip = [];

			for (var i = 0; i < menuarr.length; i++) {
				var menu_el = menuarr[i].split("|");
				anchors.push(menu_el[0]);
				tooltip.push(menu_el[1]);
			}

		   ckav.config.anchors = anchors;
		   ckav.config.navigationTooltips = tooltip;

		var $o = {};
		$o.r                	= !ckav.demo ? false : ckav.demo();
		$o.tooltip          	= $o.r ? $('[data-toggle="tooltip"]') : false;
		$o.header           	= $('.main-head').length > 0 && $o.r ? $('.main-head') : false;
		$o.menuwrp          	= $('.menu-wrp').length > 0 && $o.r ? $('.menu-wrp') : false;
		$o.navlink          	= $('.menu-wrp').find(".menu-item").length > 0 && $o.r ? $('.menu-wrp').find(".menu-item") : false;
		$o.fullwh           	= $("[data-fullwh='y']").length > 0 && $o.r ? $("[data-fullwh='y']") : false;
		$o.fullh            	= $("[data-fullh='y']").length > 0 && $o.r ? $("[data-fullh='y']") : false;
		$o.bg               	= $("[data-bg]").length > 0 && $o.r ? $("[data-bg]") : false;
		$o.hoverclass       	= $("[data-hover-class]").length > 0 && $o.r ? $("[data-hover-class]") : false;
		$o.bgcolor          	= $("[data-bgcolor]").length > 0 && $o.r ? $("[data-bgcolor]") : false;
		$o.txtcolor         	= $("[data-txtcolor]").length > 0 && $o.r ? $("[data-txtcolor]") : false;
		$o.gradient         	= $("[data-gradient]").length > 0 && $o.r ? $("[data-gradient]") : false;
		$o.videopop         	= $(".video-popup").length > 0 && $o.r ? $(".video-popup") : false;
		$o.setpop           	= $(".set-popup").length > 0 && $o.r ? $(".set-popup") : false;
		$o.countbox         	= $(".count-box").length > 0 && $o.r ? $(".count-box") : false;
		$o.tabwidget        	= $(".tab-widget").length > 0 && $o.r ? $(".tab-widget") : false;
		$o.tabsauto         	= $(".tabs-auto").length > 0 && $o.r ? $(".tabs-auto") : false;
		$o.carouselwidget   	= $(".carousel-widget").length > 0 && $o.r ? $(".carousel-widget") : false;
		$o.accordionwidget  	= $(".accordion-widget").length > 0 && $o.r ? $(".accordion-widget") : false;
		$o.swiperwidget     	= $(".swiper-widget").length > 0 && $o.r ? $(".swiper-widget") : false;
		$o.swipergallery    	= $(".swiper-gallery").length > 0 && $o.r ? $(".swiper-gallery") : false;
		$o.videobg          	= $(".videobg").length > 0 && $o.r ? $(".videobg") : false;
		$o.videwidget       	= $(".vide-widget").length > 0 && $o.r ? $(".vide-widget") : false;
		$o.othersection1    	= $(".other-section-1").length > 0 && $o.r ? $(".other-section-1") : false;
		$o.popgallerywidget 	= $(".popgallery-widget").length > 0 && $o.r ? $(".popgallery-widget") : false;
		$o.bgslider         	= $("[data-bgslider]").length > 0 && $o.r ? $("[data-bgslider]") : false;
		$o.countdownwidget  	= $(".countdown-widget").length > 0 && $o.r ? $(".countdown-widget") : false;
		$o.filterwidget     	= $(".filter-widget").length > 0 && $o.r ? $(".filter-widget") : false;
		$o.gmapwidget       	= $(".gmap-widget").length > 0 && $o.r ? $(".gmap-widget") : false;
		$o.socialsection    	= $(".social-section").length > 0 && $o.r ? $(".social-section") : false;
		$o.instagramwidget  	= $(".instagram-widget").length > 0 && $o.r ? $(".instagram-widget") : false;
		$o.twitterwidget    	= $(".twitter-widget").length > 0 && $o.r ? $(".twitter-widget") : false;
		$o.formwidget       	= $(".form-widget").length > 0 && $o.r ? $(".form-widget") : false;
		$o.stellar          	= $("[data-stellar]").length > 0 && $o.r ? $("[data-stellar]") : false;
		$o.elanimate        	= $("[data-animate-in]").length > 0 && $o.r ? $("[data-animate-in]") : false;
		$o.bLazy            	= $(".b-lazy").length > 0 && $o.r ? $(".b-lazy") : false;
		//$o.masonry          	= $("[data-masonry-grid]").length > 0 && $o.r ? $("[data-masonry-grid]") : false;
		$o.masonry 				= $("[data-masonry-grid]").length > 0 && $o.r ? $("[data-masonry-grid]") : false;

		$o.styleid          	= $("[data-style-id]").length > 0 && $o.r ? $("[data-style-id]") : false;
		$o.searchpop        	= $("#popup-search").length > 0 && $o.r ? $("#popup-search") : false;
		$o.ckavwrapper      	= $("#ckav-wrapper").length > 0 && $o.r ? $("#ckav-wrapper") : false;
		$o.ckavfullscroll      	= $("#ckav-sscroll").length > 0 && $o.r ? $("#ckav-sscroll") : false;
		$o.ckavfullmenu      	= $(".ckav-navigation").length > 0 && $o.r ? $(".ckav-navigation") : false;
		$o.ckavsdownbtn      	= $(".scroll-down-btn").length > 0 && $o.r ? $(".scroll-down-btn") : false;
		$o.tosection      		= $(".scroll-to").length > 0 && $o.r ? $(".scroll-to") : false;
		
		if ($o.r) {

			// Page loader
			// $(".animsition").animsition({
			// 	inClass: 'fade-in',
			// 	outClass: 'fade-out',
			// 	inDuration: 1500,
			// 	outDuration: 800,
			// 	linkElement: '.animsition-link',
			// 	// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
			// 	loading: true,
			// 	loadingParentElement: 'body', //animsition wrapper element
			// 	loadingClass: 'animsition-loading',
			// 	loadingInner: '', // e.g '<img src="loading.svg" />'
			// 	timeout: false,
			// 	timeoutCountdown: 5000,
			// 	onLoadEvent: true,
			// 	browser: [ 'animation-duration', '-webkit-animation-duration'],
			// 	// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			// 	// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			// 	overlay : false,
			// 	overlayClass : 'animsition-overlay-slide',
			// 	overlayParentElement : 'body',
			// 	transition: function(url){ window.location.href = url; }
			// });


			$('[href="minify/ckav_min.css"]').attr('href', 'minify/ckav_min.css?'+ckav.uid());

			$('html').before('<!-- ' + package_ver + ' -->');

			$o.tooltip.tooltip({
				container: 'body'
			});

			$(".copyright-year").text(new Date().getFullYear());
			
			if ($o.bLazy) {
				ckav.blazyload();
			}

			/*----------  CKAV FONTS  ----------*/
			if ($o.tooltipfont) {
				
			}

			/*----------  TO SECTION  ----------*/
			if ($o.tosection) {
				ckav.scrollTo();
			}

			/*----------  CKAV FULLPAGE SCROLL  ----------*/
			if ($o.ckavfullscroll) {
				ckav.fullPageScroll();
			}

			/*----------  SCROLL-DOWN BUTTON  ----------*/
			if ($o.ckavsdownbtn) {
				ckav.scrollDownBtn();
			}

			/*----------  FULL SCREEN MENU  ----------*/
			if ($o.ckavfullmenu) {
				$('#trigger-menu').on('click', function() {
					$('.ckav-navigation').addClass('open');

					ckav.animationIn(".ckav-navigation.open");

					if($('.ckav-navigation').hasClass("open")) {
						$('.ckav-navigation--links').on('click', function() {
							$('.ckav-navigation').removeClass('open');
						});
					}
				});

				$('.ckav-navigation--close').on('click', function() {
					$('.ckav-navigation').removeClass('open');
					ckav.animationOut(".ckav-navigation");
				});

			}

			/*----------  NAVIGATION  ----------*/
			if ($o.navlink) {
				
				$o.navlink.find('a').smoothScroll({
					speed: 1200,
					//offset: $o.header.attr('data-sticky') == 'y' || $o.header.attr('data-sticky-scroll') == 'y' ? -($o.header.height() - 20) : 0,
					beforeScroll: function () {
						$o.navlink.find('a').removeClass('active');
						$('.nav-handle').trigger('tap');
					},
					afterScroll: function () {
						$(this).addClass('active');
					}
				});
			};

			/*----------  LINK SCROLL  ----------*/
			if (ckav.elcheck("#page[data-linkscroll='y']")) {
				ckav.linkscroll('a[href^="#"]:not(.nav-links)');
			};

			/*----------  HEADER UTILITIES  ----------*/
			if ($o.menuwrp) {
				var $menu = $('.menu');
				$('.menu .has-dropdown').each(function() {
					$(this).prepend('<b class="sub-handler fa fa-plus">');
					if ($(this).hasClass('menu-item')) {
						$(this).children('ul').addClass('sub');
						$(this).children('.mega-menu').addClass('sub');
					}
				});
			}

			if ($o.header) {
				
				$o.header.attr('data-glass') === 'y' ? $o.header.addClass('bg-glass') : null;
				$o.header.attr('data-above') === 'y' ? $o.header.addClass('show-above') : null;
				ckav.menuH($o.header, $o.header.find('.menu'));

				/* Change sticky with scroll for small screens */
				/*if (ckav.device == 'm') {
					$('.main-head').removeAttr('data-sticky').attr('data-sticky-scroll', 'y');
				}*/
				if ($o.header.attr('data-sticky') == 'y' || $o.header.attr('data-sticky-scroll') == 'y' || $o.header.attr('data-hide') == 'y' && ckav.device == 'd') {
					$(window).scroll(function () {
						ckav.headerFn($o.header);
					});
					ckav.headerFn($o.header);
				}
			}

			/*----------  BANNER GRID  ----------*/
			if ($o.masonry) {
				$($o.masonry).each(function(index, el) {

					var masonry_wrp = $(this).closest('.masonry-wrp');
					
					masonry_wrp.css({
						opacity: 0,
					});

					var $mGrid = $(this).imagesLoaded()
					.always( function( instance ) {
						//console.log('all images loaded');
					})
					.done( function( instance ) {
						//console.log('all images loaded');
					})
					.fail( function() {
						//console.log('all images loaded, at least one is broken');
					})
					.progress( function( instance, image ) {
						
					});

					masonry_wrp.animate({
						opacity: 1},
						600, function() {
						$mGrid.isotope({
							itemSelector: '.masonry-item',
							percentPosition: true,
							stagger: 30,
							layoutMode: 'packery',
							hiddenStyle: {
								opacity: 0
							},
							visibleStyle: {
								opacity: 1
							}
						});
					});

					

					$(masonry_wrp).on('click', '.filters [data-filter]', function(event) {
						event.preventDefault();
						
						$(masonry_wrp).find('.filters [data-filter]').removeClass('active');
						$(this).addClass('active');

						var filterValue = $(this).attr('data-filter');
						// use filterFn if matches value
						$mGrid.isotope({ filter: filterValue });
					});
				});
				
			}
				
			/*----------  APPLY  ID  ----------*/
			if (ckav.elcheck(".main-container section")) {
				$(".main-container section").each(function (index, el) {
					$(this).attr('id', ckav.uid());
				});
			}

			/*----------  FULL HEIGHT & WIDHT  ----------*/
			if ($o.fullwh) {
				for (var i = 0; i < $o.fullwh.length; i++) {
					ckav.fullwh($o.fullwh[i]);
					var fullwhSection = $o.fullwh[i];
					$(window).resize(function () {
						ckav.fullwh(fullwhSection);
					});
				}
			}
			if ($o.fullh) {
				for (var i = 0; i < $o.fullh.length; i++) {
					if ($($o.fullh[i]).attr('data-fullh-wrp')) {
						ckav.fullh($o.fullh[i], $($o.fullh[i]).attr('data-fullh-wrp'));

						$(window).resize(function () {
							ckav.fullh($o.fullh[i], $($o.fullh[i]).attr('data-fullh-wrp'));
						});
					} else {
						ckav.fullh($o.fullh[i]);

						$(window).resize(function () {
							ckav.fullh($o.fullh[i]);
						});
					}

				}
			}

			/*----------  BACKGROUND-IMAGE  ----------*/
			if ($o.bg) {
				for (var i = 0; i < $o.bg.length; i++) {
					$($o.bg[i]).css({ backgroundImage: "url(" + $($o.bg[i]).attr("data-bg") + ")" });
				}
			}

			/*----------  BACKGROUND COLOR  ----------*/
			if ($o.bgcolor) {
				for (var i = 0; i < $o.bgcolor.length; i++) {
					$($o.bgcolor[i]).css({ backgroundColor: $($o.bgcolor[i]).attr("data-bgcolor") });
				}
			}

			/*----------  TEXT COLOR  ----------*/
			if ($o.txtcolor) {
				for (var i = 0; i < $o.txtcolor.length; i++) {
					$($o.txtcolor[i]).css({ color: $($o.txtcolor[i]).attr("data-txtcolor") });
				}
			}

			/*----------  HOVER COLOR  ----------*/
			if ($o.hoverclass) {
				for (var i = 0; i < $o.hoverclass.length; i++) {
					var hov_class = $($o.hoverclass[i]).attr('data-hover-class');
					$($o.hoverclass[i]).hover(
						function() {
							$(this).addClass(hov_class);
						}, function() {
							$(this).removeClass(hov_class);
						}
					);
				}
			}

			/*----------  GREDIENT  ----------*/
			if ($o.gradient) {
				for (var i = 0; i < $o.gradient.length; i++) {
					$o.gradient[i]

					var grd_colors = $($o.gradient[i]).attr('data-g-colors'),
						grd_color = grd_colors.split('|');
					$($o.gradient[i]).css({
						//background: grd_color[0],
						//background: "-moz-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						//background: "-webkit-linear-gradient(top, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						background: "linear-gradient(to bottom, " + grd_color[0] + " 0%, " + grd_color[1] + " 100%)",
						//filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + grd_color[0] + "', endColorstr='" + grd_color[1] + "',GradientType=0 )"
					});
				}
			}

			/*----------  PARALLAX BACKGROUND  ----------*/
			if ($o.stellar) {

				for (var i = 0; i < $o.stellar.length; i++) {
					$($o.stellar[i]).parent().css({ overflow: 'hidden' });
				}
				
				/*
				data-stellar-horizontal-offset="40"
				data-stellar-vertical-offset="150"*/
				$.stellar({
					positionProperty: 'transform',
					horizontalScrolling: false,
					hideDistantElements: false
				});
			}

			/*----------  ELEMENT ANIMATION  ----------*/
			if ($o.elanimate) {
				for (var i = 0; i < $o.elanimate.length; i++) {

					var animateobj = $($o.elanimate[i]),
						animatein = animateobj.attr('data-animate-in'),
						animatearr = animatein.indexOf('|') > -1 ? animatein.split('|') : animatein,
						animateclass = typeof animatearr == 'object' ? animatearr[0] : animatearr,
						animatedelay = typeof animatearr == 'object' ? animatearr[1] : 0;

					animateobj.css({
						'-webkit-animation-delay': animatedelay + 's',
						'animation-delay': animatedelay + 's'
					});

					animateobj.viewportChecker({
						classToAdd: 'animated ' + animateclass,
						offset: 100
					});
				}
			}

			/*----------  VIDEO POPUP  ----------*/
			if ($o.videopop) {
				for (var i = 0; i < $o.videopop.length; i++) {
					ckav.videoPopup($o.videopop[i]);
				}
			}

			/*----------  NORMAL POPUP  ----------*/
			if ($o.setpop) {
				for (var i = 0; i < $o.setpop.length; i++) {
					$o.setpop[i]

					var pop = $($o.setpop[i]).attr('href');
					$($o.setpop[i]).magnificPopup({
						type: 'inline',
						preloader: false,
						mainClass: 'mfp-fade',
						callbacks: {
							beforeOpen: function () {
								$(pop).removeClass('animate fadeInDown').addClass('animate fadeInDown');
							}
						}
					});
				}
			}

			/*----------  SEARCH POPUP  ----------*/
			if ($o.searchpop) {
				$('[href="#popup-search"].set-popup').on('mfpOpen', function(e /*, params */) {
					$($o.searchpop).closest('.mfp-container').addClass('popup-search');
				});
			}

			$('.zoom-img').magnificPopup({
				type: 'image',
				mainClass: 'mfp-fade',
			});

			/*----------  SIMPLE GALLERY  ----------*/
			if ($o.popgallerywidget) {
				for (var i = 0; i < $o.popgallerywidget.length; i++) {
					$o.popgallerywidget[i]

					$($o.popgallerywidget[i]).attr("id", 'popgallery' + i).addClass('popgallery' + i);

					$('#popgallery' + i).magnificPopup({
						delegate: '.pop-img',
						type: 'image',
						removalDelay: 300,
						tLoading: 'Loading image #%curr%...',
						mainClass: 'mfp-img-mobile mfp-fade',
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
						},
						image: {
							tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
							titleSrc: function (item) {
								return item.el.attr('title');
							}
						}
					});
				}
			}

			/*----------  COUNT BOX  ----------*/
			if ($o.countbox) {
				var counterup_script_arr = [
					"//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js",
					"lib/counter-up/jquery.counterup.min.js"
				];

				ckav.getMultiScripts(counterup_script_arr, '').done(function () {
					$o.countbox.find('.count').counterUp();
				});
				
				//$('.count-box .count').counterUp();
			};

			/*----------  TAB  ----------*/
			if ($o.tabwidget) {
				for (var i = 0; i < $o.tabwidget.length; i++) {
					ckav.tabs($($o.tabwidget[i]).find('[data-tb]'));
				}
			}

			if ($o.tabsauto) {
				for (var i = 0; i < $o.tabsauto.length; i++) {
					var tabObj = {
						count: i,
						tb: $o.tabsauto[i]
					}
					ckav.tabs(tabObj);
				}
			}

			/*----------  OWL CAROUSEL  ----------*/
			if ($o.carouselwidget) {
				for (var i = 0; i < $o.carouselwidget.length; i++) {
					// SET ID ON ALL OBJECTS
					var owlObj = 'owl' + i;
					$($o.carouselwidget[i]).css({ opacity: 0 }).attr("id", owlObj).addClass(owlObj);
					ckav.slider("#" + owlObj);
				}
			}

			/*----------  ACCORDION  ----------*/
			if ($o.accordionwidget) {
				for (var i = 0; i < $o.accordionwidget.length; i++) {
					// SET ID ON ALL OBJECTS
					ckav.setId($o.accordionwidget[i], 'accwidget', i);
					ckav.accordion($o.accordionwidget[i]);
				}
			}

			/*----------  SWIPER WIDGET  ----------*/
			if ($o.swiperwidget) {
				for (var i = 0; i < $o.swiperwidget.length; i++) {
					// SET ID ON ALL OBJECTS
					var swiObj = 'swiper' + i;
					$($o.swiperwidget[i]).css({ opacity: 0 }).attr("id", swiObj).addClass(swiObj);
					ckav.swiper_slider("#" + swiObj);
				}
			}

			/*----------  SWIPER GALLERY  ----------*/
			if ($o.swipergallery) {
				for (var i = 0; i < $o.swipergallery.length; i++) {
					// SET ID ON ALL OBJECTS
					var swiGal = 'swiperGallery' + i;
					$($o.swipergallery[i]).css({ opacity: 0 }).attr("id", swiGal).addClass(swiGal);
					ckav.swiper_gallery("#" + swiGal);
				}
			}

			/*----------  VIDEO BACKGROUND  ----------*/
			if ($o.videobg) {
				var ytbg_script_arr = ["lib/jquery.mb.YTPlayer-master/jquery.mb.YTPlayer.min.js"];
				ckav.getMultiScripts(ytbg_script_arr, '').done(function () {
					for (var i = 0; i < $o.videobg.length; i++) {
						ckav.videoBg($o.videobg[i]);
					}
				});
				
			};
			if ($o.videwidget) {
				var vide_script_arr = ["lib/Vide/jquery.vide.min.js"];
				ckav.getMultiScripts(vide_script_arr, '').done(function () {
					for (var i = 0; i < $o.videwidget.length; i++) {
						ckav.setId($o.videwidget[i], 'videwidget', i);
						ckav.vide($o.videwidget[i]);
					}
				});
			}

			/*----------  SLIDESHOW  ----------*/
			if (ckav.elcheck($o.bgslider)) {
				var vages_script_arr = [
					"lib/vegas/vegas.min.js"
				];

				ckav.getMultiScripts(vages_script_arr, '').done(function () {
					for (var i = 0; i < $o.bgslider.length; i++) {

						var s1 = $($o.bgslider[i]).attr('data-bgslider'),
							s2 = s1.split('|'),
							el = $o.bgslider[i],
							bgslides = [];

						$.each(s2, function (index, val) {
							bgslides.push({ src: val });
						});
						setTimeout(function () {
							$(el).vegas({
								delay: 6000,
								slides: bgslides,
								timer: false,
								animation: 'kenburns'
							});
						}, 500);
						
					}
				});
			};

			/*----------  CLOCK  ----------*/
			if ($o.countdownwidget) {
				for (var i = 0; i < $o.countdownwidget.length; i++) {
					$($o.countdownwidget[i]).children('div').attr("id", 'countdown' + i);
					ckav.countdown("#countdown" + i);
				}
			}

			/*----------  FILTER  ----------*/
			if ($o.filterwidget) {
				for (var i = 0; i < $o.filterwidget.length; i++) {
					$o.filterwidget[i]
					ckav.setId($o.filterwidget[i], 'filterwidget', i);
					ckav.filter($o.filterwidget[i]);
				}
			}

			/*----------  GOOGLE MAP  ----------*/
			if ($o.gmapwidget) {
				var social_script_arr = [
					"https://maps.googleapis.com/maps/api/js?sensor=false",
					"lib/MapIt/jquery.mapit.min.js"
				];

				ckav.getMultiScripts(social_script_arr, '').done(function () {
					for (var i = 0; i < $o.gmapwidget.length; i++) {
						ckav.setId($o.gmapwidget[i], 'gmapwidget', i);
						ckav.gmapset($o.gmapwidget[i]);
					}
				});
			}

			/*----------  SOCIAL FEED  ----------*/
			if ($o.socialsection) {

				var social_script_arr = [
					"bower_components/codebird-js/codebird.js",
					"bower_components/doT/doT.min.js",
					"bower_components/moment/moment.min.js",
					"js/jquery.socialfeed.js"
				];

				ckav.getMultiScripts(social_script_arr, 'lib/social-feed/').done(function () {

					// TWITTER
					if ($o.twitterwidget) {
						for (var i = 0; i < $o.twitterwidget.length; i++) {
							ckav.setId($o.twitterwidget[i], 'twitterwidget', i);
							ckav.twitter($o.twitterwidget[i]);
						}
					}

				});
			}

			/*----------  FORM WIDGET  ----------*/
			if ($o.formwidget) {
				for (var i = 0; i < $o.formwidget.length; i++) {
					$o.formwidget[i]
					ckav.formWidget($o.formwidget[i]);
					if ($('html').hasClass('builder')) {
						$($o.formwidget[i]).find('button').attr('disabled', true);
					} else {
						$($o.formwidget[i]).find('button').attr('disabled', false);
					}
				}
			};

			/*----------  DEMO MENU  ----------*/
			if ($('html').attr('data-demomenu') == 'y') {
				$.ajax({
					url: "demo-menu/all-demos.html"
				}).done(function(data) {
					$('body').append(data);
				});
			}

			/*----------  RESPONSIVE  ----------*/
			enquire.register("screen and (min-width: 992px)", {
				match : function() {
					if ($o.menuwrp) {
						var $menu = $('.menu');
						ckav.menuFn($menu);
					}

					if ($('html').hasClass('data-sticky')) {
						/* Change sticky with scroll for small screens */
						$('.main-head').attr('data-sticky', 'y').removeAttr('data-sticky-scroll', 'y');
						$('[data-sticky]').addClass('navbar-fixed-top');
					}
				},
				unmatch : function() {}
			}).register("(min-width: 200px) and (max-width: 991px)", {
				match : function() {
					$.fn.fullpage.setResponsive(true);
					if ($o.menuwrp) {
						var $menu = $('.menu');
						$menu.find('.has-dropdown').off('mouseenter');
						$menu.find('.has-dropdown').off('mouseleave');
						$menu.removeAttr('style');
					}

					ckav.mobmenu('.nav-handle');
					$('html').addClass('data-sticky');
					$('[data-sticky]').removeClass('navbar-fixed-top');

					/* Change sticky with scroll for small screens */
					$('.main-head').removeAttr('data-sticky').attr('data-sticky-scroll', 'y');
				},  
				unmatch : function() {
					$('[data-sticky]').addClass('navbar-fixed-top');
					if ($o.menuwrp) {
						var $menu = $('.menu');
						ckav.menuFn($menu);
					}
				}
			});


		} else {
			$o.r ? ckav.demo() : $('html').html('');
		}
	});

})();
