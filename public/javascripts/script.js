/* checking if element is in viewport to take an action
function isinViewport(el) {
  var elementTop = $(el).offset().top + 200;
  var elementBottom = elementTop + $(el).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
}*/

var $topnav = $('.expanda-nav > div:last-of-type');

function respNavToggle() {
  if($topnav.attr('class') === "toggle-nav") {
    $topnav.addClass('expanded');
    if($(window).width() < 1200){
      $('.expanda-nav').animate({"height":"100vh","width":"100%"},300);
      $('#entry-header .expanda-nav').css({"background":"#000"});
      $('.toggle-nav').animate({"width":"100%"},300);
    } else {
      $('#entry-header .expanda-nav').animate({"width":"100%"}, 350).css({"background":"rgba(0,0,0,.5)"});
      $('#static-header .expanda-nav').animate({"width":"100%"}, 300);
      $('.toggle-nav').animate({"width":"85%"},300);
    }
    $('.toggle-nav a').fadeIn(400,"swing");
  } else {
    $topnav.removeClass('expanded');
    $('.toggle-nav a').fadeOut(200,"swing");
    $('.toggle-nav').animate({"width":"0"}, 200);
    if($(window).width() < 1200){
      $('#entry-header .expanda-nav').animate({"width":"90%","height":"70px"}, 350).css({"background":"none"});
      $('#static-header .expanda-nav').animate({"width":"90%","height":"70px"}, 350);
    } else {
      $('#entry-header .expanda-nav').animate({"width":"10%"}, 350).css({"background":"none"});
      $('#static-header .expanda-nav').animate({"width":"10%"}, 350);
    }
  }
}

$(document).ready(function(){

  setTimeout(function(){
    $('.entry-blend').animate({"opacity": "1"}, 1000);
    $('.entry-logo, #entry-header').fadeIn(1500,"swing");
  }, 700);

  $('.icon').click(function() {
    respNavToggle();
  });

});
