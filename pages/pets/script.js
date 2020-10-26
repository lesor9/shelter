const burgerBtn = document.querySelector(".burger"),
    orangeBurgerBrn = document.querySelector(".burger-orange"),
    petsBurgerBtn = document.querySelector(".our-pets-burger"),
    overlayBtn = document.querySelector(".navigation-overlay"),
    body = document.querySelector(".body");

burgerBtn.addEventListener('click', () => {
    body.classList.toggle("change-burger");
    body.classList.toggle("overflow-hidden");
})

petsBurgerBtn.addEventListener('click', () => {
    body.classList.toggle("change-burger");
    body.classList.toggle("overflow-hidden");
})

overlayBtn.addEventListener ('click', () => {
    body.classList.toggle("change-burger");
    body.classList.toggle("overflow-hidden");   
})