// next prev
var divs = $('.show-section fieldset');
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first


function next()
{
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
    console.log(now);
    $('#currentStep').text(now + 1);

    $('main').removeClass('animate');
    setTimeout(function()
    {
        $('main').addClass('animate');
    }, 0)
}








$(document).ready(function()
{
    $('.trim-select').removeClass('next prev');
    $('.trim-select input').on('click', function () {
        var inputParent = $(this).parent();
        inputParent.addClass('active');
        inputParent.find('img, label').remove();
        inputParent.append('<img src="assets/images/loading.gif">');
        inputParent.removeClass('next prev');
        inputParent.css('z-index', '1000')

        inputParent.closest('.col-md-4').prevAll().find('.trim-select').addClass('prev');
        inputParent.closest('.col-md-4').nextAll().find('.trim-select').addClass('next');


        $('.trim-select input').off('click');
        setTimeout(function()
        {
            next();
        }, 1000)
    });



    $('.RangeSlide input').on('input', function()
    {
        var sliderValue = $(this).val();
        $(this).parent().find('.move').text(sliderValue);
    })


    $("#file").on('change', function(e){
        // alert("file is selected");
        var filename = e.target.files[0].name;
        $(".fileName").text(filename);
    });


    var uploadInner = $('.uploadInner');

    uploadInner.on('dragover', function(e) {
        e.preventDefault();
        uploadInner.addClass('highlight');
    });

    uploadInner.on('dragleave', function()
    {
        uploadInner.removeClass('highlight');
    });

    uploadInner.on('drop', function(e)
    {
        e.preventDefault();
        uploadInner.removeClass('highlight');

        var files = e.originalEvent.dataTransfer.files;
        handleFiles(files);
    });

    function handleFiles(files)
    {
        if (files.length > 0) {
            var fileName = files[0].name;
            $('.fileName').text(fileName);
        }
    }





    // form validation

function formvalidate(stepnumber)
{
  // check if the required fields are empty
  inputvalue = $("#step"+stepnumber+" :input").not("button").map(function()
  {
    if(this.value.length > 0)
    {
      $(this).removeClass('invalid');
      return true;

    }
    else
    {
      
      if($(this).prop('required'))
      {
        $(this).addClass('invalid');
        return false
      }
      else
      {
        return true;
      }
      
    }
  }).get();
  

  // console.log(inputvalue);

  inputschecked = inputvalue.every(Boolean);

  // console.log(inputschecked);
}



    $('#step2btn').on('click', function()
    {
        formvalidate(2);

        if(inputschecked == false)
        {
            (function (el) {
                setTimeout(function () {
                    el.children().remove('.reveal');
                }, 3000);
                }($('#error').append('<div class="reveal alert alert-danger">Please Fill Every Field!</div>')));
                
                formvalidate(2);
                $('html, body').scrollTop(0);
        }
        else
        {
            next();
        }
    })

    $('#step3btn').on('click', function()
    {
        next();
    })
    $('#step4btn').on('click', function()
    {
        formvalidate(4);

        if(inputschecked == false)
        {
            (function (el) {
                setTimeout(function () {
                    el.children().remove('.reveal');
                }, 3000);
                }($('#error').append('<div class="reveal alert alert-danger">Please Fill Every Field!</div>')));
                
                formvalidate(4);
                $('html, body').scrollTop(0);
        }
        else
        {
            next();
        }
    })

    $('#sub').on('click', function()
    {
        formvalidate(5);

        if(inputschecked == false)
        {
            (function (el) {
                setTimeout(function () {
                    el.children().remove('.reveal');
                }, 3000);
                }($('#error').append('<div class="reveal alert alert-danger">Please Fill Every Field!</div>')));
                
                formvalidate(5);
                $('html, body').scrollTop(0);
        }
        else
        {
            $('#sub').html("<img src='assets/images/loading.gif' />")
            var formData = new FormData(document.getElementById('details'))
            console.log(formData)
            $.ajax({
        
        
                    url: "assets/handler/send.php",
                    method: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(data,status)
                    {
                        window.location = 'thankyou.html'
                    },
                    error: function(data)
                    {
                        $('#sub').html("Error!")
        
                    }
            })
        }
    })
    $('.thankyou > *').each(function(e)
    {
        var delay = e * 100;
        
        $(this).css('animation-delay', delay++ +'ms')
    })

    
    
})