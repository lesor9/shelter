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


let pets = [];

const request = new XMLHttpRequest();
request.open('GET', './pets.json');

request.onload = () => {
    pets = JSON.parse(request.response);
    const newPets = pets;
    for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);

        let elem = newPets.splice([randInd], 1)[0];
        newPets.push(elem);
    }

    createPets(newPets);
}

const createPets = (petsList) => {
    const elem = document.querySelector(".pets-cards");
    elem.innerHTML = "";
    elem.innerHTML += createElements(petsList);
    elem.innerHTML += createElements(petsList);
}

const createElements = (petsList) => {
    let str = "";
    for (let i = 0; i < petsList.length; i++) {

        // <div class="pet-card">
        //     <div class="pet-card__content">
        //         <img src="./assets/pets-katrine.svg" alt="katrine" class="pet-card__img">
        //         <div class="pet-card__name">Katrine</div>
        //         <button class="pet-card__button">
        //         <span class="button-text">Learn more</span>
        //         </button>
        //     </div>
        // </div>

        const currentPetObject = petsList[i];
        str += `<div class="pet-card"><div class="pet-card__content"><img src=${currentPetObject.img} alt="img" class="pet-card__img">`;
        str += `<div class="pet-card__name">${currentPetObject.name}</div>`;
        str += `<button class="pet-card__button"><span class="button-text">Learn more</span></button></div></div>`
    }

    return str;
}

request.send();



const leftArrowBtn = document.querySelector(".left-arrow");
const rightArrowBtn = document.querySelector(".right-arrow");

leftArrowBtn.addEventListener('click', () => {
    const howManyElCount = howManyEl();
    for (let i = 0; i < howManyElCount * 2 + 1; i++) {
        document.querySelector(".pets-cards").children[i].classList.add("over-card");
        document.querySelector(".pets-cards").children[i].classList.add("over-card-left");
    }

    const asd = document.querySelectorAll(".pet-card");

    const child1 = asd[asd.length -1];
    const child2 = asd[asd.length -2];
    const child3 = asd[asd.length -3];
    
    rightArrowBtn.disabled = true;
    leftArrowBtn.disabled = true;

    setTimeout(() => {
        for (let i = 0; i < howManyElCount * 2 + 1; i++) {
            document.querySelector(".pets-cards").children[i].classList.remove("over-card-left");
            document.querySelector(".pets-cards").children[i].classList.add("over-card-back");
        } 

        for (let i = 0; i < howManyElCount * 2 + 1; i++) {
            document.querySelector(".pets-cards").children[i].classList.remove("over-card");
        }

        

        if (howManyElCount === 3) {
            document.querySelector(".pets-cards").removeChild(child3);
            document.querySelector(".pets-cards").insertBefore(child3, asd[0]);
            document.querySelector(".pets-cards").removeChild(child2);
            document.querySelector(".pets-cards").insertBefore(child2, asd[0]);
            document.querySelector(".pets-cards").removeChild(child1);
            document.querySelector(".pets-cards").insertBefore(child1, asd[0]);
        } else if (howManyElCount === 2) {
            document.querySelector(".pets-cards").removeChild(child2);
            document.querySelector(".pets-cards").insertBefore(child2, asd[0]);
            document.querySelector(".pets-cards").removeChild(child1);
            document.querySelector(".pets-cards").insertBefore(child1, asd[0]);
        } else {
            document.querySelector(".pets-cards").removeChild(child1);
            document.querySelector(".pets-cards").insertBefore(child1, asd[0]);
        };
        


        for (let i = 0; i <= 9; i++) {
            document.querySelector(".pets-cards").children[i].classList.remove("over-card-back");
        }

        rightArrowBtn.disabled = false;
        leftArrowBtn.disabled = false;
    }, 1000);
    
});

rightArrowBtn.addEventListener('click', () => {
    const howManyElCount = howManyEl();
    for (let i = 2; i < 3 + 2 * howManyElCount; i++) {
        document.querySelector(".pets-cards").children[i].classList.add("over-card");
        document.querySelector(".pets-cards").children[i].classList.add("over-card-right");
    }


    const asd = document.querySelectorAll(".pet-card");
    const child1 = asd[0];
    const child2 = asd[1];
    const child3 = asd[2];

    rightArrowBtn.disabled = true;
    leftArrowBtn.disabled = true;
    
    setTimeout(() => {
        document.querySelector(".pets-cards").children[3].classList.add("over-card-back");
        document.querySelector(".pets-cards").children[4].classList.add("over-card-back");
        document.querySelector(".pets-cards").children[5].classList.add("over-card-back");


        for (let i = 0; i < 3 + 2 * howManyElCount; i++) {
            document.querySelector(".pets-cards").children[i].classList.remove("over-card-right");
            document.querySelector(".pets-cards").children[i].classList.remove("over-card");
        }
        if (howManyElCount === 3) {
            document.querySelector(".pets-cards").removeChild(child1);
            document.querySelector(".pets-cards").appendChild(child1);
            document.querySelector(".pets-cards").removeChild(child2);
            document.querySelector(".pets-cards").appendChild(child2);
            document.querySelector(".pets-cards").removeChild(child3);
            document.querySelector(".pets-cards").appendChild(child3);
        } else if (howManyElCount === 2) {
            document.querySelector(".pets-cards").removeChild(child1);
            document.querySelector(".pets-cards").appendChild(child1);
            document.querySelector(".pets-cards").removeChild(child2);
            document.querySelector(".pets-cards").appendChild(child2);
        } else {
            document.querySelector(".pets-cards").removeChild(child1);
            document.querySelector(".pets-cards").appendChild(child1);
        }
        

        for (let i = 0; i < 16; i++) {
            document.querySelector(".pets-cards").children[i].classList.remove("over-card-back");
        }

        rightArrowBtn.disabled = false;
        leftArrowBtn.disabled = false;
    }, 1000);
});

function howManyEl () {
    const width = window.innerWidth;
    if (width >= 1280) {
        return 3;
    } else if (width >= 768) {
        return 2;
    } else return 1;
};