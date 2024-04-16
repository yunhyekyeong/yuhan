$(function(){
//--------------헤더------------------------------------------- 
$(window).on('scroll', function(){
    if($(window).width() > 769) {
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0){
            $('.header').addClass('on')
        }else{
            $('.header').removeClass('on')
        }
    }    
});

//--------------헤더 모바일-------------------------------------

$('.mopen').on('click', function(){
    $('.header').toggleClass('on');
});

$('nav>ul>li>a').on('click', function(){
    if($(window).width() < 769) {
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.submenu').slideUp();
    }
});

//--------------메인비주얼-------------------------------------- 

$('.main_slider').slick({
    arrows:false,
    dots:true,
    
    autoplay:true,
    pauseOnFocus:false,
    pauseOnHover:false,
});

$('.main_slider figure').eq(1).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    console.log(c);
    $('.main_slider figure').eq(c+1).addClass('on').siblings().removeClass('on');

});




//----------------유한 역사 카운트---------------------------------

$('.history_count').on('init reInit afterChange', function(e,s,c){
    console.log(c,s.c);
    var i= (c?c:0);
});
var mS=$('.history_count').slick({
    autoplay:true,
    fade:true,
    arrows:false,
    pauseOnHover:false,
    
});
mS.on('afterChange', function(e,s,c){
    $('.history_count figure').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');
    $('.content06  .btn li').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');
});
$('.content06  .btn li').on('click', function(){
    var $this= $(this);
    var idx=$(this).index();
    mS.slick('slickGoTo', idx)
});

//--------------유한스토리 탭메뉴----------------------------------

$('.tab_menu>li').on('click', function(){
    var $this= $(this);
    var idx=$(this).index()
    $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
    $this.addClass('on').siblings().removeClass('on');
});

//--------------유한 브랜드 슬라이드 ----------------------------------

$('.con_slider').slick({
    arrows:true,
    dots:true,
    autoplay:false,
    draggable:false,
    adaptiveHeight:true,
    centerPadding:'250px',
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:1,
    vertical:true,
    focusOnSelect:true,
    asNavFor: '.con_story',
    nextArrow:'<div class="next"><i class="xi-arrow-right"></i></div>',
    prevArrow:'<div class="prev"><i class="xi-arrow-left"></i></div>',  
    
    responsive: [{
        breakpoint:768,
        settings: {
            vertical:false,
            slidesToShow:1,
            slidesToScroll:1,
            centerMode:false,
        
        }
    }]
    
});

$('.con_story').slick({
    arrows:false,
    asNavFor: '.con_slider'
});




//----------------------------------------------------------------    
});