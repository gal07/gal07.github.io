$("#sub").hide();

$("#vote").on("click", function () {
  $(".radioField").each(function () {
    var totalpercentage = $(this)
      .children("label")
      .find("span")
      .text()
      .replace("%", "");
    $(this)
      .children(".fill")
      .css("width", totalpercentage + "%");
  });

  $(".radioField label span").each(function () {
    $(this).css("visibility", "visible");
    var childSpan = $(this);
    $({ Counter: 0 }).animate(
      { Counter: childSpan.text() },
      {
        duration: 1500,
        easing: "swing",
        step: function () {
          childSpan.text(Math.ceil(this.Counter) + "%");
        },
      }
    );
  });
  $(".radioField input").each(function () {
    if ($(this).is(":checked")) {
      $(".radioField").removeClass("selected");
      $(".radioField input").addClass("disabled");
      $(this).parent().addClass("selected");
    }
  });

  $(this).hide();
  $("#sub").show();
});

$("#sub").on("click", function () {
  window.location = "thankyou.html";
});

$(".thankyouInner > *").each(function (e) {
  var delay = e * 100;

  $(this).css("animation-delay", delay++ + "ms");
});
