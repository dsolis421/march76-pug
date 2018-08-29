$('.gallery-column figure img').click(function(){
  var imageSrc = $(this).attr('src');
  $('#imageModal').css({"display": "block"});
  $('#enlargedImage').attr('src', imageSrc);
  $('#modalCaption').html('here is the caption');
});

$('.modal-close').click(function(){
  $('#imageModal').css({"display":"none"});
});
