function home(){
    window.location.href = './index.html'
}

$(".nav .btn-menu").click(function(){
    $(".nav ul").slideToggle();
    $(".nav ul ul").css('display', 'none');
});

$('.nav ul li').click(function() {
    $('.nav ul ul').slideUp();
    $(this).find('ul').slideToggle();
});

$('.nav ul li').hover(function () {
        // over
        $(this).children('ul').show();
    }, function () {
        // out
        $(this).children('ul').hide();
    }
);

$('.nav ul ul a').click(function () {
    $('.nav ul li ul').css('display','none');
});

$(window).resize(function(){
    if($(window).width() > 800){
        $(".nav ul").removeAttr('style')
    }
});