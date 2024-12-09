// next prev
$(document).ready(function () {
  $("#steps").hide();
  $(".next").on("click", function () {
    if (now == 1) {
      $(".start-wrapper").hide();
      $("#steps").show();
    }
  });
});

$(".radio-field").each(function () {
  $(this).addClass("revealfield");
});

// next prev
var divs = $(".show-section section");
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

function next() {
  divs.eq(now).hide();
  now = now + 1 < divs.length ? now + 1 : 0;
  divs.eq(now).show(); // show next
  console.log(now);

  $(".bar-inner .fill").css("width", now * 15 + "%");
  $(".complete-rate span").text(now * 15);
}

$(".prev").click(function () {
  divs.eq(now).hide();
  now = now > 0 ? now - 1 : divs.length - 1;
  divs.eq(now).show(); // show previous
  if (now < 2) {
    $(".start-wrapper").show();
    $("#steps").hide();
  }
});

$(".table-single").on("click", function () {
  $(".table-single").removeClass("active");
  $(this).addClass("active");
});

// quiz validation
var checkedradio = false;

function radiovalidate(stepnumber) {
  var checkradio = $("#step" + stepnumber + " input")
    .map(function () {
      if ($(this).is(":checked")) {
        return true;
      } else {
        return false;
      }
    })
    .get();

  checkedradio = checkradio.some(Boolean);
}

// form validiation
$(document).ready(function () {
  $(".start-btn").on("click", function () {
    next();
  });

  // check step 1
  $("#step1 .confirm").on("click", function () {
    if ($("#step1 select").val() == "") {
      $("#step1 select").addClass("invalid");
    } else {
      $(".confirm").addClass("active");
      setTimeout(function () {
        next();
        $(".confirm").removeClass("active");
      }, 400);
    }
  });

  $("#step2 .confirm").on("click", function () {
    radiovalidate(2);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Choose an option!</div>'
        )
      );

      radiovalidate(2);
    } else {
      $(".confirm").addClass("active");
      setTimeout(function () {
        next();
        $(".confirm").removeClass("active");
      }, 400);
    }
  });

  $("#step3 .confirm").on("click", function () {
    radiovalidate(3);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Choose an option!</div>'
        )
      );

      radiovalidate(3);
    } else {
      $(".confirm").addClass("active");
      setTimeout(function () {
        next();
        $(".confirm").removeClass("active");
      }, 400);
    }
  });

  $("#step4 .confirm").on("click", function () {
    $(".confirm").addClass("active");
    setTimeout(function () {
      next();
      $(".confirm").removeClass("active");
    }, 400);
  });

  // check step1
  $("#sub").on("click", function () {
    radiovalidate(5);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Choose an option!</div>'
        )
      );

      radiovalidate(5);
    } else {
      $("#sub").html("<img src='assets/images/loading.gif'>");
      // var attachment = {cv: $("#step3 input[type=file]").val()};
      // var dataString = $("#step1, #step2, #step3").serialize() + '&' + $.param(attachment);

      var dataString = new FormData(document.getElementById("steps"));

      // console.log(dataString);

      // send form to send.php
      $.ajax({
        type: "POST",
        url: "assets/handler/send.php",
        data: dataString,
        processData: false,
        contentType: false,
        success: function (data, status) {
          $("#sub").html("Success!");
          window.location = "thankyou.html";
        },
        error: function (data, status) {
          $("#sub").html("failed!");
        },
      });
    }
  });
});
