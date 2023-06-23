// map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [55.766148, 37.630216],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: []
  });

  myMap.behaviors.disable('scrollZoom');

  // Создание геообъекта с типом точка (метка).

  const myPlacemark = new ymaps.Placemark([55.768706, 37.639216], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [20, 20]
  })

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);

  // Открытие меню по нажатию на метку

  myMap.geoObjects.events.add('click', () => {
    menu.classList.add('open')
  })
}

// contacts menu

const menuBtn = document.getElementById('contacts__btn')
const menu = document.getElementById('contacts__menu')

menuBtn.addEventListener('click', () => {
  menu.classList.remove('open')
})

// header search

const searchBtn = document.getElementById('search-btn')
const searchForm = document.getElementById('search-form')
const closeForm = document.getElementById('close-form')

searchBtn.addEventListener('click', () => {
  searchForm.classList.add('open')
})

closeForm.addEventListener('click', () => {
  searchForm.classList.remove('open')
})

// header burger

const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.burger-list')
const closeMenu = document.querySelector('.burger-list__btn')

burger.addEventListener('click', () => {
  burgerMenu.classList.add('burger-list--open')
})

closeMenu.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-list--open')
})

// just validate

const aboutValidator = new JustValidate('#aboutForm');

aboutValidator.addField(document.querySelector('#aboutInput'), [
  {
    rule: 'required',
  },
  {
    rule: 'email'
  },
])

const contactsValidator = new JustValidate('#contactsForm');

contactsValidator.addField(document.querySelector('#nameInput'), [
  {
    rule: 'required',
  },
  {
    rule: 'minLength',
    value: 2,
  },
])

contactsValidator.addField(document.querySelector('#emailInput'), [
  {
    rule: 'required',
  },
  {
    rule: 'email'
  },
])
