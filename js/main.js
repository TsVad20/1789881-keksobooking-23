// В файле main.js напишите несколько вспомогательных функций, которые пригодятся вам в следующих заданиях. Функции не обязательно писать с нуля,
//можно найти готовые в интернете, разобраться в них и добавить к себе в проект. Только не забудьте указать ссылку на источник!

// Задание считается выполненным, если в проекте описаны следующие функции:

// Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

// имя_функции(от, до); // Результат: целое число из диапазона "от...до"
// Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее,
//чем значение «от», или равное ему.

const getRandomValue = function (min, max) { //Источник алгоритма https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0) {
    min = 0; //если начальное значение диапазона отрицательное, то принимаем его равным "0", так как по условию: "диапазон может быть только положительный, включая ноль."
  }
  if (min >= max) {
    return 'Ошибка! Начальное значение диапазона, должно быть меньше конечного.'; //в случае, если передать значение «до» меньшее, чем значение «от», или равное ему, выводим сообщение об ошибке.
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomValue(3, 20);
// console.log('getRandomValue(11,10)= ' + getRandomValue(11, 10));
// console.log('getRandomValue(-2,7)= ' + getRandomValue(-2, 7));
// console.log('getRandomValue(3,10)= ' + getRandomValue(3, 20));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Будет использоваться для генерации временных географических координат в следующем задании.
// Пример использования функции:

// имя_функции(от, до, количество_знаков_после_запятой); Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
// Учтите, что диапазон может быть только положительный, включая ноль.
// А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.
// Не забудьте, что в случае с дробными числами диапазон может быть в десятых, сотых, тысячных и т. д. долях. Например, 1.1, 1.2 — корректный диапазон.


const getRandomValueFloat = function (minValue, maxValue, numberOfDigits) {
  minValue = minValue * Math.pow(10, numberOfDigits);
  maxValue = maxValue * Math.pow(10, numberOfDigits);
  let result;
  if (minValue < 0) {
    minValue = 0; //если начальное значение диапазона отрицательное, то принимаем его равным "0", так как по условию: "диапазон может быть только положительный, включая ноль."
  }
  if (minValue >= maxValue) {
    return 'Ошибка! Начальное значение диапазона, должно быть меньше конечного.'; //в случае, если передать значение «до» меньшее, чем значение «от», или равное ему, выводим сообщение об ошибке.
  }
  if (numberOfDigits < 0) {
    return 'Ошибка! Значение количества разрядов "numberOfDigits" , должно быть положительным.'; //в случае, если передать значение «до» меньшее, чем значение «от», или равное ему, выводим сообщение об ошибке.
  }
  result = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue) * Math.pow(10, -numberOfDigits);
  return result = result.toFixed(numberOfDigits);
};
getRandomValueFloat(3, 3.1, -5);

/*В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов.
Каждый объект массива — описание похожего объявления неподалёку.

Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

  avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются.

offer, объект — содержит информацию об объявлении. Состоит из полей:

  title, строка — заголовок предложения. Придумайте самостоятельно.

  address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

  price, число — стоимость. Случайное целое положительное число.

  type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

  rooms, число — количество комнат. Случайное целое положительное число.

  guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

  checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

  features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

  description, строка — описание помещения. Придумайте самостоятельно.

  photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

  lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

  lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.*/

/*let firstAd = {
  author: {
    avatar: img / avatars / user01.png,
  },
  offer: {

    title: 'Образец обьявления', // строка — заголовок предложения. Придумайте самостоятельно.

    address: { //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

      x: location.lat,

      y: location.lng,

    },

    price: 1000, //число — стоимость. Случайное целое положительное число.

    type: palace, //строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

    rooms: 3, //число — количество комнат. Случайное целое положительное число.

    guests: 3, //число — количество гостей, которое можно разместить. Случайное целое положительное число.

    checkin: '12:00', //строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    checkout: '14:00', //, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

    features: [wifi, dishwasher, parking], //массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

    description: 'до моря 100 метров', //строка — описание помещения. Придумайте самостоятельно.

    photos: [
      'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
      'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
      'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
    ], //массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

    location: { //объект — местоположение в виде географических координат. Состоит из двух полей:

      lat: 35.65000, //число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

      lng: 139.7000, //число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

    }
  },
}*/
//переменные для свойств 'offer'
const typeOfProperty = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const timeOfCheckIn = ['12:00', '13:00', '14:00'];
const timeOfCheckOut = ['12:00', '13:00', '14:00'];
const listOfFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const listOfPhotos = [
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
// функция получения случайного значения из переданного массива
const getRandomItem = function (exArr) {
  return exArr[getRandomValue(0, exArr.length - 1)];
};
// функция получения случайного массива из элементов переданного
const getRandomListItem = function (exArr) {
  return exArr.slice(0, getRandomValue(0, exArr.length + 1));
};
// функция получения случайных координат для обьекта 'location' и 'offer.address"
const getRandomLocation = function () {
  return {
    lat: getRandomValueFloat(35.65000, 35.70000, 5),
    lng: getRandomValueFloat(139.70000, 139.80000, 5),
  };
};
// присваивание координат переменным, для того, чтобы координаты 'location' и 'offer.address' были одинаковыми
const randomLocationX = getRandomLocation().lat;
const randomLocationY = getRandomLocation().lng;

const newAd = function () {
  return {

    author: {
      avatar: `img / avatars / user0${getRandomValue(1,8)}.png`,
    },

    location: {
      lat: randomLocationX,
      lng: randomLocationY,
    },

    offer: {

      title: 'Образец обьявления', // строка — заголовок предложения. Придумайте самостоятельно.

      address: `${randomLocationX},${randomLocationY}`, //строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.

      price: getRandomValue(100, 10000), //число — стоимость. Случайное целое положительное число.

      type: getRandomItem(typeOfProperty), //getRandomItem(['palace', 'flat', 'house', 'bungalow', 'hotel']), //строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

      rooms: getRandomValue(1, 20), //число — количество комнат. Случайное целое положительное число.

      guests: getRandomValue(1, 20), //число — количество гостей, которое можно разместить. Случайное целое положительное число.

      checkin: getRandomItem(timeOfCheckIn), //строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      checkout: getRandomItem(timeOfCheckOut), //, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

      features: getRandomListItem(listOfFeatures), //массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

      description: 'до моря 100 метров', //строка — описание помещения. Придумайте самостоятельно.

      photos: getRandomListItem(listOfPhotos), //массив случайной длины из значений

    },
  };
};
newAd();
