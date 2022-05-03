//햄버거 버튼을 클릭하면 
$('.open_gnb').click(function(){
    $(this).toggleClass('open');
    $('.gnb_area').slideToggle();
    $('.m_gnb_dimmed').fadeToggle(200);
});

//open_sub를 클릭하면 서브메뉴가 보임
$('.open_sub').click(function(){
    $(this).toggleClass('open');
});

//모바일 상태에서 메뉴 슬라이드가 작동 된 뒤 남아있는 스타일 속성을 없애준다.
$(window).resize(function(){
    winW = $(window).width();
    if(winW > 1024){
        $('.gnb_area,.m_gnb_dimmed').removeAttr('style');
        $('.open_gnb').removeClass('open');
    }

    //모바일 상태에서 .subInner부분이 슬라이더로
    if(winW < 769){
        $('.type3, .type4').addClass('mySlider');
    
        //slick이 적용된 요소에서 발생하는 이벤트를 처리하는 함수 (슬릭 적용전에 사용)
    
        $('.mySlider').on('init reInit afterChange',function(event, slick, currentSlide, nextSlide){
            var index = (currentSlide ? currentSlide : slick.currentSlide) + 1;
            $('.slick-dots').html('<li>'+index+'/'+(slick.slideCount)+'</li>');
        });
        //dot이 나올 자리에 html을 삽입 
        $('.mySlider').slick({
            dots: true,
        });
    } else {
        $('.mySlider').slick('unslick');
        $('.type3, .type4').removeClass('mySlider');
    }
    //location.reload();  //화면 새로고침 
});

//모바일 상태에서 .subInner부분이 슬라이더로 변함
winW = $(window).width();
if(winW < 769){
    $('.type3, .type4').addClass('mySlider');

    //slick이 적용된 요소에서 발생하는 이벤트를 처리하는 함수 (슬릭 적용전에 사용)

    $('.mySlider').on('init reInit afterChange',function(event, slick, currentSlide, nextSlide){
        var index = (currentSlide ? currentSlide : slick.currentSlide) + 1;
        $('.slick-dots').html('<li>'+index+'/'+(slick.slideCount)+'</li>');
    });
    //dot이 나올 자리에 html을 삽입 
    $('.mySlider').slick({
        dots: true,
    });
} else {
    $('.mySlider').slick('unslick');
    $('.type3, .type4').removeClass('mySlider');
}

var pos = [];    //각 section이 top에서부터 얼마 떨어져 있냐 알아내기
for(var i=1 ; i<6 ; i++){
    pos.push(($('#section'+i).offset().top) - 159) ;
}
console.log(pos);

//인디게이터를 누르면 해당 섹션으로 이동한다
$('.indicator li a').on("click",function(e){
    e.preventDefault();
                            //펑션의 매개변수(e).preventDefault : a의 기본기능을 못하게한다
    var target = this.hash; //a에 들어간 #해쉬값을 가져온다
    console.log(target);

    var sectionH =($(target).offset().top) - 157;
    
    // 각 섹션의 위에서부터의 거리 (원래는 159정도 고정헤더거리와 떨어져있어야 하지만 각섹션 높이의 미세한 차이로 인해 버튼이 활성화 되지 않는 문제로 조금더 높였다. )
    console.log(sectionH);

    $('html, body').animate({scrollTop:sectionH},500);
});

//모바일 인디게이터를 누르면 각 페이지로 이동
$('.m_indicator li a').on("click",function(e){
    e.preventDefault();
                            //펑션의 매개변수(e).preventDefault : a의 기본기능을 못하게한다
    var target = this.hash; //a에 들어간 #해쉬값을 가져온다
    console.log(target);

    var sectionH =($(target).offset().top) - 85;
    
    // 각 섹션의 위에서부터의 거리 (원래는 159정도 고정헤더거리와 떨어져있어야 하지만 각섹션 높이의 미세한 차이로 인해 버튼이 활성화 되지 않는 문제로 조금더 높였다. )
    console.log(sectionH);

    $('html, body').animate({scrollTop:sectionH},500);

    $('.m_indicator li').removeClass('on');
    $(this).parent('li').addClass('on');
    //parent는 바로 위 부모, parents는 위 부모레벨 전부. 부모 li에 on클라스추가

});

var currentP; //현재 어떤 섹션부분에 있는지 알아오는 변수선언

$(window).scroll(function(){
    var scrollH = $(window).scrollTop();    //스크롤 된 거리  
    console.log(scrollH);

    //모바일 인디케이터,snb_wrap이 스크롤되면 고정
    if(scrollH >=60){
        $('.snb_wrap, .m_indicator').addClass('stick');
    } else {
        $('.snb_wrap, .m_indicator').removeClass('stick');
    };

    //스크롤 시 인디케이터 색상변환
    if(scrollH < pos[1]) {
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(0).addClass('on');
        $('.indicator_prev').hide();
        $('.indicator_next').show();
        currenrP = 0 ; 
    } 
    else if (scrollH >= pos[1] && scrollH < pos[2]) {
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(1).addClass('on');
        $('.indicator_prev').show();
        currentP = 1 ;
    }
    else if (scrollH >= pos[2] && scrollH < pos[3]) {
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(2).addClass('on');
        $('.indicator_prev').show();
        $('.buy_car img').removeClass('ani');
        currentP = 2 ;
    }
    else if (scrollH >= pos[3] && scrollH < pos[4]) {
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(3).addClass('on');
        $('.indicator_next').show();
        $('.indicator_prev').show();
        currentP = 3 ;
    }
    else {
        $('.indicator li').removeClass('on');
        $('.indicator li').eq(4).addClass('on');
        $('.indicator_next').hide();
        $('.buy_car img').addClass('ani');
        currentP = 4 ;
    }

});

//하나 위 section으로 스크롤 되게
$('.indicator_prev').on('click',function(){
    currentP = currentP - 1;
    $('html,body').animate({scrollTop:pos[currentP]+2},500,'swing'); 
});

//하나 아래 section으로 스크롤 되게
$('.indicator_next').on('click',function(){
    currentP = currentP + 1;
    $('html,body').animate({scrollTop:pos[currentP]+2},500,'swing'); 
});