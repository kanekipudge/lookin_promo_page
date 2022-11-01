$(document).ready(function() {
  $('.block_item').click(function(event) {
    const clicked = $(this);
    if ($('.block').hasClass('one')) {
      $('.block_item.active').not(clicked).removeClass('active');
      $('.block_content').not(clicked.children('.block_content')).slideUp(300);
    }
    if (clicked.hasClass('active')) {
      $('.lookin_big_logo').toggleClass('active');
      $('.footerlast').toggleClass('active');
    } else {
      $('.lookin_big_logo').addClass('active');
      $('.footerlast').addClass('active');
    }
    $('.lookin_big_logo').remove('active');
    clicked.toggleClass('active');
    clicked.children('.block_title').toggleClass('p').next().slideToggle(300);

  });
});
