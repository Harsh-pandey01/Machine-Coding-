const sliders = document.querySelectorAll('.carausal-slides')


// functio for caruasal animation

let presentCarausalSlide = 0 ;

function carausalSlidingNext(){

    sliders[presentCarausalSlide].style.animation = 'fadeOut ease 0.5s forwards'

    if(presentCarausalSlide >= sliders.length -1 ) presentCarausalSlide = 0 ;
    else presentCarausalSlide++ ;

    sliders[presentCarausalSlide].style.animation = 'fadeIn ease 0.5s forwards'
}

// setInterval(carausalSlidingNext , 5000) 