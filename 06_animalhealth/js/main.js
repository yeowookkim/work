var myFullpage = new fullpage('#fullpage', {
    menu: '.gnb_list',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    sectionsColor: ['#000', '#ced4d6', '#fff','#8cafd7','#ebe69c'],
    autoScrolling: true,  //스크롤 바를 스크롤 하면 한 페이지씩 넘어감(기본설정)
    responsiveHeight:350,  //세로 높이가 350px보다 작아졌을때는 오토스크롤링 작동X
    scrollBar:true,
    normalScrollElements: '#s2', // #s2에서는 autoscrolling이 안된다 #s2에는 class="scrollable-element" 를 추가해야한다
    
    // navigation:true  //오른쪽 페이지 버튼
});

// document.querySelector('.scroll_guide').addEventListener('click',function(){
//     fullpage_api.moveSectionDown();
// });

document.querySelector('.nextS').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});
document.querySelector('.prevS').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});



$('.totalMitem').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
    } else {
        $('.totalMitem').removeClass('active');
        $(this).addClass('active');
    }
});

$('.btn_total').click(function(){
    console.log('햄버거버튼 클릭!!')
    $('.total_menuZ').addClass('active')
});

$('.btn_totalClose').click(function(){
    $('.total_menuZ').removeClass('active')
});




// var myScroll = new IScroll('.total_menu');
myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    scrollbars: true
});


new WOW().init();


function initMap() {
    const myLatLng = {  
        lat:37.500148845880915, 
        lng:127.02895351272205
    }
    //위도(latitude), 경도(longitude) google map 에서 우클릭하면 알수있음
    //https://developers.google.com/maps/documentation/javascript/overview?hl=ko에서 가져오기
    const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 18,  //확대된 상태 1~20     
    });
    //구글 API map에 들어있는 Map함수 실행
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });
}