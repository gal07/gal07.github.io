$(".radioField input").on("input", function () {
  $(".radioBar .fill").each(function () {
    $(this).css("width", Math.random() * 90 + 10 + "%");
  });
  $(".radioField input").each(function () {
    if ($(this).is(":checked")) {
      $(".radioField").removeClass("selected");
      $(".radioField input").addClass("disabled");
      $(this).parent().addClass("selected");
    }
  });
  $(".radioField label span").each(function () {
    $(".inputWrap .radioBar").css("visibility", "visible");
    $(this).css("visibility", "visible");
    $(".inputWrap .radioBar").css("height", "17px");
    $(".inputWrap .fill").css("height", "100%");
    var childSpan = $(this);
    $({ Counter: 0 }).animate(
      { Counter: childSpan.text() },
      {
        duration: 1500,
        easing: "swing",
        step: function () {
          childSpan.text(Math.ceil(this.Counter) + " Votes");
        },
      }
    );
  });
});
