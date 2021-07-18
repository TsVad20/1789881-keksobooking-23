const TYPES_OF_PROPERTY = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES_OF_CHECKIN = ['12:00', '13:00', '14:00'];
const TIMES_OF_CHECKOUT = ['12:00', '13:00', '14:00'];
const LIST_OF_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const LIST_OF_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

export {
  TYPES_OF_PROPERTY,
  TIMES_OF_CHECKIN,
  TIMES_OF_CHECKOUT,
  LIST_OF_FEATURES,
  LIST_OF_PHOTOS
};

export const renameTypeOfProperty = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

export const COORDS_OF_TOKIO = {
  lat: 35.68950,
  lng: 139.69171,
};

export const PRICE_FILTER_RANGES = {
  'low': {
    min: 0,
    max: 10000,
  },
  'middle': {
    min: 10000,
    max: 50000,
  },
  'high': {
    min: 50000,
    max: Number.MAX_SAFE_INTEGER,
  },
}

export const POINTS_COUNT = 10;
