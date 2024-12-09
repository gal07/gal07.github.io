$(".selectedCandidate").each(function (e) {
  $(this)
    .children("span")
    .text(e + 1);
});

$(".voteCandidate").on("click", function () {
  var imgsrc = $(this).parent().find(".selectedCandidate img").attr("src");
  var title = $(this).parent().find(".candidatename").text();
  $(".popCandidateName").text(title);
  $(".popUpCandidateImg img").attr("src", imgsrc);
  $(".popup").removeClass("popUpAnimationOut");
  $(".popup").addClass("popUpAnimationIn");
});
$(".closePopup").on("click", function () {
  $(".popup").removeClass("popUpAnimationIn");
  $(".popup").addClass("popUpAnimationOut");
});

$(".thankyou .container > *").each(function (e) {
  var delay = e * 100;

  $(this).css("animation-delay", delay++ + "ms");
});

$("#sub").on("click", function () {
  window.location = "thankyou.html";
});
