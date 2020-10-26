const burgerBtn = document.querySelector(".burger__img"),
    aboutBtn = document.querySelector(".about-burger"),
    overlayBtn = document.querySelector(".navigation-overlay");
    body = document.querySelector(".body");

burgerBtn.addEventListener('click', () => {
    body.classList.toggle("change-burger");
    body.classList.toggle("overflow-hidden");
})

aboutBtn.addEventListener('click', () => {
    body.classList.toggle("change-burger");
    body.classList.toggle("overflow-hidden");
})

overlayBtn.addEventListener ('click', () => {
    body.classList.toggle("change-burger");
    body.classList.toggle("overflow-hidden");   
})