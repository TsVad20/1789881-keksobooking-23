import {
  generateArrayOfAds,
  renameTypeOfProperty
} from './utils.js';

const adList = document.querySelector('.map__canvas');
const adListItemTemplate = document.querySelector('#card').content;
const newAdList = generateArrayOfAds(1);

newAdList.forEach((item) => {
  const {
    author,
    offer
  } = item;

  const newAdItem = adListItemTemplate.cloneNode(true);

  if (offer.title) {
    newAdItem.querySelector('.popup__title').textContent = offer.title;
  }
  newAdItem.querySelector('.popup__title').classList.add('hidden');

  newAdItem.querySelector('.popup__text--address').textContent = offer.address;
  newAdItem.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  newAdItem.querySelector('.popup__type').textContent = renameTypeOfProperty(offer.type);
  newAdItem.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  newAdItem.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  newAdItem.querySelector('.popup__features').textContent = offer.features;
  newAdItem.querySelector('.popup__description').textContent = offer.description;

  const newAdItemPhotosList = newAdItem.querySelector('.popup__photos');
  const newAdPhotoTemplate = newAdItemPhotosList.querySelector('.popup__photo');

  for (let i = 0; i < offer.photos.length - 1; i++) {
    const newAdPhoto = newAdPhotoTemplate.cloneNode(true);
    newAdItemPhotosList.appendChild(newAdPhoto);
  };
  const photoBlock = newAdItemPhotosList.children;
  for (let i = 0; i < photoBlock.length; i++) {
    photoBlock[i].src = offer.photos[i];
  };

  newAdItem.querySelector('.popup__avatar').src = author.avatar;

  adList.appendChild(newAdItem);
});
