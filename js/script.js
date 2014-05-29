$(document).ready(function() {
//   $('#fullpage').fullpage({
//     anchors: ['firstPage', 'secondPage', 'thirdPage'],
//     menu: '#header',
// //   });
// //   $('#header').find('#portfolio').click(function() {
// //     $.fn.fullpage.moveTo(2, 0);
    
// //   });
// // });

  $('#fullpage').fullpage({
    css: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage'],
  
    onLeave: function(anchorLink, index){
      //using index
      if(index == '2'){
        $('#header').addClass('topped');
        $('.section').addClass('topped');
      }
      if(index == '1'){
        $('#header').removeClass('topped');
      }
    }
  });
});

// $(function(){
//  var shrinkHeader = 800;
//   $(window).scroll(function() {
//     var scroll = getCurrentScroll();
//       if ( scroll >= shrinkHeader ) {
//            $('#header').addClass('topped');
//         }
//         else {
//             $('#header').removeClass('topped');
//         }
//   });
//   $(window).scroll(function() {
//     var scroll = getCurrentScroll();
//       if ( scroll >= 693 ) {
//            $('body').addClass('blue');
//         }
//         else {
//             $('body').removeClass('blue');
//         }
//   });
// function getCurrentScroll() {
//     return window.pageYOffset || document.documentElement.scrollTop;
//     }
// });