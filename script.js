// LocomotiveScroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// To show and hide images when hovering over list 

function page4Animation(){
    const elemC = document.querySelector("#elem-container");
const fixedImg = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", ()=>{
    fixedImg.style.display = "block";
});
elemC.addEventListener("mouseleave", ()=>{
    fixedImg.style.display = "none"; 
});

// To show images when hovering over list according to each button

let elements = document.querySelectorAll(".elem"); 
elements.forEach(element => {
    element.addEventListener("mouseenter", ()=>{
        let image = element.getAttribute("data-img");
        fixedImg.style.backgroundImage = `url(${image})`;
    })
});
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}
function menuAnimation(){
    const menu = document.querySelector("nav h3");
const full = document.querySelector("#full-screen");
const navImg = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click", ()=>{
    if(flag == 0){
        full.style.top = 0;
        navImg.style.opacity = 0;
        flag = 1;
    }else{
        full.style.top = "-100%";
        navImg.style.opacity = 1;
        flag = 0;
    }

});
}



menuAnimation();
swiperAnimation();
page4Animation();


let loader = document.querySelector("#loader");
setTimeout(()=>{
    loader.style.top = "-100%"
},4000);
