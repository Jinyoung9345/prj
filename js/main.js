$(document).ready(function(){

// slide 구현
  var count = 0;
  // var slideWidth = $(".mainSlider > li").width();

  $(".btn_next").click(function(){
    count++;
    if(count > 2){
      count=0;
    }
    $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
    $(".pagintion > li").removeClass("active");
    $(".pagintion > li").eq(count).addClass("active");
  });

  $(".btn_prev").click(function(){
    count--;
    if(count < 0){
      count=2;
    }
    $(".mainSlider").css("transform","tranlateX("+(-count*33.333)+"%)");
    $(".pagintion > li").removeClass("active");
    $(".pagintion > li").eq(count).addClass("active");
  });

// pagintion 실행
// 내가 클릭한 리스트의 순번을 구해야함
// 순번에 맞는 기차칸 슬라이드가 보여야함
  $(".pagintion > li").click(function(){
    count = $(this).index();
    $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
    $(".pagintion > li").removeClass("active");
    $(".pagintion > li").eq(count).addClass("active");
  });

// 자동슬라이드
// 3초에 한번씩 나대신 자바스크립트가 next버튼을 눌렀을 때 하는 동작을 수행
  var timer1 = setInterval(function(){
    count++;
    if(count > 2){
      count=0;
    }
    $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
    $(".pagintion > li").removeClass("active");
    $(".pagintion > li").eq(count).addClass("active");
  },3000);

  $(".mainBanner").mouseover(function(){
    clearInterval(timer1);
  });

  $(".mainBanner").mouseout(function(){
    timer1 = setInterval(function(){
      count++;
      if(count > 2){
        count=0;
      }
      $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
      $(".pagintion > li").removeClass("active");
      $(".pagintion > li").eq(count).addClass("active");
    },3000);
  });

  $(".tabMenu > dt").click(function(){
    $(".tabMenu > dt").removeClass("on");
    $(this).addClass("on");
  });

  $(".btn_top").click(function(){
    $("html,body").animate({scrollTop:0},1000);
  });

  var btnStatus = false;
  $(".btnGnb").click(function(){

    if(btnStatus == false){
      // 메뉴를 열었을 때
      $(".btnGnb").addClass("on");
      $(".moGnb").addClass("on");
      btnStatus = true;
    }else{
      // 메뉴를 닫았을 때
      $(".btnGnb").removeClass("on");
      $(".moGnb").removeClass("on");
      $(".moGnb > li").removeClass("on");
      btnStatus = false;
    }
  });

  $(".moGnb > li").click(function(){
    $(".moGnb > li").removeClass("on");
    $(this).addClass("on");
  });



});
