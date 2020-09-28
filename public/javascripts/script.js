var $togglenav = $('.expanda-nav > .toggle-nav');

function clearFormValues() {
  $('form > input, form > textarea').val('');
  $('select').val('none');
  $('.contact-business-field').fadeOut();
  $('form').trigger("reset");
  $('#contactformsend').empty().text('Send')
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
    window.location.href = "/contact/thankyou"
  })
  .fail(function(response) {
    alert('something bad happened');
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
    if($('#contactphotoreq').val() == 'Commercial/Product') {
      $('.contact-business-field').fadeIn();
    }
  });

  $('#contactformsend').click(function() {
    const validEmail = contactemail.checkValidity();
    const validName = contactname.checkValidity();
    var contactSendData = {
      contactname: $('#contactname').val(),
      contactemail: $('#contactemail').val(),
      contactphone: $('#contactphone').val(),
      contactphotoreq: $('#contactphotoreq').val(),
      contactbusname: $('#contactbusname').val(),
      contactbussite: $('#contactbussite').val(),
      contacttext: $('#contacttext').val()
    }
    if (validEmail && validName) {
      console.log('Creating photo request: ' + $('#contactphotoreq').val());
      sendContactData(contactSendData);
      $('#contactformsend').empty().html('<i class="fal fa-sync-alt"></i>')
    } else {
      console.log('Required information missing or invalid');
    }
  });
});
