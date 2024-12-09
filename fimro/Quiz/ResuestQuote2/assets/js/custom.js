$(".formTab-button button").each(function (e) {
  e = e + 1;
  $(this)
    .children("span")
    .text("0" + e);
});

$(".radioField input").on("click", function () {
  $(".radioField").removeClass("active");
  $(this).parent().addClass("active");
});

$("#file").on("change", function (e) {
  // alert("file is selected");
  var filename = e.target.files[0].name;
  $(".fileName").text(filename);
  $(this).parent().find("input[type=radio]").attr("checked", 1);
});

// checking card number
$("#cc-number").on("input", function () {
  var number = $("#cc-number").val();
  // visa
  var visa = new RegExp("^4");
  var discover = new RegExp("^6");
  var jcb = new RegExp("^35");
  var mastercard = new RegExp("^5");

  if (number.match(visa) != null) {
    console.log("Visa");

    $(".cc-type-list i").removeClass("highlight");
    $(".cc-type-list .fa-cc-visa").addClass("highlight");
    $(".cc-type i").hide();
    $(".fa-cc-visa").show();
  }

  // Mastercard
  if (number.match(mastercard) != null) {
    console.log("Mastercard");

    $(".cc-type-list i").removeClass("highlight");
    $(".cc-type-list .fa-cc-mastercard").addClass("highlight");
    $(".cc-type i").hide();
    $(".fa-cc-mastercard").show();
  }

  // Discover
  if (number.match(discover) != null) {
    console.log("Discover");

    $(".cc-type-list i").removeClass("highlight");
    $(".cc-type-list .fa-cc-discover").addClass("highlight");
    $(".cc-type i").hide();
    $(".fa-cc-discover").show();
  }

  // JCB
  if (number.match(jcb) != null) {
    console.log("JCB");

    $(".cc-type-list i").removeClass("highlight");
    $(".cc-type-list .fa-cc-jcb").addClass("highlight");
    $(".cc-type i").hide();
    $(".fa-cc-jcb").show();
  }
});
function handleactiveStep(buttonClicked) {
  var currentStepBtn = buttonClicked;
  var currentStepBtnClicked = parseInt(
    currentStepBtn.parent().attr("id").replace("step", "")
  );

  // handling active tab button
  $(".formTab-button button").removeClass("active");
  $(".formTab-button button").eq(currentStepBtnClicked).addClass("active");

  // handling active tab
  $("#tablist > .tab-pane").removeClass("active");
  setTimeout(function () {
    $("#tablist > .tab-pane").removeClass("show");
  }, 100);
  $("#tablist > .tab-pane").eq(currentStepBtnClicked).addClass("active");
  setTimeout(function () {
    $("#tablist > .tab-pane").eq(currentStepBtnClicked).addClass("show");
  }, 100);
}

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

// radio validation
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

// step1
$("#step1 .nextStep").on("click", function () {
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
    handleactiveStep($(this));
  }
});

// step 2

$("#step2 .nextStep").on("click", function () {
  radiovalidate(2);

  if (checkedradio == false) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Select An Option!</div>'
      )
    );

    radiovalidate(2);
    $("html, body").scrollTop(0);
  } else {
    handleactiveStep($(this));
  }
});

$("#step3 .nextStep").on("click", function () {
  formvalidate(3);

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

    formvalidate(3);
    $("html, body").scrollTop(0);
  } else {
    handleactiveStep($(this));
  }
});

$(".apply ").on("click", function () {
  formvalidate(4);

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
