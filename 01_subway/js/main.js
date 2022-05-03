$(document).ready(function(){
    //메인 메뉴 : 롤 오버시 서브메뉴 슬라이드다운

    $(".dp1").mouseenter(function(){
        $(".sub").stop().slideDown(300);
        $('header').addClass('active');
    });
    $("header").mouseleave(function(){
        $(".sub").stop().slideUp(300);
        $('header').removeClass('active');
    });

    //메인 슬라이더
    $('.main_visual_imgs').slick({
        autoplay:true,
        autoplaySpeed:1800,
        speed:500,
        arrows:false,
        dots:true,
    });

    //서브웨이 메뉴 : 롤오버시 크게 보이게
    $(".sandwichs ul li").mouseenter(function(){
        $(this).addClass('big');
    })
    $(".sandwichs ul li").mouseleave(function(){
        $(this).removeClass('big');
    })

    //
    $(".sub_pdlistWrap li").mouseenter(function(){
        $(this).addClass('on');
    })
    .mouseleave(function(){
        $(this).removeClass('on');
    });

    //서브웨이메뉴: 탭 메뉴
    

});
