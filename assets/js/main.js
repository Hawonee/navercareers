$(function(){ //시작

  var ppSlide = new Swiper(".sc-visual .swiper", {
    simulateTouch:false,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })


  $('select').change(function(){
    $(this).css('color','#000')
  })


  var ppSlide = new Swiper(".sc-people .swiper", {
    slidesPerView: 1,
    // centeredSlides: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints:{
      768:{
        slidesPerView: 1.2,
      },
    }
  })

  var bfSlide = new Swiper(".sc-benefits .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1025:{
        slidesPerView: 3,
      }
    }
  })



  // footer 관련 사이트
  $('.btn-site').click(function(){
    $('.relate-site').toggleClass('active');
});

// header teams 호버 메뉴
  $('.gnb-item').hover(function(){
    if($(this).children('.sub-list').length){
      $('.header').toggleClass('on');
    }
    $(this).children('.sub-list').toggleClass('active');
  });

}); //지우지 마시오