import {
  COORDS_OF_TOKIO
} from './data.js';
import {
  getSuccessPopupMessage
} from './form-submit-messages.js';
import {
  mainMarker
} from './map.js';
export const adForm = document.querySelector('.ad-form');
export const mapFiltersForm = document.querySelector('.map__filters');
const adFormElements = adForm.querySelectorAll('.ad-form>fieldset');
export const addressInput = adForm.querySelector('#address');
const mapFiltersFormElements = mapFiltersForm.querySelectorAll('.map__filters>fieldset');
export const titleInput = document.querySelector('#title');
export const priceInput = adForm.querySelector('#price');
export const typeOfProperty = adForm.querySelector('#type');
const typeOfPropertyOptions = typeOfProperty.querySelectorAll('option');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const capacitySelect = adForm.querySelector('#capacity');
const capacityOptions = capacitySelect.querySelectorAll('option');

const roomNumberSelect = adForm.querySelector('#room_number');

export const minPriceOfPropertyType = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

const guestsCapacity = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

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
/*3.1. Заголовок объявления:
Обязательное текстовое поле;
Минимальная длина — 30 символов;
Максимальная длина — 100 символов.*/

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

/*3.2. Цена за ночь:
Обязательное поле;
Числовое поле;
Максимальное значение — 1000000.*/

priceInput.addEventListener('input', () => {

  if (+priceInput.value > +priceInput.max) {
    priceInput.setCustomValidity(`Цена не должна превышать ${priceInput.max}.`);
  } else if (+priceInput.value < +priceInput.min) {
    priceInput.setCustomValidity(`Цена не должна быть меньше ${priceInput.min}.`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
});

/*3.3. Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»:
«Бунгало» — минимальная цена за ночь 0;
«Квартира» — минимальная цена за ночь 1 000;
«Отель» — минимальная цена за ночь 3 000;
«Дом» — минимальная цена 5 000;
«Дворец» — минимальная цена 10 000.*/

typeOfProperty.addEventListener('change', (evt) => {
  priceInput.min = `${minPriceOfPropertyType[evt.target.value]}`;
  priceInput.placeholder = `${minPriceOfPropertyType[evt.target.value]}`;
});

/*3.5. Поля «Время заезда» и «Время выезда» синхронизированы:
при изменении значения одного поля во втором выделяется соответствующее ему значение.
Например, если время заезда указано «после 14», то время выезда будет равно «до 14» и наоборот.*/

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});
timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

/*3.6. Поле «Количество комнат» синхронизировано с полем «Количество мест» таким образом,
что при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:
1 комната — «для 1 гостя»;
2 комнаты — «для 2 гостей» или «для 1 гостя»;
3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
100 комнат — «не для гостей».*/

/*создать объект где ключ это количество гостей а значение массив доступных вариантов
{
  1: ['1'],
  2: ['1', '2'],
  ...
}
и в цикле проверять "если значение содержится (.includes) в массиве по этому ключу, то disabled=false иначе disabled=true*/

const setGuestCapacity = (rooms) => {
  capacityOptions.forEach((item) => {
    if (item.value === guestsCapacity[rooms][0]) {
      item.selected = true;
    }
  });
};

export const switchGuestsCapacity = (rooms) => {
  setGuestCapacity(rooms);
  capacityOptions.forEach((item) => {
    item.disabled = !guestsCapacity[rooms].includes(`${item.value}`);
  });
};

switchGuestsCapacity('1');

roomNumberSelect.addEventListener('change', (evt) => {
  switchGuestsCapacity(evt.target.value);
});

export const setFormSubmit = function (onSuccess, onError) {

  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch('https://23.javascript.pages.academy/keksobooking', {
        method: 'POST',
        body: formData,
      })
      .then((response) => {
        if (response.ok) {
          onSuccess();
        } else {
          throw new Error(`${response.status} ${response.statusText}`);
        }
      })
      .then(() => getSuccessPopupMessage())
      .catch(() => onError());
  });
};
const setDefaultPriceValue = function () {
  typeOfPropertyOptions.forEach((item) => {
    if (item.selected) {
      priceInput.min = '1000';
      priceInput.placeholder = '1000';
    }
  });
};
const setDefaultMapParameters = function () {
  mainMarker.setLatLng(COORDS_OF_TOKIO);
  setTimeout(() => {
    addressInput.value = `${COORDS_OF_TOKIO.lat.toFixed(5)}, ${COORDS_OF_TOKIO.lng.toFixed(5)}`;
  }, 0);
};


export const setDefaultFormParameters = function () {
  adForm.reset();
  setDefaultMapParameters();
  setDefaultPriceValue();
  switchGuestsCapacity('1');
};

adForm.addEventListener('reset', () => {
  setDefaultFormParameters();
});
