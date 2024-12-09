// form validation

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

// form validation
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

$("#step1btn").on("click", function () {
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
    // $('#step1btn').html("<img src='assets/images/loading.gif' />")
    // var formData = new FormData(document.getElementById('details'))
    // console.log(formData)
    // $.ajax({

    //         url: "assets/handler/send.php",
    //         method: "POST",
    //         data: formData,
    //         processData: false,
    //         contentType: false,
    //         success: function(data,status)
    //         {
    //           $('.TrimCampaign-form').addClass('d-none')
    //           $('.TrimCampaign-vote').removeClass('d-none')
    //         },
    //         error: function(data)
    //         {
    //             $('#step1btn').html("Error!")

    //         }
    // })

    $("#step1btn").html("<img src='assets/images/loading.gif' />");

    setTimeout(function () {
      $(".TrimCampaign-form").addClass("d-none");
      $(".TrimCampaign-vote").removeClass("d-none");
      $(".TrimCampaign-vote").addClass("animate");
    }, 1000);
  }
});

$("#step2btn").on("click", function () {
  radiovalidate(2);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Choose an Option!</div>'
      )
    );

    formvalidate(2);
    $("html, body").scrollTop(0);
  } else {
    window.location = "thankyou.html";

    $(".TrimCampaign-form").addClass("d-none");
    $(".TrimCampaign-vote").removeClass("d-none");
  }
});

$(".thankyou > *").each(function (e) {
  var delay = e * 100;

  $(this).css("animation-delay", delay++ + "ms");
});
