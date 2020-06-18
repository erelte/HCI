var slider = $('.slider ul');
var slide = $('.slide');
var delay = 4000;


for(let x=0;x<slide.length;x++){
    // console.log(x)
    $('.slider .dots').append('<button class="dot" onclick="goto('+(x+1)+')"></button>');
}

var firstChild = $('.slider ul li:first-child').clone();
slider.append(firstChild)
var interval;
var n=1;
$('.slider .dots button:nth-child('+n+')').addClass('active')

function goto(x){
    if(x<n){
        slider.animate({
            'margin-left': '+='+(slide.width()*(n-x))
        });
        $('.slider .dots button:nth-child('+(n)+')').removeClass('active')
        n=x;
        // console.log(n) 
    }
    else if(x>n){
        slider.animate({
            'margin-left': '-='+(slide.width()*(x-n))
        });
        $('.slider .dots button:nth-child('+(n)+')').removeClass('active')
        n=x
        // console.log(n)
    }
    $('.slider .dots button:nth-child('+n+')').addClass('active')
}


function startCycle(){
    interval = setInterval(function(){
        slider.animate({
            'margin-left' : '-='+slide.width()
        },function(){
            if(slide.width()*slide.length*-1 == parseInt(slider.css('margin-left'))){
                slider.css('margin-left',0);
                n=0;
                $('.slider .dots button:nth-child('+slide.length+')').removeClass('active')
            }
            n++;
            // console.log(n)
            $('.slider .dots button:nth-child('+n+')').addClass('active')
            $('.slider .dots button:nth-child('+(n-1)+')').removeClass('active')
        })
    },delay);
}

function pauseCycle(){
    // console.log('pause')
    clearInterval(interval);
}

startCycle();

slider.on('mouseenter',pauseCycle);
slider.on('mouseleave',startCycle);
$('.slider .dots').on('mouseenter',pauseCycle);
$('.slider .dots').on('mouseleave',startCycle);