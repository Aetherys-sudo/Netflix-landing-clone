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
const submitBtn = document.querySelector(".cookie-save");

cookieClick.addEventListener("click", function(e) {
    popUp.classList.toggle("active-cookie");
    popUp.classList.remove("dont-move");
    popUp.classList.add("move");
});

x.addEventListener("click", function(e) {
    popUp.classList.toggle("active-cookie");
    popUp.classList.remove("move");
    popUp.classList.add("dont-move");
});

submitBtn.addEventListener("click", function(e) {
    popUp.classList.toggle("active-cookie");
    popUp.classList.remove("move");
    popUp.classList.add("dont-move");
});

const cookieCat = [...document.querySelectorAll(".cookie-category")];
const content = [...document.querySelectorAll(".content")];
const fillers = [...document.querySelectorAll(".fillers")];


cookieCat.forEach((x, index) => {
    x.addEventListener("click", function(e) {
        x.children[0].classList.add("filler-active");
        x.classList.add("cat-active");
        cookieCat.forEach((y) => {
            if (x != y) {
                y.children[0].classList.remove("filler-active");
                y.classList.remove("cat-active");
            }
        });

        content.forEach((el, indexEl) => {
            el.classList.add("hide");
            el.classList.remove("unhide");
            if (indexEl == index) {
                el.classList.add("unhide");
                el.classList.remove("hide");
            }
        });
    });
});