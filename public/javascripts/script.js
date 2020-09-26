var $togglenav = $('.expanda-nav > .toggle-nav');

function clearFormValues() {
  $('form > input, form > textarea').val('');
  $('select').val('none');
  $('.contact-business-field').fadeOut();
}

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

function sendContactData(contactData) {
  $.post("/contact/submit", contactData, function(data,status,xhr) {
    if(status == "success") {
      clearFormValues();
      alert("Your message has been sent!");
    } else if (status == "error") {
      alert("Oops, something happened try again")
    } else if (status == "timeout") {
      alart("Our site appears to be down, try again later")
    }
  });
}

$(document).ready(function(){
  clearFormValues()
  
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

  $('#contactformsend').click(function() {
    console.log('clicked contact send');
    var contactSendData = {
      contactname: $('#contactname').val(),
      contactemail: $('#contactemail').val(),
      contactphone: $('#contactphone').val(),
      contactphotoreq: $('#contactphotoreq').val(),
      contactbusname: $('#contactbusname').val(),
      contactbussite: $('#contactbussite').val(),
      contacttext: $('#contacttext').val()
    }
    sendContactData(contactSendData);
  });
});
