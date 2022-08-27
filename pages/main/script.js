const pets = [
  {
    "name": "Jennifer",
    "img": "assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 0
  },
  {
    "name": "Sophia",
    "img": "assets/images/sophia.jpeg",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 1
  },
  {
    "name": "Woody",
    "img": "assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"],
    "id": 2
  },
  {
    "name": "Scarlett",
    "img": "assets/images/scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 3
  },
  {
    "name": "Katrine",
    "img": "assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 4
  },
  {
    "name": "Timmy",
    "img": "assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"],
    "id": 5
  },
  {
    "name": "Freddie",
    "img": "assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"],
    "id": 6
  },
  {
    "name": "Charly",
    "img": "assets/images/charly.jpeg",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"],
    "id": 7
  }
]

// Hamburger Menu

const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const menuFilter = document.querySelector('.menu-filter');
const navLink = document.querySelectorAll('.nav__link');
const navList = document.querySelector('.nav__list');

hamburgerIcon.addEventListener('click', openMenu);
menuFilter.addEventListener('click', openMenu);
// navLink.forEach(e => e.addEventListener('click', openMenu));
// navList.addEventListener('click', openMenu);

function checkOpenMenu() {
  if(hamburgerIcon.classList.contains('open')) {
    navList.addEventListener('click', openMenu);
  }
}

function openMenu() {
  navMenu.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
  document.body.classList.toggle('lock');
  menuFilter.classList.toggle('menu-filter_open');
}


// Carousel

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cards = document.querySelectorAll('.card');
const petsImages = document.querySelectorAll('.pets-img');
const cardsNames = document.querySelectorAll('.pet-name');

leftArrow.addEventListener('click', arrowClicked);
rightArrow.addEventListener('click', arrowClicked);


function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getCards() {
  const arr = [];
  while (true) {
      const randomNumber = getRandomNumber(8);
      if (arr.indexOf(randomNumber, 0) === -1) {
          arr.push(randomNumber);
      }
      if (arr.length === 3) {
          break;
      }
  }
  setCards(arr);
}
function setCards(arr) {
      cardsNames[0].textContent = pets[arr[0]].name;
      cards[0].dataset.id = arr[0];
      petsImages[0].style.backgroundImage = `url(${pets[arr[0]].img})`;
      cardsNames[1].textContent = pets[arr[1]].name;
      cards[1].dataset.id = arr[1];
      petsImages[1].style.backgroundImage = `url(${pets[arr[1]].img})`;
      cardsNames[2].textContent = pets[arr[2]].name;
      cards[2].dataset.id = arr[2];
      petsImages[2].style.backgroundImage = `url(${pets[arr[2]].img})`;
}

leftArrow.addEventListener('click', arrowClicked);
rightArrow.addEventListener('click', arrowClicked);

function arrowClicked() {
  let array = [];
  for (let i = 0; i < 3; i++) {
      array.push(+cards[i].dataset.id);
  }
  while (true) {
      const randomNumber = getRandomNumber(8);
      if (array.indexOf(randomNumber, 0) === -1) {
          array.push(randomNumber);

      }
      if (array.length === 6) {
          break;
      }
  }
  array.splice(0, 3)
  setCards(array);
}

// Pop up

const body = document.querySelector('body');
const modalWindow = document.querySelector('.modalWindow-filter');
const modalWindowContent = document.querySelector('.modalWindow-card__content');
const cross = document.querySelector('.modalWindow-button');
const modalWindowTitle = document.querySelector('.modalWindow-title');
const modalWindowSubtitle = document.querySelector('.modalWindow-subtitle');
const description = document.querySelector('.modalWindow-description');
const params = document.querySelectorAll('.modalWindow-span');
const modalWindowImage = document.querySelector('.modalWindow-image');

modalWindow.addEventListener('click', crossClicked);
cross.addEventListener('click', crossClicked);

function cardClicked(event) {
  body.style.overflowY = 'hidden';
  modalWindow.style.display = 'block';
  modalWindow.style.top = '0';
  modalWindowContent.style.display = 'flex';
  modalWindowTitle.textContent = pets[+event.currentTarget.dataset.id].name;
  modalWindowSubtitle.textContent = `${pets[+event.currentTarget.dataset.id].type} - ${pets[+event.currentTarget.dataset.id].breed}`;
  description.textContent = pets[+event.currentTarget.dataset.id].description;
  params[0].textContent = pets[+event.currentTarget.dataset.id].age;
  params[1].textContent = pets[+event.currentTarget.dataset.id].inoculations.join(', ');
  params[2].textContent = pets[+event.currentTarget.dataset.id].diseases.join(', ');
  params[3].textContent = pets[+event.currentTarget.dataset.id].parasites.join(', ');
  modalWindowImage.src = pets[+event.currentTarget.dataset.id].img;
}

function crossClicked() {
  body.style.overflowY = 'auto';
  modalWindow.style.display = 'none';
  modalWindowContent.style.display = 'none';
}