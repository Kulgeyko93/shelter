let animal_1 = document.querySelector('.animal-1');
let animal_2 = document.querySelector('.animal-2');
let animal_3= document.querySelector('.animal-3');
let animal_4 = document.querySelector('.animal-4');
let animal_5 = document.querySelector('.animal-5');
let animal_6 = document.querySelector('.animal-6');
let animal_7 = document.querySelector('.animal-7');
let animal_8 = document.querySelector('.animal-8');




function randomPages (row, column) {

         let result =[];
         for (let i=0; i<row; i++) {
            let index;
            let rowInMatrix = [];
            for (let j=0; j<column; j++) {
               index = Math.floor(Math.random()*column);
               while (rowInMatrix.indexOf(index) !== -1){
                  index = Math.floor(Math.random()*column);
               }
               rowInMatrix.push(index);

            }
            result.push(rowInMatrix);

         }
         return result;
};

function getPage () {
   let randomArray;
   switch (true) {
      case (document.documentElement.clientWidth > 1280): {
         randomArray = randomPages (6,8);
         break
      }
      case (document.documentElement.clientWidth <= 1280 && 
            document.documentElement.clientWidth >= 768): {
         randomArray = randomPages (8,6);
         break
      }
      case (document.documentElement.clientWidth < 768): {
      randomArray = randomPages (16,3);
      break
      }
   }
   
   return randomArray;
}


// PAAGINATION

const pagination = document.querySelector('.pagination');
const doubeLeftArrow = document.querySelector('.doubeLeftArrow');
const leftArrow = document.querySelector('.leftArrow');
const currentNumber = document.querySelector('.currentNumber');
const rightArrow = document.querySelector('.rightArrow');
const doubleRightArrow = document.querySelector('.doubleRightArrow');
const firstColumnAnimal = document.querySelector('.firstColumnAnimal');


let pageAboutWidth = getPage ()

function changePage ( e ) {
   switch (true) {
      case (e.currentTarget === document.querySelector('.doubeLeftArrow') &&  currentNumber.innerText > 1 ): {
          currentNumber.innerHTML= `<h4>1</h4>` ;
          changeInfoByPets (+currentNumber.innerText - 1)();
          changeColor ()

          break
      }
      case (e.currentTarget === document.querySelector('.leftArrow') &&  currentNumber.innerText > 1 ): {
         currentNumber.innerHTML = `<h4>${currentNumber.innerText - 1}</h4>`;
         changeInfoByPets (+currentNumber.innerText - 1)();
         changeColor ()
         break

      }

      case (e.currentTarget === document.querySelector('.rightArrow') &&  currentNumber.innerText < pageAboutWidth.length ): {
         currentNumber.innerHTML = `<h4>${+currentNumber.innerText + 1}</h4>`;
         changeInfoByPets (+currentNumber.innerText - 1)();
         changeColor ()
         break

      }
      case (e.currentTarget === document.querySelector('.doubleRightArrow')  &&  currentNumber.innerText < pageAboutWidth.length): {
         currentNumber.innerHTML = `<h4>${pageAboutWidth.length}</h4>`;
         changeInfoByPets (+currentNumber.innerText - 1)();
         changeColor ()
         break
      }
   }




}

function changeColor () {
   switch (true) {
      case (+currentNumber.innerText === 1): {
         document.querySelector('.doubeLeftArrow').style.border = '2px solid #CDCDCD';
         document.querySelector('.doubeLeftArrow').style.color = '#CDCDCD';
         document.querySelector('.leftArrow').style.border = '2px solid #CDCDCD';
         document.querySelector('.leftArrow').style.color = '#CDCDCD';

         document.querySelector('.doubleRightArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.doubleRightArrow').style.color = '#F1CDB3';
         document.querySelector('.rightArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.rightArrow').style.color = '#F1CDB3';
         break
      }
      case (+currentNumber.innerText === pageAboutWidth.length): {
         document.querySelector('.doubeLeftArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.doubeLeftArrow').style.color = '#F1CDB3';
         document.querySelector('.leftArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.leftArrow').style.color = '#F1CDB3';

         document.querySelector('.doubleRightArrow').style.border = '2px solid #CDCDCD';
         document.querySelector('.doubleRightArrow').style.color = '#CDCDCD';
         document.querySelector('.rightArrow').style.border = '2px solid #CDCDCD';
         document.querySelector('.rightArrow').style.color = '#CDCDCD';


         

         break
      }
      case (+currentNumber.innerText > 1 && +currentNumber.innerText < pageAboutWidth.length): {
         document.querySelector('.doubeLeftArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.doubeLeftArrow').style.color = '#F1CDB3';
         document.querySelector('.leftArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.leftArrow').style.color = '#F1CDB3';

         document.querySelector('.doubleRightArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.doubleRightArrow').style.color = '#F1CDB3';
         document.querySelector('.rightArrow').style.border = '2px solid #F1CDB3';
         document.querySelector('.rightArrow').style.color = '#F1CDB3';
      }
   }
}

function changeInfoByPets (pages) {

   return async function fetchAsync () {
      const response = await  fetch('./json/json.json');
      const data = await response.json();

      // const firstColumnAnimal = document.querySelector('.firstColumnAnimal');
      switch (pageAboutWidth.length) {
         case (6): {
            animal_1.innerHTML= `

                  <div class="animal__img">
                     <img src=${data[pageAboutWidth[pages][0]].img} alt="${data[pageAboutWidth[pages][0]].name}">
                  </div>
                  <div class="animal__name" data-name='${data[pageAboutWidth[pages][0]].name.toLowerCase()}'>${data[pageAboutWidth[pages][0]].name}</div>
                  <button class="learnMore">
                     Learn more
                  </button>

            `
            animal_2.innerHTML= `
               <div class="animal__img">
                <img src=${data[pageAboutWidth[pages][1]].img} alt="${data[pageAboutWidth[pages][1]].name}">
               </div>
               <div class="animal__name" data-name='${data[pageAboutWidth[pages][1]].name.toLowerCase()}'>${data[pageAboutWidth[pages][1]].name}</div>
               <button class="learnMore">
                 Learn more
               </button>
            `
            animal_3.innerHTML = `
            <div class="animal__img">
              <img src=${data[pageAboutWidth[pages][2]].img} alt="${data[pageAboutWidth[pages][2]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][2]].name.toLowerCase()}'>${data[pageAboutWidth[pages][2]].name}</div>
            <button class="learnMore">
               Learn more
            </button>            
            `
            animal_4.innerHTML = `
            <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][3]].img} alt="${data[pageAboutWidth[pages][3]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][3]].name.toLowerCase()}'>${data[pageAboutWidth[pages][3]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `
            animal_5.innerHTML = `
            <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][4]].img} alt="${data[pageAboutWidth[pages][4]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][4]].name.toLowerCase()}'>${data[pageAboutWidth[pages][4]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `

            animal_6.innerHTML = `
            <div class="animal__img">
              <img src=${data[pageAboutWidth[pages][5]].img} alt="${data[pageAboutWidth[pages][5]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][5]].name.toLowerCase()}'>${data[pageAboutWidth[pages][5]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `
            animal_7.innerHTML = `
            <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][6]].img} alt="${data[pageAboutWidth[pages][6]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][6]].name.toLowerCase()}'>${data[pageAboutWidth[pages][6]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `
            animal_8.innerHTML = `
            <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][7]].img} alt="${data[pageAboutWidth[pages][7]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][7]].name.toLowerCase()}'>${data[pageAboutWidth[pages][7]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `
         break
         }
         case (8): {
            animal_1.innerHTML= `

                  <div class="animal__img">
                     <img src=${data[pageAboutWidth[pages][0]].img} alt="${data[pageAboutWidth[pages][0]].name}">
                  </div>
                  <div class="animal__name" data-name='${data[pageAboutWidth[pages][0]].name.toLowerCase()}'>${data[pageAboutWidth[pages][0]].name}</div>
                  <button class="learnMore">
                     Learn more
                  </button>

            `
            animal_2.innerHTML= `
               <div class="animal__img">
                <img src=${data[pageAboutWidth[pages][1]].img} alt="${data[pageAboutWidth[pages][1]].name}">
               </div>
               <div class="animal__name" data-name='${data[pageAboutWidth[pages][1]].name.toLowerCase()}'>${data[pageAboutWidth[pages][1]].name}</div>
               <button class="learnMore">
                 Learn more
               </button>
            `
            animal_3.innerHTML = `
            <div class="animal__img">
              <img src=${data[pageAboutWidth[pages][2]].img} alt="${data[pageAboutWidth[pages][2]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][2]].name.toLowerCase()}'>${data[pageAboutWidth[pages][2]].name}</div>
            <button class="learnMore">
               Learn more
            </button>            
            `
            animal_4.innerHTML = `
            <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][3]].img} alt="${data[pageAboutWidth[pages][3]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][3]].name.toLowerCase()}'>${data[pageAboutWidth[pages][3]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `
            animal_5.innerHTML = `
            <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][4]].img} alt="${data[pageAboutWidth[pages][4]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][4]].name.toLowerCase()}'>${data[pageAboutWidth[pages][4]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `

            animal_6.innerHTML = `
            <div class="animal__img">
              <img src=${data[pageAboutWidth[pages][5]].img} alt="${data[pageAboutWidth[pages][5]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][5]].name.toLowerCase()}'>${data[pageAboutWidth[pages][5]].name}</div>
            <button class="learnMore">
               Learn more
            </button>
            `            
         break
         }
         case (16): {
            animal_1.innerHTML= `

            <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][0]].img} alt="${data[pageAboutWidth[pages][0]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][0]].name.toLowerCase()}'>${data[pageAboutWidth[pages][0]].name}</div>
            <button class="learnMore">
               Learn more
            </button>

            `
            animal_2.innerHTML= `
               <div class="animal__img">
               <img src=${data[pageAboutWidth[pages][1]].img} alt="${data[pageAboutWidth[pages][1]].name}">
               </div>
               <div class="animal__name" data-name='${data[pageAboutWidth[pages][1]].name.toLowerCase()}'>${data[pageAboutWidth[pages][1]].name}</div>
               <button class="learnMore">
               Learn more
               </button>
            `
            animal_3.innerHTML = `
            <div class="animal__img">
            <img src=${data[pageAboutWidth[pages][2]].img} alt="${data[pageAboutWidth[pages][2]].name}">
            </div>
            <div class="animal__name" data-name='${data[pageAboutWidth[pages][2]].name.toLowerCase()}'>${data[pageAboutWidth[pages][2]].name}</div>
            <button class="learnMore">
               Learn more
            </button>            
            `

         break
         }
      }



   }
}

// changeInfoByPets (0)();

doubeLeftArrow.addEventListener('click', (e) => {
  return changePage (e)
})
leftArrow.addEventListener('click', (e) => {
  return changePage (e)
})
rightArrow.addEventListener('click', (e) => {
  return changePage (e)
})
doubleRightArrow.addEventListener('click', (e) => {
  return changePage (e)
})


// POPUP


const popup = document.querySelector('.popup');
const popup_close = document.querySelector('.popup__close');
const popup_container = document.querySelector('.popup__container');

// function modalOpen (e){
//    return console.log(e)
// }


function modalOpen(e){

  return async function fetchAsync () {

   const response = await  fetch('./json/json.json');
   const data = await response.json()
   let dataAnimalNumber;
   let namePetsList = [];

   for (let item in data) {
     namePetsList.push(data[item].name.toLowerCase())
   }

   switch (true) {
   case (e === animal_1): {
      dataAnimalNumber = document.querySelector(`.animal-1 .animal__name`)
      .getAttribute('data-name');
      
      break
   }
   case (e === animal_2): {
      dataAnimalNumber = document.querySelector(`.animal-2 .animal__name`)
      .getAttribute('data-name');
      break
   }
   case (e === animal_3): {
      dataAnimalNumber = document.querySelector(`.animal-3 .animal__name`)
      .getAttribute('data-name');
      break
   }
   case (e === animal_4): {
      dataAnimalNumber = document.querySelector(`.animal-4 .animal__name`)
      .getAttribute('data-name');
      break
   }
   case (e === animal_5): {
      dataAnimalNumber = document.querySelector(`.animal-5 .animal__name`)
      .getAttribute('data-name');
      break
   }      case (e === animal_6): {
      dataAnimalNumber = document.querySelector(`.animal-6 .animal__name`)
      .getAttribute('data-name');
      break
   }
   case (e === animal_7): {
      dataAnimalNumber = document.querySelector(`.animal-7 .animal__name`)
      .getAttribute('data-name');
      break
   }
   case (e === animal_8): {
      dataAnimalNumber = document.querySelector(`.animal-8 .animal__name`)
      .getAttribute('data-name');
      break
   }
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

// console.log(true)

function modalClose() {
  popup.classList.remove('open');
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
}
animal_1.style.transitionDuration='2s';

animal_1.addEventListener('click', (e) => modalOpen(e.currentTarget)());
document.querySelector('.animal-2').addEventListener('click', (e) => modalOpen(e.currentTarget)());
document.querySelector('.animal-3').addEventListener('click', (e) => modalOpen(e.currentTarget)());
document.querySelector('.animal-4').addEventListener('click', (e) => modalOpen(e.currentTarget)());
document.querySelector('.animal-5').addEventListener('click', (e) => modalOpen(e.currentTarget)());
document.querySelector('.animal-6').addEventListener('click', (e) => modalOpen(e.currentTarget)());
document.querySelector('.animal-7').addEventListener('click', (e) => modalOpen(e.currentTarget)());
document.querySelector('.animal-8').addEventListener('click', (e) => modalOpen(e.currentTarget)());


popup.addEventListener('click', (e) => {
  if (document.querySelector('.popup__close') === e.target) {
    return modalClose()
  }
});

  popup.addEventListener('click', (e) =>{
    if (e.target === document.querySelector('.popup__container'))   {
      return modalClose()
    }

  })


