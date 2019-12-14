$(document).ready(function(){
// Advertising
$(".clickbtn").click(function(){
    $(".advertising").hide();
});

// Activities
if($(".countup").length)
$('.countup .key').counterUp({
    delay: 10,
    time: 1000
});
    

$(".borderb").slick({
    infinity:true,
    slidesToShow:2,
    slidesToScroll:1
});
});
