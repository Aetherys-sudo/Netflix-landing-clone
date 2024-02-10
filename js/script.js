const questions = [...document.querySelectorAll(".question")];

questions.forEach((x) => {
    x.addEventListener("click", function(e) {
        x.nextElementSibling.classList.toggle("active");
        x.children[1].classList.toggle("rotate");
    });
    
});

