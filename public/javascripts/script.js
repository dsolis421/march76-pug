var $navtoggle = $('.nav-toggle');

function togglenavmenu() {
  if ($navtoggle.hasClass('expanded')) {
    $('.site-nav-container').fadeOut();
    $navtoggle.removeClass('expanded');
  } else {
    $('.site-nav-container').fadeOut();
    $navtoggle.addClass('expanded');
    $('.site-nav-container').fadeIn();
  }
}

function clearFormValues() {
  $('form > input, form > textarea').val('');
  $('select').val('none');
  $('.contact-business-field').fadeOut();
  $('form').trigger("reset");
  $('#contactformsend').empty().text('Send')
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

  $('.nav-toggle, .nav-site-link').click(function() {
    togglenavmenu();
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
