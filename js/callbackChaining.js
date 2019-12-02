//
//$(function(){
//    $("h1").click(function(){
//        $(".sample").slideToggle(1000, function(){
//            alert ("toggle complete");
//        })
//    })
//})


$(function(){
    $("h1").click(function(){
        $(".sample").css("background-color", "blue")
            .slideUp(2000)
            .slideDown(2000);
    })
})