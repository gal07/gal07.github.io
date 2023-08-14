$(function(){
	'use strict';

	// preloader
	$(".preloader").fadeOut();

	// sidebar
	$('.sidebar').sideNav({
		edge: 'right'
	});

	// slider
	$(".slide-show").owlCarousel({
		items: 1,
		navigation: true,
		slideSpeed: 1000,
		dots: true,
		paginationSpeed: 400,
		singleItem: true,
		autoplay: true,
		loop: true
	});

	// testimonial
	$(".testimonial").owlCarousel({
		items: 1,
		navigation: true,
		slideSpeed: 1000,
		dots: true,
		paginationSpeed: 400,
		singleItem: true,
		autoplay: true,
		loop: true
	});

	// tabs
	$('ul.tabs').tabs();

	// collapse
	$('.collapsible').collapsible();

});