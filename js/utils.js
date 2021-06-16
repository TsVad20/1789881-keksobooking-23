import {
  TYPES_OF_PROPERTY,
  TIMES_OF_CHECKIN,
  TIMES_OF_CHECKOUT,
  LIST_OF_FEATURES,
  LIST_OF_PHOTOS
} from './data.js';

// Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomValue = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0) {
    min = 0;
  }
  if (min >= max) {
    return 'Ошибка! Начальное значение диапазона, должно быть меньше конечного.';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomValueFloat = function (minValue, maxValue, numberOfDigits) {
  minValue = minValue * Math.pow(10, numberOfDigits);
  maxValue = maxValue * Math.pow(10, numberOfDigits);
  if (minValue < 0) {
    minValue = 0;
  }
  if (minValue >= maxValue) {
    return 'Ошибка! Начальное значение диапазона, должно быть меньше конечного.';
  }
  if (numberOfDigits < 0) {
    return 'Ошибка! Значение количества разрядов "numberOfDigits" , должно быть положительным.';
  }
  const result = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue) * Math.pow(10, -numberOfDigits);
  return result.toFixed(numberOfDigits);
};

// функция получения случайного значения из переданного массива

const getRandomItem = function (exArr) {
  return exArr[getRandomValue(0, exArr.length - 1)];
};

// функция получения случайного массива из элементов переданного

const getRandomListItem = function (exArr) {
  return exArr.slice(0, getRandomValue(0, exArr.length));
};

//функция генерации адреса изображения

const getAvatarImageSrc = function () {
  const imageAddrValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const newArr = imageAddrValues.map((item) => {
    if (item < 10) {
      return `img/avatars/user0${item}.png`;
    }
    return `img/avatars/user${item}.png`;
  });
  return getRandomItem(newArr);
};

// функция получения случайных координат для обьекта

const getRandomLocation = function () {
  return {
    lat: getRandomValueFloat(35.65000, 35.70000, 5),
    lng: getRandomValueFloat(139.70000, 139.80000, 5),
  };
};

// функция генерации "объявления"

const getNewAd = function () {
  const randomLocation = getRandomLocation();
  return {

    author: {
      avatar: getAvatarImageSrc(),
    },

    location: {
      lat: randomLocation.lat,
      lng: randomLocation.lng,
    },

    offer: {

      title: 'Образец обьявления', // строка — заголовок предложения. Придумайте самостоятельно.

      address: `${randomLocation.lat}, ${randomLocation.lng}`, //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

      price: getRandomValue(100, 10000), //число — стоимость. Случайное целое положительное число.

      type: getRandomItem(TYPES_OF_PROPERTY), //getRandomItem(['palace', 'flat', 'house', 'bungalow', 'hotel']), //строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

      rooms: getRandomValue(1, 20), //число — количество комнат. Случайное целое положительное число.

      guests: getRandomValue(1, 20), //число — количество гостей, которое можно разместить. Случайное целое положительное число.

      checkin: getRandomItem(TIMES_OF_CHECKIN), //строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      checkout: getRandomItem(TIMES_OF_CHECKOUT), //, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      features: getRandomListItem(LIST_OF_FEATURES), //массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

      description: 'до моря 100 метров', //строка — описание помещения. Придумайте самостоятельно.

      photos: getRandomListItem(LIST_OF_PHOTOS), //массив случайной длины из значений

    },
  };
};

//Функция генерации массива из нескольких "обьявлений"

export const generateArray = function (quantityOfItems) {
  const newGeneratedArray = new Array(quantityOfItems);
  return newGeneratedArray.fill(null).map(() => getNewAd());
};
