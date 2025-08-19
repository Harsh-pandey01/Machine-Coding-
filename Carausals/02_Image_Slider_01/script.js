const slides = document.querySelectorAll('.carausal-slide')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')


let currentSlide = 0 ;

function slideNext(){
    //move the current slide to the next one
    slides[currentSlide].style.animation = 'slideNext 0.5s forwards'

    if(currentSlide >=slides.length -1){
        currentSlide = 0 ;
    }else{
        currentSlide++ ;
    }
    slides[currentSlide].style.animation = 'slideNext2 0.5s forwards'
}


function slidePrev(){
    slides[currentSlide].style.animation = 'slidePrev 0.5s forwards'

    if(currentSlide == 0){
        currentSlide = slides.length-1 ;
    }else{
        currentSlide-- ;
    }
    slides[currentSlide].style.animation = 'slidePrev2 0.5s forwards'

}

nextBtn.addEventListener('click',()=>{
   
    slideNext()
})

prevBtn.addEventListener('click',()=>{
    slidePrev()
})
