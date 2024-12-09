// countdown

var countDownDate = new Date("Feb 21, 2024").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var weeks = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 7));
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").text(days);
  $("#hours").text(hours);
  $("#minutes").text(minutes);
  $("#seconds").text(seconds);

  if (distance < 0) {
    clearInterval(x);
    $("#days").text("0");
    $("#hours").text("0");
    $("#minutes").text("0");
    $("#seconds").text("0");
  }
}, 1000);
