var $togglenav = $('.expanda-nav > .toggle-nav');

function respNavToggle() {
  if($togglenav.hasClass('expanded')) {
    //$('.logo-container').fadeOut(400,"swing");
    $togglenav.removeClass('expanded');
    $togglenav.fadeOut(400,"swing");
  } else {
    $togglenav.addClass('expanded');
    $togglenav.fadeIn(400,"swing");
  }
}

$(document).ready(function(){

  /*setTimeout(function(){
    $('.entry-blend').animate({"opacity": "1"}, 1000);
    $('.entry-logo, #fadein-footer, #entry-header .icon.fadein-icon').fadeIn(1500,"swing");
    $('#fadein-footer *').animate({"opacity": "1"}, 1500);
  }, 700);*/

  $('.toggle-nav-down').click(function() {
    respNavToggle();
  });

  $('#contactphotoreq').change(function(){
    console.log('photo request = ' + $('#contactphotoreq').val());
    if($('#contactphotoreq').val() == 'Commercial/Product') {
      $('.contact-business-field').fadeIn();
    }
  });

});
