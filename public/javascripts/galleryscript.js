$('.gallery-column figure img').click(function(){
  var imageSrc = $(this).attr('data-highres');
  var imageName = $(this).attr('data-name');
  var imageCam = $(this).attr('data-camera');
  var imageLen = $(this).attr('data-lense');
  var imageFocal = $(this).attr('data-focallength');
  var imageFstop = $(this).attr('data-fstop');
  var imageIso = $(this).attr('data-iso');
  var imageShut = $(this).attr('data-shutterspeed');
  $('#imageModal').fadeIn(700,"swing");
  $('#enlargedImage').attr('src', imageSrc);
  $('#modalCaption .image-details:first-of-type').html('<h3>' + imageName + '</h3>');
  $('#modalCaption .image-details:nth-of-type(2)').html('<span>Camera: ' + imageCam + '</span> \
    <span>Lense: ' + imageLen + '</span> \
    <span>Focal Length: ' + imageFocal + '</span>');
  $('#modalCaption .image-details:last-of-type').html('<span>F-stop: ' + imageFstop + '</span> \
    <span>ISO: ' + imageIso + '</span> \
    <span>Speed: ' + imageShut + '</span>');
});

$('#imageModal').click(function(){
  $('#imageModal').fadeOut(700,"swing");
});
