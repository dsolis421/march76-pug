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
    $('#moving-header').animate({"top": "0"}, 2000, "swing",function(){
      setTimeout(function(){
        $('.entry-section, #fadein-footer').fadeIn(1000,"swing");
        if($(window).width() < 555){
          $('#moving-header > div span').css({"line-height": "50px"});
        }
        $('#moving-header .logo-container a').animate({"opacity": "1"}, 500);
      }, 200)
    });
  }, 500);

  $('.icon').click(function() {
    respNavToggle();
  });

});
