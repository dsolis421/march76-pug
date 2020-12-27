$(document).ready(function(){
  $('.portfolio-image-grid figure img').click(function(){
    $('#enlargedImage').attr('src', $(this).attr('data-largeimage'));
    $('#imageModal').fadeIn(700,"swing");
  });

  $('#imageModal').click(function(){
    $('#imageModal').fadeOut(700,"swing",function(){
      $('#enlargedImage').removeAttr('src');
    });
  });
});
