var $footernav = $('.expanda-nav > div');

function respNavToggle() {
  if($footernav.attr('class') === "toggle-nav") {
    $footernav.addClass('responsive');
    $('.expanda-nav').animate({"width":"100%"}, 600).css({"background":"rgba(0,0,0,.5)"});
    $('.toggle-nav').animate({"width":"90%"},700);
    $('.responsive a').fadeIn(800,"swing");
  } else {
    $footernav.removeClass('responsive');
    $('.responsive a').fadeOut(600,"swing");
    $('.toggle-nav').animate({"width":"0"}, 700);
    $('.expanda-nav').animate({"width":"5%"}, 800).css({"background":"none"});
  }
}

$(document).ready(function(){

  setTimeout(function(){
    $('.entry-blend').animate({"opacity": "1"}, 1000);
    $('.entry-logo, #fadein-footer, #entry-header .icon').fadeIn(1700,"swing");
    $('#fadein-footer *').animate({"opacity": "1"}, 1700);
  }, 700);


  $('.icon').click(function() {
    respNavToggle();
  });

});
