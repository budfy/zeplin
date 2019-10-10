$(function(){

  $('.header__bg-slider').slick({
    dots: true,
    appendDots: $('.dots-inner'),
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(window).scroll(function() {
    if($(this).scrollTop() >= window.innerHeight / 2) {
        $('.header-top__inner').addClass('scrolled');
    }
    else{
        $('.header-top__inner').removeClass('scrolled');
    }
  });
  
  $(window).scroll(function() {
    if($(this).scrollTop() >= window.innerHeight / 2) {
        $('.header__adaptive').addClass('swiped');
    }
    else{
        $('.header__adaptive').removeClass('swiped');
    }
  });

  $(".header-top__menu, .header__text-inner").on("click", "a", function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1000);
  });



  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       300,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  

  $('.video__popup-link').magnificPopup({
    type: 'inline',
    alignTop:false
  });

  $('.video__slider').slick({
    centerMode: false,
    slidesToShow: 3,
    infinite: true,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    arrows:true,
  });

  $('.lifein__gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '.lifein__nav'
  });
  $('.lifein__nav').slick({
    rows: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.lifein__gallery',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    appendArrows: $('.lifein__gallery')
  });

  var paralax = document.getElementById("signup__bg");

  /* коэфициент сдвига: 1 сдвиг равный смещению по  оси Y, 0 без сдвига */
  var moveCoef = 0.3;

  window.addEventListener("scroll", scroll);
  window.addEventListener("resize", scroll);
  scroll();

  function scroll() {
    /* берём огнаничивающий прямоугольник паралакса   относительно окна (фрейма) */
    var r = paralax.getBoundingClientRect();

    /* центр паралакса */
    var paralaxYCenter = r.y + r.height / 2;
    /* центр экрана */
    var scrollYCenter = window.innerHeight / 2;

    /* Вычисляем смещение */
    var move = (paralaxYCenter - scrollYCenter) *   moveCoef - 100;

    paralax.style.backgroundPositionY = move + "px";
  };

  $('.header__adaptive-burger-button').click(function(){
    $(this).toggleClass('open');
    $('.header__adaptive-menu').toggleClass('active');
  });
 
});