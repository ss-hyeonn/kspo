const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(" #main_view .mySwiper", {
spaceBetween: 30,
centeredSlides: true,
autoplay: {
    delay: 2500,
    disableOnInteraction: false
},
pagination: {
    el: ".pagination",
    type: "fraction",
},
navigation: {
    nextEl: ".next",
    prevEl: ".prev"
},
on: {
    autoplayTimeLeft(s, time, progress) {
    progressCircle.style.setProperty("--progress", 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
}
});
const swiper3 = new Swiper('.sns_swiper', {
// Optional parameters

loop: true,

});
var swiper2 = new Swiper("#sns .swiper", {
effect: "cube",
grabCursor: true, loop:true,

});

swiper3.controller.control=swiper2;
swiper2.controller.control=swiper3;


var play = document.querySelector(".play");    
play.addEventListener("click", function(){
    if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        play.classList.add("pause");
    } else {
        swiper.autoplay.start();
        play.classList.remove("pause");
    }
});

     