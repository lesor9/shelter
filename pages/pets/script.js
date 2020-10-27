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



let pets = [];
let fullPetsList = []; // 48

const request = new XMLHttpRequest();
request.open('GET', './pets.json');

request.onload = () => {
    pets = JSON.parse(request.response);
    for (let i = 0; i < 6; i++) {
        const newPets = pets;
        for (let j = pets.length; j > 0; j--) {
            let randInd = Math.floor(Math.random() * j);

            let elem = newPets.splice([randInd], 1)[0];
            newPets.push(elem);
        }
        
        fullPetsList = [...fullPetsList, ...newPets];
    }

    fullPetsList = sort863(fullPetsList);
    createPets(fullPetsList);

    for (let i = 0; i < (fullPetsList.length / 6); i++) {
        const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            stepList.forEach ((item, ind) => {
                if ( item.name === stepList[j].name && (ind !== j) ) {
                    document.querySelector(".pets-cards").children[(i * 6) + j].style.border = "5px solid red";
                }
            }
            )
        }
    }
}

const createPets = (petsList) => {
    const elem = document.querySelector(".pets-cards");
    elem.innerHTML = "";
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


const sort863 = (list) => {
    let length = list.length;

    for (let i = 0; i < length / 6; i++) {
        const stepList = list.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            const duplicatedItem = stepList.find((item, ind) => {
                return item.name === stepList[j].name && (ind !== j);
            }); 
            
            if (duplicatedItem !== undefined) {
                const ind = (i * 6) + j;
                const which8ofList = Math.trunc(ind / 8);

                const elem  = list.splice(ind, 1)[0];
                list.splice(which8ofList * 8, 0, elem);

                i -= 2;
                break;
            }
        }
    }

    return list;
};


const leftArrowBtn = document.querySelector("body > section > div > nav > div > button.slider__left");
const rightArrowBtn = document.querySelector("body > section > div > nav > div > button.slider__right");




leftArrowBtn.addEventListener('click', () => {
    const howManyPg = howManyPages();
    const howManyElem = howManyEl();

    const cards = document.querySelector(".pets-cards");
    const page = document.querySelector(".slider__page-number");
    const pageNumber = page.innerHTML;

    if (pageNumber > 1 && pageNumber <= howManyPg) {
        for (let i = 0; i < howManyElem; i++) {
            const currentCard = cards.children[( (pageNumber - 2) * howManyElem) + i];
            currentCard.style.cssText = ""; 
        }
        page.innerHTML = Number(page.innerHTML) - 1;
    }

    checkNavStatus()
});


rightArrowBtn.addEventListener('click', () => {
    const howManyPg = howManyPages();
    const howManyElem = howManyEl();

    const cards = document.querySelector(".pets-cards");
    const page = document.querySelector(".slider__page-number");
    const pageNumber = page.innerHTML;
    
    if (pageNumber >= 1 && pageNumber < howManyPg) {
        for (let i = 0; i < howManyElem; i++) {
            const currentCard = cards.children[( (pageNumber - 1) * howManyElem) + i];
            currentCard.style.cssText += "display: none;"; 
        }
        page.innerHTML = Number(page.innerHTML) + 1;
    } 
    checkNavStatus();
});


// border: 2px solid #F1CDB3; active
// border: 2px solid #CDCDCD; non-active



const fullLeft = document.querySelector(".slider__full-left");
const fullRight = document.querySelector(".slider__full-right");


fullLeft.addEventListener('click', () => {
    const howManyElem = howManyEl();

    const cards = document.querySelector(".pets-cards");
    const page = document.querySelector(".slider__page-number");
    const pageNumber = page.innerHTML;

    if (pageNumber > 1) {
        for (let i = 0; i < howManyElem; i++) {
            const currentCard = cards.children[i];
            currentCard.style.cssText = ""; 
        } 

        for (let i = howManyElem; i < 48; i++) {
            const currentCard = cards.children[i];
            currentCard.style.cssText = ""; 
        } 
    }

    page.innerHTML = 1;
    checkNavStatus();
});


fullRight.addEventListener('click', () => {
    const howManyPg = howManyPages();
    const howManyElem = howManyEl();

    const cards = document.querySelector(".pets-cards");
    const page = document.querySelector(".slider__page-number");
    const pageNumber = page.innerHTML;

    if (pageNumber < howManyPg) {
        for (let i = 0; i < 48 - howManyElem; i++) {
            const currentCard = cards.children[i];
            currentCard.style.cssText = "display: none;"; 
        }

        for (let i = 48 - howManyElem; i < 48; i++) {
            const currentCard = cards.children[i];
            currentCard.style.cssText = ""; 
        }
    }

    page.innerHTML = howManyPg;
    checkNavStatus();
});



function checkNavStatus() {
    const page = document.querySelector(".slider__page-number");
    const howManyPg = howManyPages();

    if (page.innerHTML == howManyPg) {
        rightArrowBtn.style.cssText = "border: 2px solid #CDCDCD; cursor: no-drop;";
        document.querySelector(".slider__right-span").style.cssText = "color: #CDCDCD";
    } else {
        rightArrowBtn.style.cssText = "";
        document.querySelector(".slider__right-span").style.cssText = "color: #292929";
    } 

    if (page.innerHTML > 1) {
        leftArrowBtn.style.cssText = "border: 2px solid #F1CDB3; cursor: pointer;";
        document.querySelector(".slider__left-span").style.cssText = "color: #292929;";
    } else {
        leftArrowBtn.style.cssText = "";
        document.querySelector(".slider__left-span").style.cssText = "color: #CDCDCD;";
    }

    if (page.innerHTML == howManyPg) {
        fullRight.style.cssText = "border: 2px solid #CDCDCD; cursor: no-drop;";
        document.querySelector(".slider__full-right-span").style.cssText = "color: #CDCDCD;";
    } else {
        fullRight.style.cssText = "";
        document.querySelector(".slider__full-right-span").style.cssText = "color: #292929;";
    }

    if (page.innerHTML > 1) {
        fullLeft.style.cssText = "border: 2px solid #F1CDB3; cursor: pointer;";
        document.querySelector(".slider__full-left-span").style.cssText = "color: #292929;";
    } else {
        fullLeft.style.cssText = "";
        document.querySelector(".slider__full-left-span").style.cssText = "color: #CDCDCD;";
    }
}

function howManyPages () {
    const width = window.innerWidth;
    if (width >= 1280) {
        return 6;
    } else if (width >= 768) {
        return 8;
    } else return 16;
};

function howManyEl () {
    const width = window.innerWidth;
    if (width >= 1280) {
        return 8;
    } else if (width >= 768) {
        return 6;
    } else return 3;
};