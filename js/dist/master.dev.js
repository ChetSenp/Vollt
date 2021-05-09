"use strict";

$(document).ready(function () {
  $('.content_slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});
$(document).ready(function () {
  $('.comment_slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
});
/* $(document).ready(function(){
  $(".nav").on("click" , "a" , function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body.html').animate({
      scrollTop:top
    }, 1500);
  });
});

 */