// next prev
var divs = $('.show-section section');
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first


function next()
{
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
    console.log(now);
}
$(".prevStep").on('click', function()
{
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
    console.log(now);
})






function activeEmployee()
{
    var activesrc = $('.carousel-item.active').find('img').attr('src');

    $('.step-img').attr('src', activesrc);
}



// calling active product
$('#trim-slider').on('slid.bs.carousel', activeEmployee);

$('.numberSingle input').on('click', function()
{
    $(this).parent().removeClass('checked');
    $(this).parent().prevAll().removeClass('checked')
    $(this).parent().nextAll().removeClass('checked')
    $(this).parent().addClass('checked');
    $(this).parent().prevAll().addClass('checked')
})

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


$('.viewMore').on('click', function()
{
    next();
})

$('#step1btn').on('click', function()
    {
        formvalidate(1);

        if(inputschecked == false)
        {
            (function (el) {
                setTimeout(function () {
                    el.children().remove('.reveal');
                }, 3000);
                }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));
                
                formvalidate(1);
                $('html, body').scrollTop(0);
        }
        else
        {
            next();
        }
    })
    $('#step2btn').on('click', function()
    {
        formvalidate(2);

        if(inputschecked == false )
        {
            (function (el) {
                setTimeout(function () {
                    el.children().remove('.reveal');
                }, 3000);
                }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));

                formvalidate(2);
                $('html, body').scrollTop(0);
        }
        else
        {
            next();
        }
    })













$('#sub').on('click', function()
{

    formvalidate(3);

    if(inputschecked == false )
    {
        (function (el) {
            setTimeout(function () {
                el.children().remove('.reveal');
            }, 3000);
            }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));

            formvalidate(3);
            $('html, body').scrollTop(0);
    }
    else
    {
        var formData = new FormData(document.getElementById('Stepform'))
        console.log(formData)
        $.ajax({
    
    
                url: "assets/handler/send.php",
                method: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function(data,status)
                {
                    window.location = 'thankyou.html';
                  $('#sub').html("Sent!")
                },
                error: function(data)
                {
                    $('#sub').html("Error!")
    
                }
        })
    }

})