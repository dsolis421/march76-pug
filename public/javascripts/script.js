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
    $('.entry-blend').animate({"opacity": "1"}, 1000);
    $('.entry-nav, #fadein-footer').fadeIn(1700,"swing");
    if($(window).width() < 555){
      $('#entry-header > div span').css({"line-height": "50px"});
    }
    $('#entry-header .header-social-container a').animate({"opacity": "1"}, 1700);
    //$('.entry-blend').css({"background": "rgba(0,0,0,.7)"});
  }, 700);


  $('.icon').click(function() {
    respNavToggle();
  });

});
