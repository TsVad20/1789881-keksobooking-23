import {minPriceOfPropertyType} from './data';

const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const adFormElements = adForm.querySelectorAll('.ad-form>fieldset');
const mapFiltersFormElements = mapFiltersForm.querySelectorAll('.map__filters>fieldset');
const titleInput = document.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const typeOfProperty = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumberSelect = adForm.querySelector('#room_number');
const capacitySelect = adForm.querySelector('#capacity');

export const activePage = function () {

  adForm.classList.remove('ad-form--disabled');

  adFormElements.forEach((element) => {
    element.disabled = false;
  });

  mapFiltersForm.classList.remove('ad-form--disabled');

  mapFiltersFormElements.forEach((element) => {
    element.disabled = false;
  });

};
export const unactivePage = function () {

  adForm.classList.add('ad-form--disabled');

  adFormElements.forEach((element) => {
    element.disabled = true;
  });

  mapFiltersForm.classList.add('ad-form--disabled');

  mapFiltersFormElements.forEach((element) => {
    element.disabled = true;
  });

};
/*
3.1. Заголовок объявления:
Обязательное текстовое поле;
Минимальная длина — 30 символов;
Максимальная длина — 100 символов.
*/

titleInput.addEventListener('input', () => {
  if (titleInput.value.length < titleInput.minlength) {
    titleInput.setCustomValidity(`Минимальная длина заголовка ${titleInput.minlength} символов. Осталось ${titleInput.minlength - titleInput.value.length}.`);
  } else if (titleInput.value.length > titleInput.maxlength) {
    titleInput.setCustomValidity(`Максимальная длина заголовка ${titleInput.maxlength} символов.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

/*
3.2. Цена за ночь:
Обязательное поле;
Числовое поле;
Максимальное значение — 1 000 000.
*/

priceInput.addEventListener('input', () => {

  if (priceInput.value > priceInput.max) {
    priceInput.setCustomValidity(`Цена не должна превышать ${priceInput.max}.`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

/*
3.3. Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»:
«Бунгало» — минимальная цена за ночь 0;
«Квартира» — минимальная цена за ночь 1 000;
«Отель» — минимальная цена за ночь 3 000;
«Дом» — минимальная цена 5 000;
«Дворец» — минимальная цена 10 000.
*/

typeOfProperty.addEventListener('change', (evt) => {
  evt.target.selected = true;
  priceInput.min = `${minPriceOfPropertyType[evt.target.value]}`;
  priceInput.placeholder = `${minPriceOfPropertyType[evt.target.value]}`;
});

/*
3.5. Поля «Время заезда» и «Время выезда» синхронизированы:
при изменении значения одного поля во втором выделяется соответствующее ему значение.
Например, если время заезда указано «после 14», то время выезда будет равно «до 14» и наоборот.
*/

timeIn.addEventListener('change', (evt) => {
  evt.target.selected = true;
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  evt.target.selected = true;
  timeIn.value = evt.target.value;
});

/*3.6. Поле «Количество комнат» синхронизировано с полем «Количество мест» таким образом,
что при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:
1 комната — «для 1 гостя»;
2 комнаты — «для 2 гостей» или «для 1 гостя»;
3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
100 комнат — «не для гостей».
*/

const switchGuestsCapacity = (rooms) => {

  switch (rooms) {

    case '1':
      capacitySelect.options[0].disabled = true;
      capacitySelect.options[1].disabled = true;
      capacitySelect.options[2].selected = true;
      capacitySelect.options[2].disabled = false;
      capacitySelect.options[3].disabled = true;
      break;
    case '2':
      capacitySelect.options[0].disabled = true;
      capacitySelect.options[1].selected = true;
      capacitySelect.options[1].disabled = false;
      capacitySelect.options[2].disabled = false;
      capacitySelect.options[3].disabled = true;
      break;
    case '3':
      capacitySelect.options[0].selected = true;
      capacitySelect.options[0].disabled = false;
      capacitySelect.options[1].disabled = false;
      capacitySelect.options[2].disabled = false;
      capacitySelect.options[3].disabled = true;
      break;
    case '100':
      capacitySelect.options[0].disabled = true;
      capacitySelect.options[1].disabled = true;
      capacitySelect.options[2].disabled = true;
      capacitySelect.options[3].selected = true;
      capacitySelect.options[3].disabled = false;
      break;
  };
};

roomNumberSelect.addEventListener('change', (evt) => {
  switchGuestsCapacity(evt.target.value);
});
