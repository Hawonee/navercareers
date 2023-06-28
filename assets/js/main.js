$(function(){ //시작

  // header teams 호버 메뉴
  // $('.gnb-item, .sub-list').hover(function(){
    
  //   $(this).children('.sub-list').toggleClass('active');
  // });
  $('.gnb-item').hover(function(){
    if($(this).children('.sub-list').length){
      $('.header').toggleClass('on');
    }
    $(this).children('.sub-list').toggleClass('active');
  });



  // 사이드 메뉴
  
  $('.btn-menu').click(function() {
    $(this).toggleClass('on'); 
    $(this).siblings('.side-nav').toggleClass('on');
  });


  // footer 관련 사이트
  $('.btn-site').click(function(){
    $('.site-list').toggleClass('active');
});


  ////////////// 슬라이드 

  var ppSlide = new Swiper(".sc-visual .swiper", {
    simulateTouch:false,
    speed : 700,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  })
  // swiper tip: 오토플레이 들어가면 자동 루프
  var ppSlide = new Swiper(".sc-people .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints:{
      768:{
        slidesPerView:1,
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
        slidesPerView:2.3,
      },
    }
  })



}); //지우지 마시오