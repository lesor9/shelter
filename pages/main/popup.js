let petsList = [
    {
      "name": "Jennifer",
      "img": "./assets/images/jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "./assets/images/sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "./assets/images/woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "./assets/images/scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "./assets/images/katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "./assets/images/timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "./assets/images/freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "./assets/images/charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

// console.log(petsList);

setTimeout(() => {
    const petsBtns = document.getElementsByClassName('pet-card');
    console.log(petsBtns);

    for (let key = 0; key < petsBtns.length; key++) {
        petsBtns[key].addEventListener("click", (e) => {
            body.classList.add("overlay"); 
            body.classList.add("overflow-hidden");


            let petName = e.target.closest(".pet-card").children[0].children[1].innerText;
            var popupDiv = document.querySelector(".popup");

            petsList.forEach(e => {
                if (e["name"] === petName) {
                    console.log(e["name"]);
                    let str = '';
                    

                    str += `<div class="popup__wrapper">`;
                    str += `<img src="./assets/modal_close_button.png" alt="dsa" class="popup__button-img"></img>`;
                    str += `<div class="popup__content">`;
                    str += `<img src=${e["img"]} alt="img" class="popup__dog">`;
                    str += `<div class="popup__deskr">`;
                    str += `<div class = "name-type">`;
                    str += `<span class="popup__name">${e['name']}</span>`;
                    str += `<span class="popup__type">${e['type']} - ${e['breed']}</span>`;
                    str += `</div>`;
                    str += `<span class="popup__who-desk">${e['description']}<span>`;
                    str += `<ul class="popup-lines">`;
                    str += `<li class="popup-line"><span class="popup-line-solid">Age:</span> ${e[`age`]}</li>`;
                    str += `<li class="popup-line"><span class="popup-line-solid">Inoculations:</span> ${[...e['inoculations']]}</li>`;
                    str += `<li class="popup-line"><span class="popup-line-solid">Diseases:</span> ${[...e['diseases']]}</li>`;
                    str += `<li class="popup-line"><span class="popup-line-solid">Parasites:</span> ${[...e['parasites']]}</li>`;
                    str += `</ul>`;
                    str += `</div>`;
                    str += `</div>`;
                    str += `</div>`;

                    popupDiv.innerHTML += str;
                    
                }    
            });


            const closeBtn = document.querySelector(".popup__button-img")
            closeBtn.addEventListener('click', () => {
                body.classList.remove("overlay"); 
                body.classList.remove("overflow-hidden");
                popupDiv.innerHTML = "";
            })

            const popBtn = document.querySelector(".popup")
            popBtn.addEventListener('click', (e) => {
                let whichClass = e.toElement.className;
                if (whichClass === "popup" || whichClass === "popup strel") {
                    body.classList.remove("overlay"); 
                    body.classList.remove("overflow-hidden");
                    popupDiv.innerHTML = "";
                } else return;
            })

            const popWrapper = document.querySelector(".popup");
            popWrapper.addEventListener ('mouseover', (e) => {
                    if (e.toElement.className == 'popup' || e.toElement.className == 'popup strel') {
                        popBtn.classList.add("strel");
                    } else {
                        popBtn.classList.remove("strel");
                    }   
                
                console.log(e.toElement.className);
            }) 

        });
    }

}, 2000);



{/* <div class="popup">
        <div class="popup__wrapper">
            <div class="popup__button-img"></div>

            <div class="popup__content">
                <img src="./assets/images/charly.png" alt="img" class="popup__dog">
                
                <div class="popup__deskr">
                    <div class = "name-type">
                        <span class="popup__name">Jennifer</span>
                        <span class="popup__type">Dog - Labrador</span>
                    </div>
                    
                    <span class="popup__who-desk">Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.</span>                    
                    
                    <ul class="popup-lines">
                        <li class="popup-line"><span class="popup-line-solid">Age:</span> 2 months</li>
                        <li class="popup-line"><span class="popup-line-solid">Inoculations:</span> none</li>
                        <li class="popup-line"><span class="popup-line-solid">Diseases:</span> none</li>
                        <li class="popup-line"><span class="popup-line-solid">Parasites:</span> none</li>
                    </ul>
                </div>
            </div>
        </div>
    </div> */}