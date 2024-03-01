const questions = [...document.querySelectorAll(".question")];

questions.forEach((x) => {
    x.addEventListener("click", function(e) {
        x.nextElementSibling.classList.toggle("active");
        x.children[1].classList.toggle("rotate");
    });
    
});

const cookieClick = document.querySelector(".cookie-click");
const popUp = document.querySelector(".cookie-window");
const x = document.querySelector(".cookie-x");

cookieClick.addEventListener("click", function(e) {
    popUp.classList.toggle("active-cookie");
    //document.body.style.background = "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(8, 8, 8, 0.8) 40%, rgba(0,0,0,0.9) 100%)";
});

x.addEventListener("click", function(e) {
    popUp.classList.toggle("active-cookie");
});