$(document).on('ready', function() {
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false,
    autoplay:true
  });
  $(".lang-list").hide();
  var b = true;

  $(".lang").click(function(){
    if(b){
      $(".lang-list").fadeIn();
      b=false;
    }else{
     $(".lang-list").fadeOut(); 
     b=true;
   }
 });

  $(".lang-list").on("click","a", function (event) {
    event.preventDefault();
    var html  = $(this).html();
    $(".lang").html(html);
  });

  $(window).scroll(function(){
    if ( $(this).scrollTop() > 300 && $("header").hasClass("header-default") ){
      $("header").fadeOut('fast',function(){
        $(this).removeClass("header-default")
        .addClass("header-fixed header-transbg")
        .fadeIn('fast');
      });
    } else if($(this).scrollTop() <= 300 && $("header").hasClass("header-fixed")) {
      $("header").fadeOut('fast',function(){
        $(this).removeClass("header-fixed header-transbg")
        .addClass("header-default")
        .fadeIn('fast');
      });
    }
  });


  $("#email").keyup(function(){
    var email = $("#email").val();
    if(email != 0)
    {
      if(isValidEmailAddress(email))
      {
       $("#submit").removeAttr("disabled");  
       $("#email").removeClass("error");    
      $("#submit").html("<img src='img/ok.png'>");
      } else {
        $("#email").addClass("error");
        $("#submit").html("<img src='img/error.png'>");
        $("#submit").attr("disabled='disabled'"); 
      }
    } else {
      $("#email").addClass("error");
      $("#submit").html("<img src='img/error.png'>");
      $("#submit").attr("disabled='disabled'"); 
    }

  });

function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return pattern.test(emailAddress);
};
});

