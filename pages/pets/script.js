const pets = [
  {
    "name": "Jennifer",
    "img": "/shelter/assets/images/jennifer.png",
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
    "img": "/shelter/assets/images/sophia.jpeg",
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
    "img": "/shelter/assets/images/woody.png",
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
    "img": "/shelter/assets/images/scarlet.png",
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
    "img": "/shelter/assets/images/katrine.png",
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
    "img": "/shelter/assets/images/timmy.png",
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
    "img": "/shelter/assets/images/freddie.png",
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
    "img": "/shelter/assets/images/charly.jpeg",
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

const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const menuFilter = document.querySelector('.menu-filter');
const navLink = document.querySelectorAll('.nav__link');
const navList = document.querySelector('.nav__list');
// const headerArea = document.querySelector('.our-header');

// Hamburger Menu

hamburgerIcon.addEventListener('click', openMenu);
menuFilter.addEventListener('click', openMenu);
// navLink.forEach(e => e.addEventListener('click', openMenu));
navList.addEventListener('click', openMenu);
// headerArea.addEventListener('click', closeMenu);

function openMenu() {
  navMenu.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
  document.body.classList.toggle('lock');
  menuFilter.classList.toggle('menu-filter_open');
}

function closeMenu() {
  navMenu.classList.remove('open');
  hamburgerIcon.classList.remove('open');
  document.body.classList.remove('lock');
  menuFilter.classList.remove('menu-filter_open');
}


window.onload = function() {
  nextPageBtn.addEventListener('click', generateNextPage);
  lastPageBtn.addEventListener('click', generateLastPage);

  renderGallery(1);
}

// Pagination
const petsGallery = document.querySelector('.cards__container');
const pageBtn = document.querySelector('.current-page-btn');
const firstPageBtn = document.querySelector('.first-page-btn');
const prevPageBtn = document.querySelector('.prev-page-btn');
const nextPageBtn = document.querySelector('.next-page-btn');
const lastPageBtn = document.querySelector('.last-page-btn');

const randomIndexArray = [];
let page = 1;

const renderGallery = (page) => {
  pageBtn.textContent = page;
  changeBtnsStatus(page);

  const cardsPerPage = getCardsPerPage();
  const randomIndexes = generateDataIndexes(cardsPerPage);

  let result = '';

  for(let i = 0; i < cardsPerPage; i++) {
    result += `<div class="pets-gallery-card" data-id="${pets[randomIndexes[page - 1][i]].id}" onclick="cardClicked(event)">
      <img src="${pets[randomIndexes[page - 1][i]].img}" alt="pet" class="pets-img">
      <h4 class="pet-name">${pets[randomIndexes[page - 1][i]].name}</h4>
      <button class="btn__pets">Learn more</button>
      </div>`;
  }
  petsGallery.innerHTML = '';
  petsGallery.innerHTML = result;

  petsGallery.classList.add('pets-cards__load');

  petsGallery.addEventListener('animationend', () => {
    petsGallery.classList.remove('pets-cards__load');
  })
};

const generateNextPage = () => {
  page++;
  renderGallery(page);
};

const generateLastPage = () => {
  page = randomIndexArray.length;
  renderGallery(page);
}

const generatePrevPage = () => {
  page--;
  renderGallery(page);
}

const generateFirstPage = () => {
  page = 1;
  renderGallery(page);
}

const changeBtnsStatus = () => {
  if(page > 1) {
    firstPageBtn.classList.replace('disabled', 'enabled');
    prevPageBtn.classList.replace('disabled', 'enabled');
    prevPageBtn.addEventListener('click', generatePrevPage);
    firstPageBtn.addEventListener('click', generateFirstPage);
  } else {
    firstPageBtn.classList.replace('enabled', 'disabled');
    prevPageBtn.classList.replace('enabled', 'disabled');
    prevPageBtn.removeEventListener('click', generatePrevPage);
    firstPageBtn.removeEventListener('click', generateFirstPage);
  }

  if(page === randomIndexArray.length) {
    nextPageBtn.classList.replace('enabled', 'disabled');
    lastPageBtn.classList.replace('enabled', 'disabled');
    nextPageBtn.removeEventListener('click', generateNextPage);
    lastPageBtn.removeEventListener('click', generateLastPage);
  } else {
    nextPageBtn.addEventListener('click', generateNextPage);
    lastPageBtn.addEventListener('click', generateLastPage);
    nextPageBtn.classList.replace('disabled', 'enabled');
    lastPageBtn.classList.replace('disabled', 'enabled');
  }
}

const getCardsPerPage = () => {
  const windowWidth = window.innerWidth;
  return windowWidth < 768 ? 3 : windowWidth < 1280 ? 6 : 8;
};

const generateDataIndexes = (cardsPerPage) => {
  let randomIndexPartlyArray = [];

  do {
    const randomIndex = Math.floor(Math.random() * pets.length);
    if(randomIndexPartlyArray.includes(randomIndex)) continue;
    randomIndexPartlyArray.push(randomIndex);

    if(randomIndexPartlyArray.length === cardsPerPage) {
      randomIndexArray.push(randomIndexPartlyArray);
      randomIndexPartlyArray = [];
    }
  } while (randomIndexArray.length < (48/cardsPerPage));

  return randomIndexArray;
};

// Pop up

const body = document.querySelector('body');
const cards = document.querySelectorAll('.pets-gallery-card');
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
  modalWindow.style.display = 'none';
  modalWindowContent.style.display = 'none';
  body.style.overflowY = 'auto';
}