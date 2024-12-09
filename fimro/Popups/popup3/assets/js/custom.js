$(document).ready(function () {
  $(".close").on("click", function () {
    $(".wrapper").removeClass("slideLeft");
    $(".wrapper").addClass("slideLeftRev");

    setTimeout(function () {
      $(".wrapper").removeClass("slideLeftRev");
      $(".wrapper").addClass("slideLeft");
    }, 2000);
  });
});
