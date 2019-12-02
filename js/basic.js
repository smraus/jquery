$(document).ready(function (){
    $(".btn1").click(function(){
        $("p").hide();
//        $("p").css("color", "red");
//        $("p:first").hide();
    })
})

$(document).ready(function (){
    $(".btn2").click(function(){
        $("h1").hide();
    })
})
$(document).ready(function(){
    $(".btn3").click(function(){
        $("h1, p").show();
    })
})
$(document).ready(function(){
    $(".btn4").click(function(){
        $("h1, p").toggle();
    })
})


