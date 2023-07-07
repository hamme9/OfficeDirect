window.addEventListener('DOMContentLoaded', () => {
//header spisok
const selectHeader = document.querySelector('.select__header');
const selectBody = document.querySelector('.select__body');
const selectItem = document.querySelectorAll('.select__item');
const selectSpan = document.querySelector('.select__title');
const selectImg = document.querySelector('.select__header img');

selectHeader.addEventListener('click', () => {

    if (selectBody.classList.contains('select__body--active')) {
        selectBody.classList.remove('select__body--active');
        selectImg.style.transform = 'rotate(0deg)';
        selectBody.style.maxHeight = null;
    }else{
        selectBody.classList.add('select__body--active');
        selectImg.style.transform = 'rotate(180deg)';
        selectBody.style.maxHeight = selectBody.scrollHeight + 'px';
    }
});

selectItem.forEach((item, i) => {
    item.addEventListener ('click', () => {
        selectSpan.textContent = item.textContent;
        selectBody.classList.remove('select__body--active');
        selectImg.style.transform = 'rotate(0deg)';
        selectBody.style.maxHeight = null;
    });
})

//maps

let flag = 0;

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let mapOffset = document.querySelector('.map').offsetTop;

    if ((scrollY >= mapOffset - 300) && (flag == 0)) {
         
    let center = [55.61044237811829,37.494683374332915];
    let ballon1 = [55.56044237811829,37.494683374332915];
    let ballon2 = [55.61044237811829,37.624683374332915];
    let ballon3 = [55.61644237811829,37.294683374332915];

    function init() {
        let map = new ymaps.Map('map-element', {
        center: center,
        zoom: 11
        });

        let myPlacemark = new ymaps.Placemark(ballon1, {
            balloonContent: `
            <style>
                .ballon1 {
                padding: 0.5rem 1.5rem 1.5rem 1.5rem;
                border: 0.1rem solid #d6e9c6;
                border-radius: 0.4rem;
                }
                .ballon1-place {
                    color: #2B3350;
                }
                b {
                    line-height: 3.5rem;
                    font-size: 2rem;
                }
            </style>
            <div class="ballon1" style="text-align:center;">
            <b>Магазин1</b>
            <br/>
            <span class="ballon1-place">Адрес:</span> ул. Пушкина, 1018
            <br/>
            <span class="ballon1-place">Режим работы:</span> с 8:00 до 20:00
            </div>
            `
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/vector.svg',
            iconImageSize: [70, 100],
            iconImageOffset: [-35, -100],
        });

        let myPlacemark1 = new ymaps.Placemark(ballon2, {
            balloonContent: `
            <style>
                .ballon1 {
                padding: 0.5rem 1.5rem 1.5rem 1.5rem;
                border: 0.1rem solid #d6e9c6;
                border-radius: 0.4rem;
                }
                .ballon1-place {
                    color: #2B3350;
                }
                b {
                    line-height: 3.5rem;
                    font-size: 2rem;
                }
            </style>
            <div class="ballon1" style="text-align:center;">
            <b>Магазин2</b>
            <br/>
            <span class="ballon1-place">Адрес:</span> ул. Балоновская, 9918
            <br/>
            <span class="ballon1-place">Режим работы:</span> с 10:00 до 22:00
            </div>
            `
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/vector.svg',
            iconImageSize: [70, 100],
            iconImageOffset: [-35, -100],
        });

        let myPlacemark2 = new ymaps.Placemark(ballon3, {
            balloonContent: `
            <style>
                .ballon1 {
                padding: 0.5rem 1.5rem 1.5rem 1.5rem;
                border: 0.1rem solid #d6e9c6;
                border-radius: 0.4rem;
                }
                .ballon1-place {
                    color: #2B3350;
                }
                b {
                    line-height: 3.5rem;
                    font-size: 2rem;
                }
            </style>
            <div class="ballon1" style="text-align:center;">
            <b>Магазин3</b>
            <br/>
            <span class="ballon1-place">Адрес:</span> ул. Программная, 101001
            <br/>
            <span class="ballon1-place">Режим работы:</span> с 00:00 до 11:11
            </div>
            `
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map/vector.svg',
            iconImageSize: [70, 100],
            iconImageOffset: [-35, -100],
        });

    
        let playsmark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map/vector.svg',
        iconImageSize: [70, 100],
        iconImageOffset: [-30, -100]
        });

        map.controls.remove('geolocationControl'); // удаляем геолокацию
        map.controls.remove('searchControl'); // удаляем поиск
        map.controls.remove('trafficControl'); // удаляем контроль трафика
        map.controls.remove('typeSelector'); // удаляем тип
        map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl'); // удаляем контрол зуммирования
        map.controls.remove('rulerControl'); // удаляем контрол правил
        map.behaviors.disable(['scrollZoom']); // отключаем скролл карты

        map.geoObjects.add(myPlacemark);
        map.geoObjects.add(myPlacemark1);
        map.geoObjects.add(myPlacemark2);
        map.geoObjects.add(playsmark);
    }
    
    ymaps.ready(init);
    flag = 1;

    }
    
});

//mobile-menu

const headerMobile = document.querySelector('.header__mobile');
const burger = document.querySelector('.header__burger');
const union = document.querySelector('.header__union');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    headerMobile.classList.toggle('active');
    burger.style.display = 'none';
    union.style.display = 'block';
    body.classList.add('noscroll');
});

union.addEventListener('click', () => {
    headerMobile.classList.toggle('active');
    burger.style.display = 'block';
    union.style.display = 'none';
    body.classList.remove('noscroll');
});

//modal window

const modal = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.button-modal');


modalButtons.forEach((item) => {
    item.addEventListener('click', () => {
        modal.classList.add('active');
        body.classList.add('noscroll');
    });
});

modal.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    if (!isModal) {
        modal.classList.remove('active');

        if (!modal.classList.contains('active') && !headerMobile.classList.contains('active')) {
            body.classList.remove('noscroll');
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');

        if (!modal.classList.contains('active') && !headerMobile.classList.contains('active')) {
            body.classList.remove('noscroll');
        }
    }
});

//slider 




const swiper = new Swiper('.slider', {
    loop: true,
    pagination: {
      clickable: true,
      el: '.slider__pagination',
    },
    navigation: {
      nextEl: '.slider__arrow-right',
      prevEl: '.slider__arrow-left',
    }
  });

  const uniqueSwiper = new Swiper('.unique__slider', {
    loop: true,
    pagination: {
        clickable: true,
        el: '.unique__pagination',
      },
    spaceBetween: 6,
    // centeredSlides: true,
    // slidesOffsetBefore: 15,
    // slidesOffsetAfter: 500,
  });

// iform send + validation

const form = document.querySelector('.form__elements');

let formError = document.querySelector('.form__error');

const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form__elements');

validation
  .addField('#name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: 'Слишком короткое имя'
  },
  {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком длинное имя'
  },
  {
      rule: 'required',
      value: true,
      errorMessage: 'Введите имя'
  }
  ])
  .addField('#telephone', [{
    rule: 'required',
    value: true,
    errorMessage: 'Введите номер телефона'
  },
  {
      rule: 'function',
      validator: function () {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10
      },
      errorMessage: 'Введите корректный номер телефона'
  }
]).onSuccess((e) => {
    if (document.querySelector('#check').checked){
        const sendForm = (data) => {
            return fetch('mail.php', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }).then(res => res.json());
        };
        // form.addEventListener('submit', (e) => {
        //     e.preventDefault();
        
            const dataForm = new FormData(e.target);
            const user = {};
        
            dataForm.forEach((val, key) => {
              user[key] = val;
            });
            
            formError.classList.remove('form__error--active');


            msg = 'Сообщение отправлено, ожидайте звонка оператора';
            document.getElementById("form__alarmmsg").innerHTML = msg;

            setTimeout(function(){
                document.getElementById("form__alarmmsg").innerHTML = '';
            }, 5000);

            
            sendForm(user).then(data => {
                console.log("Письмо успешно ушло!");
            });
        
            e.target.reset();
        } else {
            formError.classList.add('form__error--active');
        }
    
    });





//facts

let accardion = document.querySelector('.facts__items');
let tab = document.querySelectorAll('.facts__item');
let answer = document.querySelectorAll('.facts__answer');
let plus = document.querySelectorAll('.facts__plus');
let minus = document.querySelectorAll('.facts__minus');

accardion.addEventListener('click', (e) => {
    const target = e.target.closest('.facts__item');
    if (target) {
        tab.forEach((item, i) => {
            if (item === target && tab[i].classList.contains('facts__item--active')) {
                answer[i].classList.remove('active');
                tab[i].classList.remove('facts__item--active');
                plus[i].style.display = 'flex';
                minus[i].style.display = 'none';
            } else if (item === target) {
                answer[i].classList.add('active');
                tab[i].classList.add('facts__item--active');
                plus[i].style.display = 'none';
                minus[i].style.display = 'flex';
            } 
            else {
                answer[i].classList.remove('active');
                tab[i].classList.remove('facts__item--active');
                plus[i].style.display = 'flex';
                minus[i].style.display = 'none';
            }
        });
    }

});

//unique

let unique = document.querySelector('.unique__items1');
let uniqueTitle = document.querySelectorAll('.unique__title');
let uniqueText = document.querySelectorAll('.unique__text');
let knop = document.querySelectorAll('.unique__trigger')
let white = document.querySelectorAll('.unique__on');
let green = document.querySelectorAll('.unique__off');

unique.addEventListener('click', (e) => {
    const trig = e.target.closest('.unique__trigger');

    if (trig) {
        knop.forEach((item, i) => {
            if (item === trig) {
                uniqueTitle[i].classList.add('unique__title--active');
                uniqueText[i].classList.add('unique__text--active');
                white[i].style.display = 'flex';
                green[i].style.display = 'none';
            } else {
                uniqueTitle[i].classList.remove('unique__title--active');
                uniqueText[i].classList.remove('unique__text--active');
                white[i].style.display = 'none';
                green[i].style.display = 'flex';
            }
        });
    }

});

let unique2 = document.querySelector('.unique__items2');
let uniqueTitle2 = document.querySelectorAll('.unique__title');
let uniqueText2 = document.querySelectorAll('.unique__text');
let knop2 = document.querySelectorAll('.unique__trigger')
let white2 = document.querySelectorAll('.unique__on');
let green2 = document.querySelectorAll('.unique__off');

unique2.addEventListener('click', (e) => {
    const trig2 = e.target.closest('.unique__trigger');

    if (trig2) {
        knop2.forEach((item, i) => {
            if (item === trig2) {
                uniqueTitle2[i].classList.add('unique__title--active');
                uniqueText2[i].classList.add('unique__text--active');
                white2[i].style.display = 'flex';
                green2[i].style.display = 'none';
            } else {
                uniqueTitle2[i].classList.remove('unique__title--active');
                uniqueText2[i].classList.remove('unique__text--active');
                white2[i].style.display = 'none';
                green2[i].style.display = 'flex';
            }
        });
    }

});

if (window.innerWidth < 768) {

    function removeAos() {
      var elem = document.getElementById('aos-css-file');
      elem.parentNode.removeChild(elem);
      return false;
    }
    removeAos();
  
  }
  
  AOS.init();

  

});
