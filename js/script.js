$(function(){
 var shrinkHeader = 270;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('#header').addClass('topped');
        }
        else {
            $('#header').removeClass('topped');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});