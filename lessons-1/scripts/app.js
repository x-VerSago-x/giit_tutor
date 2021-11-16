const slides = document.querySelectorAll('.slide')

slides.forEach((slide) =>{
    slide.addEventListener('click',()=>{
ClearClassActive()
        slide.classList.add('active')
    })
})
function ClearClassActive(){

    slides.forEach((slide) =>{
        slide.classList.remove('active')
    })
}