var review = 0;
var message = 0;
$(document).ready(function () {
  // Handling Rating System

  function getRatingIndex(index) {
    switch (index) {
      case 0:
        $(".avgRating").text("Poor");
        break;
      case 1:
        $(".avgRating").text("Average");
        break;
      case 2:
        $(".avgRating").text("Good");
        break;
      case 3:
        $(".avgRating").text("Satisfying");
        break;
      case 4:
        $(".avgRating").text("Excellent");
        break;
    }
  }

  $(".rating .ratingSingle")
    .hover(
      function (index) {
        $(this).addClass("fill");
        $(this).prevAll().addClass("fill");
      },
      function () {
        $(this).removeClass("fill");
        $(this).prevAll().removeClass("fill");
      }
    )
    .click(function () {
      $(this).addClass("filled");
      $(this).nextAll().removeClass("filled");
      $(this).prevAll().addClass("filled");
      index = $(this).index();
      getRatingIndex(index);
    });

  // checking Charaters
  $("#message").on("input", function () {
    // Calculate the character count
    var count = parseInt($(this).val().length);
    $(this).parent().parent().find(".maxChar .count").text(count);

    var tillCount = parseInt(
      $(this).parent().parent().find(".maxChar .tillcount").text()
    );
    message = count;
  });
  $("#review").on("input", function () {
    // Calculate the character count
    var count = parseInt($(this).val().length);
    $(this).parent().parent().find(".maxChar .count").text(count);

    var tillCount = parseInt(
      $(this).parent().parent().find(".maxChar .tillcount").text()
    );
    review = count;
  });

  // Input File
  $("#file").on("change", function (e) {
    // alert("file is selected");
    var filename = e.target.files[0].name;
    $(".file h3 ").text(filename);
    $(".file p").text("Load Other?");
  });

  var uploadInner = $(".file");

  uploadInner.on("dragover", function (e) {
    e.preventDefault();
    uploadInner.addClass("highlight");
  });

  uploadInner.on("dragleave", function () {
    uploadInner.removeClass("highlight");
  });

  uploadInner.on("drop", function (e) {
    e.preventDefault();
    uploadInner.removeClass("highlight");

    var files = e.originalEvent.dataTransfer.files;
    handleFiles(files);
  });

  function handleFiles(files) {
    if (files.length > 0) {
      var fileName = files[0].name;
      $(".file h3").text(fileName);
      $(".file p").text("Load Other?");
    }
  }
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

$("#sub").on("click", function () {
  if (review >= 120) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Character Limit Reached!</div>'
      )
    );
    console.log(review);
    $("html, body").scrollTop(0);
  } else if (message < 200) {
    (function (el) {
      setTimeout(function () {
        el.children().remove(".reveal");
      }, 3000);
    })(
      $("#error").append(
        '<div class="reveal alert alert-danger">Mantain the Minimum Characters!</div>'
      )
    );
    $("html, body").scrollTop(0);
  } else {
    $("#sub").html("<img src='assets/images/loading.gif' />");
    var formData = new FormData(document.getElementById("rating"));
    console.log(formData);
    $.ajax({
      url: "assets/handler/send.php",
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (data, status) {
        $("#sub").html("Done!");
      },
      error: function (data) {
        $("#sub").html("Error!");
      },
    });
  }
});
