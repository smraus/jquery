
//$(function(){
//    $("h1").click(function(){
////    $(".sample").slideUp(1000);
////    $(".sample").slideToggle(1000);
//    $(".sample").slideToggle(1000);
//    })
//})


$(function(){
    $("h1").click(function(){
    $(".sample").animate({
        height: '+=50px',
        width: '+=50px'
    }, 1000);
    })
})



