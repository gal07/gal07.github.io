/*================================================
Template name: Travgo Travel Mobile App Template
Version: 1.0.0
Author: Website Stock       
Author url: https://themeforest.net/user/website_stock/portfolio  

[ Table of Contents ]

01: splash-screen: preloader
02: all-page: dark vs light mode switch
03: onboarding: swiper
04: enter-otp: otp input
05. auth: input password
06: home: visited swiper
07. service-location: map
08. Filter range for price
09. search-result: date time picker
10. search-result: date time picker
11. hotel-booking: checkin date time picker
12. hotel-booking: checkout date time picker
13. user-info: date of birth picker
14. ticket-booked: star rating
15. message: swipe delete
16. user-profile: textarea value
17. explore: mixitup
18. back to previous page
19. menu toggle

==================================================*/

$(function(){
  "use strick";
  
  /*================================================================
          01: splash-screen: preloader
  =================================================================*/
  $(document).ready(function() {
    $("#preloader").fadeOut(500); 
  });
  

  /*================================================================
          02: all-page: dark vs light mode switch
  =================================================================*/
    const chk = document.getElementById('check-mode');
    const modeChk = document.getElementById('mode-change');
    const enableMode = document.getElementById('enableMode');

  if(chk){
    chk.addEventListener('change', function() {
      const darkModeStatus = chk.checked;
      toggleDarkMode(darkModeStatus);
      localStorage.setItem('darkModeStatus', darkModeStatus);
      modeChk.checked = chk.checked;
      enableMode.checked = chk.checked;
    });

    $(document).ready(function() {
      const storedDarkModeStatus = localStorage.getItem('darkModeStatus');
      if (storedDarkModeStatus === "true") {
        toggleDarkMode(true);
        chk.checked = true;
      }
    });
  }
  if(modeChk){
    modeChk.addEventListener('change', function() {
      const darkModeStatus = modeChk.checked;
      toggleDarkMode(darkModeStatus);
      localStorage.setItem('darkModeStatus', darkModeStatus);
      enableMode.checked = modeChk.checked;
    });

    $(document).ready(function() {
      const storedDarkModeStatus = localStorage.getItem('darkModeStatus');
      if (storedDarkModeStatus === "true") {
        toggleDarkMode(true);
        modeChk.checked = true;
      }
    });
  }
  if(enableMode){
    enableMode.addEventListener('change', function() {
      const darkModeStatus = enableMode.checked;
      toggleDarkMode(darkModeStatus);
      localStorage.setItem('darkModeStatus', darkModeStatus);
      modeChk.checked = enableMode.checked;
    });

    $(document).ready(function() {
      const storedDarkModeStatus = localStorage.getItem('darkModeStatus');
      if (storedDarkModeStatus === "true") {
        toggleDarkMode(true);
        enableMode.checked = true;
      }
    });
  }
    // Function to toggle dark mode based on the status
    function toggleDarkMode(darkModeStatus) {
      document.body.classList.toggle("dark-mode", darkModeStatus);
    }

    // Check local storage for dark mode status on page load
    $(document).ready(function() {
      const storedDarkModeStatus = localStorage.getItem('darkModeStatus');
      if (storedDarkModeStatus === "true") {
        toggleDarkMode(true);
      }
    });
  

  /*================================================================
          03: onboarding: swiper
  =================================================================*/
  var onboardingSwiper = new Swiper(".onboarding-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on:{
      slideChange: function(){
        if(onboardingSwiper.activeIndex === onboardingSwiper.slides.length - 1){
          $('.slider-footer').addClass('hide')
        }else{
          $('.slider-footer').removeClass('hide')
        }
      }
    }
  });

  $('.skip-btn').on('click', function(){
    var lastIndex = onboardingSwiper.slides.length - 1;
    onboardingSwiper.slideTo(lastIndex);
  })

  
  /*================================================================
          04: enter-otp: otp input
  =================================================================*/
  $('.digit-group').find('input').each(function() {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function(e) {
      var parent = $($(this).parent());
      
      if(e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find('input#' + $(this).data('previous'));
        
        if(prev.length) {
          $(prev).select();
        }
      } 
      else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        var next = parent.find('input#' + $(this).data('next'));
        
        if(next.length) {
          $(next).select();
        } 
        else {
          if(parent.data('autosubmit')) {
            parent.submit();
          }
        }
      }
    });
  });

 
  /*================================================================
          05. auth: input password
  =================================================================*/
  $('.eye-btn').on('click', function() {
    $input = $(this).parent().find('.input-psswd');

    if ($input.attr('data-pssws-shown') == 'false') {
      $input.removeAttr('type');
      $input.attr('type', 'text');
      
      $input.removeAttr('data-pssws-shown');
      $input.attr('data-pssws-shown', 'true');
      
      $(this).find('.eye-off').addClass('d-none');
      $(this).find('.eye-on').removeClass('d-none'); 
    }
    else {
      $input.removeAttr('type');
      $input.attr('type', 'password');
      
      $input.removeAttr('data-pssws-shown');
      $input.attr('data-pssws-shown', 'false');
      
      $(this).find('.eye-on').addClass('d-none');
      $(this).find('.eye-off').removeClass('d-none');
    }
  });

  
  /*================================================================
          06: home: visited swiper
  =================================================================*/
  var visitedSwiper = new Swiper(".visited-swiper", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".visited-pagination",
      clickable: true,
    },
  });

  
  /*================================================================
          07. service-location: map
  =================================================================*/
  var locations = [
    ['<b>England Branch,</b><br> International city', -33.80010128657071, 151.28747820854187, 2, "https://i.ibb.co/kKMdswd/map-marker.png"],
    ['<b>Greec Branch,</b><br> International city', -33.950198, 151.259302, 1, "https://i.ibb.co/kKMdswd/map-marker.png"],
    ['<b>Ku-ring-gai Chase National Park,</b><br> New South Wales, Australia', -33.62702493711492, 151.22442237002355, 1, "https://i.ibb.co/kKMdswd/map-marker.png"],
    ['<b>Chatswood,</b><br> New South Wales, Australia', -33.79606848144398, 151.17821130380992, 1, "https://i.ibb.co/kKMdswd/map-marker.png"]
  ];

  const mapDiv = document.getElementById('map');
  if(mapDiv){
    var map = new google.maps.Map(mapDiv, {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon: locations[i][4],
        map: map
      });
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
          $('#locationModal').modal('show');
        }
      })(marker, i));
    }
  }

  
  /*================================================================
          08. Filter range for price
  =================================================================*/
  $( "#price-slider-range" ).slider({
    range: true,
    min: 0,
    max: 200,
    values: [ 32, 105 ],
    slide: function( event, ui ) {
      $( "#amount1" ).val("$" + ui.values[ 0 ] );
      $( "#amount2" ).val("$" + ui.values[ 1 ] );
    }
  });
  $( "#amount1" ).val("$ " + $( "#price-slider-range" ).slider( "values", 0 ));
  $( "#amount2" ).val("$" + $( "#price-slider-range" ).slider( "values", 1 ));

  
  /*================================================================
          09. search-result: date time picker
  =================================================================*/
  $('#selectDateInput').datetimepicker({
    inline:true,
    minTime:"13:00",
    maxTime:"21:30",
    formatTime:'H:i A',
    opened:false,
    step: 30,
    scrollMonth:false,
    scrollTime:false,
    monthChangeSpinner:true,
    todayButton:false,
    timepicker:false,
    onChangeDateTime: function(dp, $input){
      $('#sdate').val($input.val())
    }
  });

  
  /*================================================================
          10. search-result: date time picker
  =================================================================*/
  $('#visitDateInput').datetimepicker({
    inline:true,
    minTime:"13:00",
    maxTime:"21:30",
    formatTime:'H:i A',
    opened:false,
    step: 30,
    scrollMonth:false,
    scrollTime:false,
    monthChangeSpinner:true,
    todayButton:false,
    timepicker:false,
    onChangeDateTime: function(dp, $input){
      $('#vdate').val($input.val())
    }
  });

  
  /*================================================================
          11. hotel-booking: checkin date time picker
  =================================================================*/
  $('#checkInDateInput').datetimepicker({
    inline:true,
    minTime:"13:00",
    maxTime:"21:30",
    formatTime:'H:i A',
    opened:false,
    step: 30,
    scrollMonth:false,
    scrollTime:false,
    monthChangeSpinner:true,
    todayButton:false,
    timepicker:false,
    onChangeDateTime: function(dp, $input){
      $('#hcindate').val($input.val())
    }
  });

  
  /*================================================================
          12. hotel-booking: checkout date time picker
  =================================================================*/
  $('#checkOutDateInput').datetimepicker({
    inline:true,
    minTime:"13:00",
    maxTime:"21:30",
    formatTime:'H:i A',
    opened:false,
    step: 30,
    scrollMonth:false,
    scrollTime:false,
    monthChangeSpinner:true,
    todayButton:false,
    timepicker:false,
    onChangeDateTime: function(dp, $input){
      $('#hcoutdate').val($input.val())
    }
  });

  
  /*================================================================
          13. user-info: date of birth picker
  =================================================================*/
  $('#dateOfBirthDateInput').datetimepicker({
    inline:true,
    minTime:"13:00",
    maxTime:"21:30",
    formatTime:'H:i A',
    opened:false,
    step: 30,
    scrollMonth:false,
    scrollTime:false,
    monthChangeSpinner:true,
    todayButton:false,
    timepicker:false,
    onChangeDateTime: function(dp, $input){
      $('#dobdate').val($input.val())
    }
  });

  
  /*================================================================
          14. ticket-booked: star rating
  =================================================================*/
  function ratingStar(star){
    star.click(function(){
      var stars = $('.ratingW').find('li')
      stars.removeClass('on');
      var thisIndex = $(this).parents('li').index();
      for(var i=0; i <= thisIndex; i++){
        stars.eq(i).addClass('on');
      }
    });
  }
  
  $(function(){
    if($('.ratingW').length > 0){
      ratingStar($('.ratingW li a'));
    }
  });

  
  /*================================================================
          15. message: swipe delete
  =================================================================*/
  var $item = $('.single-chat')
  var $dragger = $item.find('.single-main')

  $dragger.on( 'dblclick', function ( e ) {
    e.preventDefault();
    var $this = $(this),
      $parent = $this.parent();

    ($parent.hasClass( 'active' ) ) ? $parent.removeClass('active' ).addClass('completed') : $parent.removeClass('completed' ).addClass('active');

  } );

  var gridWidth = 60;
  Draggable.create($dragger, {
    type           : "x",
    edgeResistance : 0.65,
    bounds : {minX:0, maxX:-97},
    lockAxis       : true,
    throwProps     : true,
    snap: function(endValue) {
      var step = 40;
      return Math.round( endValue / step) * step;
    },
    onDrag: function () {
      var $draggedElement = $(this.target);
      var isDraggingRight = this.getDirection('startToEnd') === 'right';
      $draggedElement.toggleClass('active', !isDraggingRight);
    },
  });

  
  /*================================================================
          16. user-profile: textarea value
  =================================================================*/
  const textArea = document.getElementById("myTextarea");

  if(textArea){
    textArea.value = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  }

 
  /*================================================================
          17. explore: mixitup
  =================================================================*/
  $('.place-filter-btns button').on('click', function (event) {
    const parentName = $(this).parent().attr("class");

    $(this).parent().siblings('.active').removeClass('active');
    $(this).parent().addClass('active');

  });

  var placeCards = document.getElementById('place-cards');

  if(placeCards){
    var mixer = mixitup(placeCards);
  }

  
  /*================================================================
          18. back to previous page
  =================================================================*/
  $('.back-page-btn').on('click', function(){
    window.history.back();
  });


  /*================================================================
          19. menu toggle
  =================================================================*/
    $('.toggle-btn').on('click',function(){
      $('.m-menu').addClass('show');
      $('.m-menu__overlay').addClass('show');
    });
    $('.m-menu__close, .m-menu__overlay').on('click',function(){
        $('.m-menu').removeClass('show');
        $('.m-menu__overlay').removeClass('show');
    });

});
