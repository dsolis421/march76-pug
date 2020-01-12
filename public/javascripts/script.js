var $footernav = $('.expanda-nav > div:last-of-type');

function respNavToggle() {
  if($footernav.attr('class') === "toggle-nav") {
    $footernav.addClass('expanded');
    if($(window).width() < 1200){
      $('.expanda-nav').animate({"height":"100vh","width":"100%"},300);
      $('#entry-header .expanda-nav').css({"background":"#000"});
      $('.toggle-nav').animate({"width":"100%"},300);
    } else {
      $('#entry-header .expanda-nav').animate({"width":"100%"}, 350).css({"background":"rgba(0,0,0,.5)"});
      $('#static-header .expanda-nav').animate({"width":"100%"}, 300);
      $('.toggle-nav').animate({"width":"85%"},300);
    }
    $('.toggle-nav a').fadeIn(400,"swing");
  } else {
    $footernav.removeClass('expanded');
    $('.toggle-nav a').fadeOut(200,"swing");
    $('.toggle-nav').animate({"width":"0"}, 200);
    if($(window).width() < 1200){
      $('#entry-header .expanda-nav').animate({"width":"90%","height":"70px"}, 350).css({"background":"none"});
      $('#static-header .expanda-nav').animate({"width":"90%","height":"70px"}, 350);
    } else {
      $('#entry-header .expanda-nav').animate({"width":"10%"}, 350).css({"background":"none"});
      $('#static-header .expanda-nav').animate({"width":"10%"}, 350);
    }
  }
}

function scrollToComments() {
  $('html, body').animate({
    scrollTop: $('#moodboard-comments-container').offset().top - 80
  },400,"swing");
}

function resetCommentForm() {
  $('.comment-name, .comment-text').val('');
  $('.moodboard-comment-form').fadeOut(400,"swing");
}

function addNewComment(comment) {
  var quick = $('.moodboard-comment-form').attr('data-board');
  $.post('/boards/'+quick, comment, function() {
    resetCommentForm();
    $('#moodboard-comments-container').load('/boards/alex .moodboard-comments-section', function(){
      $('.fa-comment-dots').click(function() {
        $('.moodboard-comment-form').fadeIn(400,"swing");
        scrollToComments();
      });

      $('.comment-submit').click(function() {
        if($('.comment-name').val() === '' || $('.comment-text').val() === '') {
          return
        } else {
          var comment = {};
          comment.name = $('.comment-name').val();
          comment.commenttext = $('.comment-text').val();
          addNewComment(comment);
        }
      });

      $('.comment-cancel').click(function(){
        $('.moodboard-comment-form').fadeOut(400,"swing");
        $('.comment-name, .comment-text').val('');
      });
    });
    scrollToComments();
  });
}

$(document).ready(function(){

  setTimeout(function(){
    $('.entry-blend').animate({"opacity": "1"}, 1000);
    $('.entry-logo, #fadein-footer, #entry-header .icon.fadein-icon').fadeIn(1500,"swing");
    $('#fadein-footer *').animate({"opacity": "1"}, 1500);
  }, 700);

  $('.icon').click(function() {
    respNavToggle();
  });

  $('.fa-comment-dots').click(function() {
    $('.moodboard-comment-form').fadeIn(400,"swing");
    scrollToComments();
  });

  $('.comment-submit').click(function() {
    if($('.comment-name').val() === '' || $('.comment-text').val() === '') {
      return
    } else {
      var comment = {};
      comment.name = $('.comment-name').val();
      comment.commenttext = $('.comment-text').val();
      addNewComment(comment);
    }
  });

  $('.comment-cancel').click(function(){
    $('.moodboard-comment-form').fadeOut(400,"swing");
    $('.comment-name, .comment-text').val('');
  });

});
