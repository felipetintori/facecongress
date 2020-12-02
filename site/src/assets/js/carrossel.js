$(document).ready(function(){
    $('.parallax').parallax();
    $('html, body').animate({ scrollTop: 0 });
    //$('.tooltip').css('display', "none");
    
    $('.carousel').carousel({fullWidth: true, indicators:false, padding:30, dist:-100});
    $('.carousel').carousel();
    // Next slide
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', 3); // Move next n times.
    // Previous slide
    $('.carousel').carousel('prev');
    $('.carousel').carousel('prev', 4); // Move prev n times.
    // Set to nth slide
    $('.carousel').carousel('set', 4);

    $( ".btn-prev" ).click(function() {
      $('.carousel').carousel('prev', 5);
    });
    $( ".btn-next" ).click(function() {
      $('.carousel').carousel('next', 5);
    });
    $( "a.carousel-item" ).mouseover(function() {
      $(this).find('.box-tooltip').css('display', "block");
    });
    $( "a.carousel-item" ).mouseout(function() {
      $(this).find('.box-tooltip').css('display', "none");
    });
    
    //Mudanças no CSS
    $('.carousel').css('height','225px').css('border','1px solid #f5f5f5');
    //$('.carousel .indicators .indicator-item').css('height','20px').css('width','20px').css('background-color','rgba(38, 198, 218, 0.5)').css('bottom','-25px').css('z-index','2000');
  });