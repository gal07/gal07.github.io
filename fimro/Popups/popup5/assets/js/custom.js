$(document).ready(function () {
  $(".close, .cancel").on("click", function () {
    $(".wrapper").removeClass("slideTop");
    $(".wrapper").addClass("slideTopRev");

    setTimeout(function () {
      $(".wrapper").removeClass("slideTopRev");
      $(".wrapper").addClass("slideTop");
    }, 2000);
  });
});
