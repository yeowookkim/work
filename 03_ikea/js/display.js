$(document).ready(function () {
    //alert('123');
    //$(".slick-items").slick({
    //autoplay: true,
    //dots: false,
    //speed: 600, /* 이미지 슬라이딩시 걸리는 시간 */
    //infinite: true,
    //autoplaySpeed: 2000,/* 이미지가 다른 이미지로 넘어갈때 텀 */
    //arrows: false,
    //slidesToShow: 1,
    //slidesToScroll: 1,
    //fade: true,
    //})

    $(".slick-items").slick({
        infinite: true,
        slidesToShow: 1,     //한번에 보여지는 갯수
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,   //자동넘김
        autoplaySpeed: 4000,  //자동넘김 시간
        speed: 500,
        prevArrow: $('.prev'),     // 다음 화살표 모양 설정
        nextArrow: $('.next'),     // 다음 화살표 모양 설정
        pauseOnHover: false,
    });

    var percent; //진행률
    var tick; //진행률 반복 실행
    var time = 4; //진행 표시줄 지속 시간 (slick autoplaySpeed와 동일하게 설정)

    function start() {
        reset();
        percent = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        //지정한 시간만큼 나누어 퍼센트가 오른다.
        percent += 1 / time
        $('.bar').css({
            width: percent + "%"
        });

        //100%가 넘으면 다음 슬라이드로 넘어간다.
        if (percent >= 100) {
            $('.slider').slick('slickNext');
            start();
            sleep(500);
        }
    }

    function sleep(ms) {
        const wakeUpTime = Date.now() + ms;
        while (Date.now() < wakeUpTime) {}
    }

    //진행 표시줄 초기화
    function reset() {
        $('.bar').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    start();

    //진행 표시줄을 클릭했을 때, 현재 진행중인 줄이 아니면 해당 순서로 초기화한다.
    $('.progress div').click(function () {
        var nowIndex = $(this).find('.progressBar').data("slick-index")
        if (nowIndex != barIndex) {
            $('.slider').slick('slickGoTo', nowIndex, false);
        }
    });
    $('.prev').on('click', function(){
        start();
    });
    $('.next').on('click', function(){
        start();
    });

    $('.play').on('click', function () {
        $(".slick-items").slick('slickPlay');
        $('.play').css({ 'display': 'none' });
        $('.pause').css({ 'display': 'block' });
        start();
    });
    $('.pause').on('click', function () {
        $(".slick-items").slick('slickPause');
        $('.play').css({ 'display': 'block' });
        $('.pause').css({ 'display': 'none' });
        reset();
    });
})