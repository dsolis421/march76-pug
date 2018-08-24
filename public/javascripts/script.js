$(document).ready(function(){

  setTimeout(function(){
    $('#moving-header').animate({"top": "0"}, 2000, "swing",function(){
      setTimeout(function(){
        $('.entry-section, #fadein-footer').fadeIn(1000,"swing");
        $('#moving-header .logo-container a').animate({"opacity": "1"}, 1000);
      }, 200);
    });
  }, 500)
});
