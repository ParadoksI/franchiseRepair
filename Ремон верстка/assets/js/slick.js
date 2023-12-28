$(document).ready(function() {
  $('.slick__container').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.our-team-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    centerMode: true,
  });
  
  $('.stock-slick').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 1,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    initialSlide: 0
  });
  
  
  $('.personas-slick').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.diplomas-slick').slick({
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

});

