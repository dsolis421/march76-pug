function scrollToComments() {
  $('html, body').animate({
    scrollTop: $('#moodboard-comments').offset().top - 80
  },400,"swing");
}

function resetCommentForm() {
  $('.comment-name, .comment-text').val('');
  $('#quote-reply').html('');
  $('.moodboard-comment-form').fadeOut(400,"swing");
}

function prepNewComment(replyto) {
  $('.moodboard-comment-form').fadeIn(400,"swing");
  scrollToComments();
  if(replyto) {
    $('#quote-reply').html(replyto);
  }
}

function addNewComment(comment) {
  var quick = $('.moodboard-comment-form').attr('data-board');
  $.post('/boards/' + quick, comment, function() {
    resetCommentForm();
    $('#moodboard-comments-container').load('/boards/' + quick + ' #moodboard-comments-listing',flashNewComment());
    scrollToComments();
  });
}

function setCommentHandlers() {

  $('.fa-comment-dots').click(function() {
    prepNewComment();
  });

  $('.comment-submit').click(function() {
    if($('.comment-name').val() === '' || $('.comment-text').val() === '') {
      return
    } else {
      var comment = {};
      comment.quote = $('#quote-reply').html();
      comment.name = $('.comment-name').val();
      comment.commenttext = $('.comment-text').val();
      addNewComment(comment);
    }
  });

  $('.comment-cancel').click(function(){
    $('.moodboard-comment-form').fadeOut(400,"swing");
    resetCommentForm();
  });
  console.log('set comment handlers ran');
}

function flashNewComment() {
  $('.moodboard-comment:first-of-type').css({'background':'#cce6ff'});
  setTimeout(function(){
    $('.moodboard-comment:first-of-type').css({'background':'#f2f2f2'})
  },5000);
}

function replyToComment(quote) {
  //console.log('trying to reply => ' + quote);
  var replyto = $('.moodboard-comment[data-key="' + quote + '"] p').html();
  //console.log('replyto = ' + replyto);
  prepNewComment(replyto);
}

$(document).ready(function(){
  setCommentHandlers();
});
