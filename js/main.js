function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google-translate');
}
for (const btn of document.getElementsByClassName("fa-heart"))
    btn.onclick = e => { e.target.style.color = e.target.style.color !== "red" ? "red" : "black" }
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
