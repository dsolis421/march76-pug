$('.portfolio-category-grid figure img').click(function(){
  var imageSrc = $(this).attr('data-highres');
  var imageName = $(this).attr('data-name');
  var imageCam = $(this).attr('data-camera');
  var imageLen = $(this).attr('data-lense');
  var imageFocal = $(this).attr('data-focallength');
  var imageFstop = $(this).attr('data-fstop');
  var imageIso = $(this).attr('data-iso');
  var imageShut = $(this).attr('data-shutterspeed');

  $('#enlargedImage').attr('src', imageSrc);
  $('#imageModal').fadeIn(700,"swing");
  $('#modalCaption .image-details:first-of-type').html('<h4>' + imageName + '</h4>');
  $('#modalCaption .image-details:nth-of-type(2)').html('<span>' + imageCam + '</span> \
    <span>' + imageLen + '</span> \
    <span>' + imageFocal + '</span>');
  $('#modalCaption .image-details:last-of-type').html('<span>' + imageFstop + '</span> \
    <span>ISO ' + imageIso + '</span> \
    <span>' + imageShut + '</span>');
});

$('#imageModal').click(function(){
  $('#imageModal').fadeOut(700,"swing",function(){
    $('#enlargedImage').removeAttr('src');
  });
});
