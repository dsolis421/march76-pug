var $footernav = $('footer');

function respNavToggle() {
  if($footernav.attr('class') === "toggle-nav") {
    $footernav.addClass('responsive');
  } else {
    $footernav.removeClass('responsive');
  }
}

$(document).ready(function(){

  setTimeout(function(){
    $('#entry-header').animate({"top": "0"}, 100, "swing",function(){
      setTimeout(function(){
        $('.entry-section, #fadein-footer').fadeIn(1000,"swing");
        if($(window).width() < 555){
          $('#entry-header > div span').css({"line-height": "50px"});
        }
        $('#entry-header .header-social-container a').animate({"opacity": "1"}, 500);
        $('.entry-blend').css({"background": "rgba(0,0,0,.7)"});
      }, 100)
    });
  }, 200);

  $('.icon').click(function() {
    respNavToggle();
  });

});
