

////////////////getting the html, text and form value////////////////////
//$(function(){
//    $(".btn1").click(function(){
//        alert("text is: " + $("h1").text());
//    })
//})
//
//$(function(){
//    $(".btn2").click(function(){
//        alert("html is: " + $("h1").html());
//    })
//})
//
//$(function(){
//    $(".btn3").click(function(){
//        alert("value is: " + $(".input1").val());
//    })
//})
//
//$(function(){
//    $(".btn4").click(function(){
//        alert("attribute is: " + $(".link1").attr("href"));
//    })
//})


////////////////setting the html, text and form value///////////////////

//$(function(){
//    $(".btn1").click(function(){
//        $("h1").text("i am learning jquery");
//    })
//})

$(function(){
    $(".btn1").click(function(){
        $("h1").text(function(i, origi){
            return origi + " with development";
        });
    })
})

$(function(){
    $(".btn2").click(function(){
       $("h1").html("<i>example of setting the html</i>");
    })
})

$(function(){
    $(".btn3").click(function(){
        $(".input1").val("italy");
    })
})

$(function(){
    $(".btn4").click(function(){
//        $(".link1").attr("href" , "www.yahoo.com");
        $(".link1").attr({
            "href": "www.bing.com",
            "title": "the bing bar",
        });
    })
})






































