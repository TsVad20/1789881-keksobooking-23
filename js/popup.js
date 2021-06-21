import {
  generateArrayOfAds
} from './utils.js';

import {
  renameTypeOfProperty
} from './data.js';

const adList = document.querySelector('.map__canvas');
const adListItemTemplate = document.querySelector('#card').content;
const newAdList = generateArrayOfAds(10);

const getNewAdList = function (item) {

  const {
    author,
    offer,
  } = item;

  const newAdItem = adListItemTemplate.cloneNode(true);

  if (!offer.title) {
    newAdItem.querySelector('.popup__title').classList.add('hidden');
  } else {
    newAdItem.querySelector('.popup__title').textContent = offer.title;
  }

  if (!offer.address) {
    newAdItem.querySelector('.popup__title').classList.add('hidden');
  } else {
    newAdItem.querySelector('.popup__text--address').textContent = offer.address;
  }

  if (!offer.price) {
    newAdItem.querySelector('.popup__text--price').classList.add('hidden');
  } else {
    newAdItem.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  }

  if (!offer.type) {
    newAdItem.querySelector('.popup__type').classList.add('hidden');
  } else {
    newAdItem.querySelector('.popup__type').textContent = renameTypeOfProperty[offer.type];
  }

  if (!offer.rooms || !offer.guests) {
    newAdItem.querySelector('.popup__text--capacity').classList.add('hidden');
  } else {
    newAdItem.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  }

  if (!offer.checkin || !offer.checkout) {
    newAdItem.querySelector('.popup__text--time').classList.add('hidden');
  } else {
    newAdItem.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  const popupFeaturesList = newAdItem.querySelector('.popup__features');
  popupFeaturesList.replaceChildren();
  for (let feature = 0; feature < offer.features.length; feature++) {
    const newListItem = document.createElement('li');
    if (!offer.features[feature]) {
      newListItem.classList.add('hidden');
    } else {
      newListItem.classList.add('popup__feature');
      newListItem.classList.add(`popup__feature--${offer.features[feature]}`);
      popupFeaturesList.appendChild(newListItem);
    }
  }

  newAdItem.querySelector('.popup__description').textContent = offer.description;
  const newAdPhotoList = newAdItem.querySelector('.popup__photos');

  const newAdPhoto = newAdItem.querySelector('.popup__photo');
  if (!offer.photos[0]) {
    newAdPhoto.classList.add('hidden');
  } else {
    newAdPhoto.src = offer.photos[0];
    newAdPhoto.alt = offer.photos[0];
  }

  for (let itemOfPhotos = 0; itemOfPhotos < offer.photos.length - 1; itemOfPhotos++) {
    const nextAdPhoto = newAdPhoto.cloneNode(true);
    if (!offer.photos[itemOfPhotos + 1]) {
      newAdPhoto.classList.add('hidden');
    } else {
      nextAdPhoto.src = offer.photos[itemOfPhotos + 1];
      nextAdPhoto.alt = offer.photos[itemOfPhotos + 1];
      newAdPhotoList.appendChild(nextAdPhoto);
    }
  }
  if (!author.avatar) {
    newAdItem.querySelector('.popup__avatar').classList.add('hidden');
  } else {
    newAdItem.querySelector('.popup__avatar').src = author.avatar;
    newAdItem.querySelector('.popup__avatar').alt = author.avatar;
  }

  adList.appendChild(newAdItem);
};
getNewAdList(newAdList[0]);
