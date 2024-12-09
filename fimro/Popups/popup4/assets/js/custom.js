$(document).ready(function () {
  $(".close, .cancel").on("click", function () {
    $(".wrapper").removeClass("slideTop");
    $(".wrapper").addClass("slideTopRev");

    setTimeout(function () {
      $(".wrapper").removeClass("slideTopRev");
      $(".wrapper").addClass("slideTop");
    }, 2000);
  });

  // countdown

  var countDownDate = new Date("Feb 21, 2024").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var weeks = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 7)
    );
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      "<div class='timeSingle'>" +
      "<div class='time'>" +
      days +
      "</div>Days</div> <span>:</span>" +
      "<div class='timeSingle'>" +
      "<div class='time'>" +
      hours +
      "</div>Hrs</div> <span>:</span>" +
      "<div class='timeSingle'>" +
      "<div class='time'>" +
      minutes +
      "</div>Mins</div> <span>:</span>" +
      "<div class='timeSingle'>" +
      "<div class='time'>" +
      seconds +
      "</div>Secs</div>";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
});
