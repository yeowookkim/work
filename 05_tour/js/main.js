$(function(){

    $('.visual').slick({
        autoplay:true,            //자동슬라이드
        // autoplaySpeed:2000,        //이미지 전환 속도(정지된 시간 포함)
        arrows:false,              //양 옆 화살표(기본이 true,false는 제거)
        dots:true,                //페이지 버튼
        //fade:true,                // 이미지를 투명도로 전환
        // easeing:'swing',          
        pauseOnFocus:true,       //클릭하면 이미지 멈춤 - true: 멈춤.flase:안멈춤
        // pauseOnHover:false,       // 이미지 위에 마우스를 올려놓으면 멈추는 것
        speed:800,                // 이미지 전환 속도
        // swipe:false,              //밀어서 움직이기

    });

    $('.lazy').slick({
        variableWidth: true,
        lazyLoad: 'ondemand',
        slidesToShow:5,
        centerMode: false,
        slidesToScroll: 1
    });

    $('.box1').on('mouseenter mouseleave',function(ev){
        if ( $(window).width() >1080  ){//데스크탑 상태일 때
            if(ev.type =='mouseenter') { //데스크탑 상태에서 마우스를 올려 놨을 때
                $('.sub_back').stop().slideDown();
                $('.sub').stop().fadeIn();
            }else{ 
                $('.sub_back').stop().slideUp(250,function(){
                    $(this).removeAttr('style');
                    //slideup 실행 후 (콜백함수) 남아있는 스타일을 없애준다.
                });
    
                $('.sub').stop().fadeOut(250,function(){
                    $(this).removeAttr('style');
                });
            }    
        }else { 
        }
    });


var $mobileBtn = $('.box1 > li > a');

    $mobileBtn.click(function(){ //모바일 상태에서 서브메뉴 슬라이드
    if ($(window).width() <1080) { //화면 가로 길이를 열렸을 때가 아닌 클릭했을 때 확인.
    
            if( !$(this).parents('li').is('.act') ){  //li에 .act가 없을 때(닫힌 상태)
                $('.box1 > li').removeClass('act');
                $(this).parents('li').addClass('act');
                $('.nav_arrow').removeClass('on');
                $(this).siblings('.nav_arrow').addClass('on')
            }else { //.act가 있음(열린 상태)
                $('.box1 > li').removeClass('act');
                $('.nav_arrow').removeClass('on')
            }
     //모바일상태 끝
            }
        });

    $('.menu').click(function(){
        if ( $(window).width() >1080  ){
            $('.sub_back , .sub').stop().slideToggle(200);
            //$('.sub').stop().fadeToggle(100);
        }else { 
            $('.box1').animate({left:0},500);
        }
    });

    $('.box_close').click(function(){
        $('.box1').animate({left:-380},500);
    });


    // $('.trigger').click(function(){
    //     $(this).toggleClass('open');
        
    //     if($(this).hasClass('open')){
    //         $('.side-gnb').animate({right:0},500);
    //         $('.navbar-wrap').animate({left:-250},500);
    //     }else{
    //         $('.side-gnb').animate({right:-250},500);
    //         $('.navbar-wrap').animate({left:0},500);
    //     }
    
        
    // })
    




    $('.search').click(function(){
        $('.search_back').stop().slideToggle(200); 
    });


});



