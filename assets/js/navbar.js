$(".nav .btn-menu").click(function(){
    $(".nav ul").slideToggle();
    $(".nav ul ul").css('display', 'none');
});

$('.nav ul li').click(function() {
    $('.nav ul ul').slideUp();
    $(this).find('ul').slideToggle();
});

$('.nav ul ul a').click(function () {
    $('.nav ul ul').css('display','none');
})

$(window).resize(function(){
    if($(window).width() > 800){
        $(".nav ul").removeAttr('style')
    }
});