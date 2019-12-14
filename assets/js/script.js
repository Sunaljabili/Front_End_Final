$(document).ready(function(){
//slick slider

$(".slider").slick({
    infinity:true,
    slidesToShow:6,
    slidesToScroll:1
})

$(".regularslider").slick({
    infinity:true,
    slidesToShow:6,
    slidesToScroll:1
});

$(".student").slick({
    infinity:true,
    slidesToShow:4,
    slidesToScroll:1
});


// Advertising
$(".clickbtn").click(function(){
    $(".advertising").hide();
});
// Activities
if($(".activities").length)
$('.activities .key').counterUp({
    delay: 10,
    time: 1000
});

});
