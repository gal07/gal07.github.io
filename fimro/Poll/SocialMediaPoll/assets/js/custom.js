// form validation
var checkedradio = false;

function radiovalidate(stepnumber)
{
    var checkradio = $("#step"+stepnumber+" input").map(function()
    {
    if($(this).is(':checked'))
    {
        return true;
    }
    else
    {
        return false;
    }
    }).get();

    checkedradio = checkradio.some(Boolean);
}


$(document).ready(function()
{
    $('#sub').on('click', function()
    {
        radiovalidate(1);
            
    
        if(checkedradio == false)
        {
            (function (el) {
                setTimeout(function () {
                    el.children().remove('.reveal');
                }, 3000);
                }($('#error').append('<div class="reveal alert alert-danger">Choose an option!</div>')));
                
                radiovalidate(1);
        }
        else
        {
            $('.loading').removeClass('d-none');

            setTimeout(function()
            {
                $('.loading').addClass('d-none');
                $('#form').addClass('d-none');
                $('.pollResult').removeClass('d-none');
    
                setTimeout(function()
                {
                    $('.percentage').each(function()
                    {
                        var resultval = $(this).html().replace('%', "");
                
                        var totalpercentage = (829 - (resultval  * 8.29)).toFixed();
                
                        console.log(totalpercentage);
                
                        $(this).parent().find('.circle .circle2').css('stroke-dashoffset', totalpercentage);
                
                    })
                }, 300)
    
            }, 1000)
        }

    })
    
})