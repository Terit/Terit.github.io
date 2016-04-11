import $ from 'jquery';

$(function () {

  $('#fullpage').fullpage({
    css: true,
    anchors: ['home', 'blog', 'portfolio'],

    onLeave: function (anchorLink, index) {
      // using index
      if (index === 1) {
        $('header').removeClass('topped');
        $('.fa-arrow-up').replaceWith('<i class="fa fa-home"></i>');
        $('#home').addClass('underline');
      } else {
        $('header').addClass('topped');
        $('.section').addClass('topped');
        $('.fa-home').replaceWith('<i class="fa fa-arrow-up"></i>');
        $('#home').removeClass('underline');
      }
      if (index === 3) {
        $('#portfolio').addClass('underline');
        $('.fa-folder').replaceWith('<i class="fa fa-folder-open"></i>');
      } else {
        $('#portfolio').removeClass('underline');
        $('.fa-folder-open').replaceWith('<i class="fa fa-folder"></i>');
      }
    },
  });

  $('#portrait').on('mouseover', function () {
    $('#about').removeClass('hide');
  }).on('mouseleave', function () {
    $('#about').addClass('hide');
  });

  $('.arrow-down').on('click', function () {
    var url = window.location.hash;
    if (url === '#home') {
      window.location.hash = '#blog';
    } else {
      window.location.hash = '#portfolio';
    }
  });
});
