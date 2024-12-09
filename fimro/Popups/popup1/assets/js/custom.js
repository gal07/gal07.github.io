$(document).ready(function () {
  $(".close").on("click", function () {
    $(".popInner").removeClass("newspaper");
    $(".popInner").addClass("newspaperRev");

    setTimeout(function () {
      $(".popInner").removeClass("newspaperRev");
      $(".popInner").addClass("newspaper");
    }, 2000);
  });
});
