$('.gallery-column figure img').click(function(){
  var imageSrc = $(this).attr('data-highres');
  $('#imageModal').fadeIn(700,"swing");
  $('#enlargedImage').attr('src', imageSrc);
  $('#modalCaption').html('here is the caption');
});

$('.modal-close').click(function(){
  $('#imageModal').fadeOut(700,"swing");
});
