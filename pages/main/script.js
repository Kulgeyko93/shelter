


const burger = document.querySelector('.burger')
const menu__nav__burger = document.querySelector('.menu__nav')


function changeActiveClassBurger (e) {
  const activeBurger = document.querySelector('.activeBurger');
  const header__main = document.querySelector('.header__main');
  menu__nav__burger.classList.toggle('activeBurger');
  // burger.style.transform += 'rotate(90deg)';
  // burger.style.transition += 'all 1s';

}


burger.addEventListener('click',changeActiveClassBurger);


// POPUP
const animal_cat = document.querySelector('.animal-cat');
const animal_dog = document.querySelector('.animal-dog');
const animal_dog2 = document.querySelector('.animal-dog2');
const popup = document.querySelector('.popup');
const popup_close = document.querySelector('.popup__close');
const popup_container = document.querySelector('.popup__container');

function modalOpen(e){

  return async function fetchAsync () {

    const response = await  fetch('./json/json.json');
    const data = await response.json()
    let dataAnimalNumber;
    let namePetsList = [];

    for (let item in data) {
      namePetsList.push(data[item].name.toLowerCase())
    }
    if (e === animal_cat ) {
      dataAnimalNumber = document.querySelector(`.animal-cat .animal__name`)
                            .getAttribute('data-name');
    }
    if (e === animal_dog) {
      dataAnimalNumber = document.querySelector(`.animal-dog .animal__name`)
      .getAttribute('data-name');

    }
    if (e === animal_dog2) {
      dataAnimalNumber = document.querySelector(`.animal-dog2 .animal__name`)
      .getAttribute('data-name')
    }



    let dataPetsNumber = namePetsList.indexOf(dataAnimalNumber.toLowerCase());
    popup.innerHTML = `
    <div class="popup__body">
				<div class="popup__container">
					<div class="popup__image">
						<img src=${data[dataPetsNumber].img} alt="pets">
					</div>
					<div class="popup__content">

						<div class="content__animalName">
							<div class="content__name"><h3>${data[dataPetsNumber].name}</h3></div>
							<div class="content__animal"><h4>${data[dataPetsNumber].type} - ${data[dataPetsNumber].breed}</h4></div>						
						</div>

						<div class="content__info"><h5>
            ${data[dataPetsNumber].description}
						</h5></div>

						<ul class="content__subInfo">
							<li class="subInfo__age">
								<h5><span><b>Age:</b> ${data[dataPetsNumber].age}</span></h5>
							</li>
							<li class="subInfo__inoculations">
								<h5><span><b>Inoculations:</b> ${data[dataPetsNumber].inoculations.join(', ')}</span></h5>
							</li>
							<li class="subInfo__diseases">
								<h5><span><b>Diseases:</b> ${data[dataPetsNumber].diseases.join(', ')}</span></h5>
							</li>
							<li class="subInfo__parasites">
								<h5><span><b>Parasites:</b> ${data[dataPetsNumber].parasites.join(', ')}</span></h5>
							</li>
						</ul>
						<div class="popup__close">
							<img src="./../../assets/close.png" alt="close">
						</div>
					</div>
			
				</div>
			</div>
    `
    popup.classList.add('open');
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
    
  }




}


function modalClose() {
  popup.classList.remove('open');
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
}


animal_cat.addEventListener('click', (e) => modalOpen(e.currentTarget)());
animal_dog.addEventListener('click', (e) => modalOpen(e.currentTarget)());
animal_dog2.addEventListener('click', (e) => modalOpen(e.currentTarget)());




popup.addEventListener('click', (e) => {
  if (document.querySelector('.popup__close') === e.target) {
    return modalClose()
  }
});





// SLIDER
const rightShooter = document.querySelector('.rightShooter');
const leftShooter = document.querySelector('.leftShooter');


  function slider() {

    return async function fetchAsync () {
      const response = await  fetch('./json/json.json');
      const data = await response.json()

      let pull = [0, 1, 2, 3, 4, 5, 6, 7];
      let randomPets1,randomPets2,randomPets3;
      randomPets1 = Math.floor( Math.random() * pull.length) 

      randomPets2 = Math.floor( Math.random() * pull.length)
      while (randomPets1 === randomPets2){
        randomPets2 = Math.floor( Math.random() * pull.length)
      } 
      randomPets3 = Math.floor( Math.random() * pull.length) 
      while (randomPets1 === randomPets3 || randomPets2 === randomPets3){
        randomPets3 = Math.floor( Math.random() * pull.length)
      } 

      animal_cat.innerHTML = `
          <div class="animal__img">
            <img src=${data[randomPets1].img} alt="${data[randomPets1].name}">
          </div>
          <div class="animal__name" data-name='${data[randomPets1].name}'>${data[randomPets1].name}</div>
          <button class="learnMore">
            Learn more
          </button>
      `
      animal_dog.innerHTML = `
          <div class="animal__img">
            <img src=${data[randomPets2].img} alt=${data[randomPets2].name}>
          </div>
          <div class="animal__name" data-name='${data[randomPets2].name}'>${data[randomPets2].name}</div>
          <button class="learnMore">
            Learn more
          </button>
      `
      animal_dog2.innerHTML = `
          <div class="animal__img">
            <img src=${data[randomPets3].img} alt=${data[randomPets3].name}>
          </div>
          <div class="animal__name" data-name='${data[randomPets3].name}'>${data[randomPets3].name}</div>
          <button class="learnMore">
            Learn more
          </button>
    `
    }
  }

  rightShooter.addEventListener('click',slider());
  leftShooter.addEventListener('click',slider());

  popup.addEventListener('click', (e) =>{
    if (e.target === document.querySelector('.popup__container'))   {
      return modalClose()
    }

  })

console.log(popup_container)
// document.body.addEventListener('click',e => {
//   console.log(e.target)
// })

