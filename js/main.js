function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google-translate');
}
for (const btn of document.getElementsByClassName("fa-heart"))
    btn.onclick = e => { 
        if(e.target.style.color!=="red"){
            e.target.classList.remove("fa-regular")
            e.target.classList.add("fa-solid")
            e.target.classList.add("fa-bounce")
            e.target.style.color="red"
        }else{
            e.target.classList.remove("fa-solid")
            e.target.classList.remove("fa-bounce")
            e.target.classList.add("fa-regular")
            e.target.style.color="black"
        }
    }
const slide = document.querySelector(".slide")
var slideShow = setInterval(() => slide.scrollLeft += WIDTH, 2000)
setTimeout(() => clearInterval(slideShow), 8000)
const WIDTH = window.innerWidth
function sliding(direction) {
    clearInterval(slideShow)
    slide.scrollLeft += WIDTH * direction
}
const slideLeftBtn = document.querySelector(".left")
const sliderRightBtn = document.querySelector(".right")
sliderRightBtn.onclick = () => sliding(1)
slideLeftBtn.onclick = () => sliding(-1)
