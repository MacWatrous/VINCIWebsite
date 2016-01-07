window.onload = function() {
    cookieCheck();
    
   // document.getElementById('splashscreen').style.height=document.getElementById('home').style.height;
}
$( function() {
        var endDate = "February 1, 2016 12:00:00";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>" + data.days + "<span><b>Days</b></span></div><div>" + this.leadingZeros(data.hours, 2) + " <span><b>Hours</b></span></div><div>" + this.leadingZeros(data.min, 2) + " <span><b>Minutes</b></span></div><div>" + this.leadingZeros(data.sec, 2) + " <span><b>Seconds</b></span></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });
		
		
		
      });
   
function inputFocus(i) {
    if (i.value === i.defaultValue) { i.value = ""; i.style.color = "#000"; }
}
function inputBlur(i) {
    if (i.value === "") { i.value = i.defaultValue; i.style.color = "#888"; }
}

$('.button').click(function() { 
        $(this).parent().parent().fadeOut(500);
        $('body').css({'overflow': 'visible'});
 });

function toggle_visibility(id) {
			       var e = document.getElementById(id);
			       if(e.style.display == 'block')
			          e.style.display = 'none';
			       else
			          e.style.display = 'block';
			    }

function about1(){
    swal("What is VINCI?", "VINCI is a first of its kind technology that offers comprehensive fitness support. VINCI not only promotes the creation of fitness networks through GPS technology but also our proprietary algorithm connects people to resources such as close-proximity healthy eating options, fitness centers, and nutrition/goal tracking for maintenance of a healthy lifestyle.");
}
function about2(){
    swal("Why Do We Need VINCI?", "The Center for Disease Control recently published a report that 1 in 3 Americans is obese and 53% of people want to be healthier. \n\nWhen surveyed, the top 3 reasons people weren’t fit were: \n\n1. Not knowing where to start. \n2. Finding people at the gym more intimidating. \n3. They started exercising in the past and didn’t have the motivation to keep going. \n\nAll three reasons can be solved by helping people connect to form a fitness network. This Idea gave birth to VINCI.");
}
function about3(){
    swal("Who Can Use VINCI?", "Whether you’re a person trying to improve your health or a person with a fitness routine who just wants to improve, VINCI is for you. Using the Italian word for victory as its name, the app empowers any and every person to find the resources needed to set and surpass their fitness goals. VINCI is a comprehensive technology for the establishment and maintenance of a healthy life.");
}
function emailConfirm(){
    swal({title: "Thank You!",   text: "Make sure to check your email to confirm your subscription.",   type: "success",
    timer: 3000,
         });
}
// if no cookie
/*$(document).ready(function() {
if ($.cookie('alert') == null) {
    $( "#splashscreen" ).show();
    $(".connect").click(function() {
        $( "#splashscreen" ).fadeOut(800);
    });
}
else {
    $('#splashscreen').hide();
    }
});
*/
// If "welcome" cookie is not set...
function cookieCheck(){
    if (($.cookie('welcome') != null )) {
        // Show welcome text.
        $("#splashscreen").hide();
        // Set the "welcome" cookie, so that the 
        // welcome text will not be shown after this.
        //$.cookie('welcome', true );
    }
}