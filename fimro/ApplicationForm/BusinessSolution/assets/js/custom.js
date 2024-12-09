$(".pricaTableBtn").on("click", function () {
  var btnParent = $(this).parent();
  var planPrice = btnParent.find(".planPrice").text();
  var serviceType = btnParent.find(".serviceType").text();
  var tableList = btnParent.find(".contentList").html();

  $(".DynamicPlan").text(serviceType);
  $(".dynamicPrice").text(planPrice);

  $(".cartList").children().not("#load").remove();
  $(".cartList").prepend(tableList);
  $("#calcPrice").text(planPrice * 12);

  $(".priceList").addClass("d-none");
  $(".payment").removeClass("d-none");

  var countlist = $(".cartList li").length;
  var load = 3;
  var loaded = 0;

  for (i = 1; i <= countlist; i++) {
    if (i >= 3) {
      $(".cartList li").eq(i).hide();
      $("#load").show();
    } else {
      $("#load").hide();

      loaded++;
      console.log(loaded);
    }
  }

  $("#load").on("click", function () {
    for (i = 1; i <= load; i++) {
      loaded = loaded + 1;
      console.log(loaded);
      $(".cartList li").eq(loaded).show();
    }
    if (loaded == countlist) {
      $("#load").hide();
    } else {
      $("#load").show();
    }
  });
});

function formvalidate(stepnumber) {
  // check if the required fields are empty
  inputvalue = $("#step" + stepnumber + " :input")
    .not("button")
    .map(function () {
      if (this.value.length > 0) {
        $(this).removeClass("invalid");
        return true;
      } else {
        if ($(this).prop("required")) {
          $(this).addClass("invalid");
          return false;
        } else {
          return true;
        }
      }
    })
    .get();

  // console.log(inputvalue);

  inputschecked = inputvalue.every(Boolean);

  // console.log(inputschecked);
}

// step1
$("#sub").on("click", function () {
  formvalidate(1);

  if (inputschecked == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Please Fill Every Field!</div>'
      )
    );

    formvalidate(1);
    $("html, body").scrollTop(0);
  } else {
    window.location = "thankyou.html";
  }
});
