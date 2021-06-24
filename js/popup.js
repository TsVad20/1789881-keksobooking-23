import {
  generateArrayOfAds
} from './utils.js';

import {
  renameTypeOfProperty
} from './data.js';

const adList = document.querySelector('.map__canvas');
const newAdList = generateArrayOfAds(10);
const adListItemTemplate = document.querySelector('#card').content;
const newAdItem = adListItemTemplate.cloneNode(true);
const popupTitle = newAdItem.querySelector('.popup__title');
const popupTextAddress = newAdItem.querySelector('.popup__text--address');
const popupTextPrice = newAdItem.querySelector('.popup__text--price');
const popupType = newAdItem.querySelector('.popup__type');
const popupTextCapacity = newAdItem.querySelector('.popup__text--capacity');
const popupTextTime = newAdItem.querySelector('.popup__text--time');
const popupFeaturesList = newAdItem.querySelectorAll('.popup__features>li');
const popupFeaturesBlock = newAdItem.querySelector('.popup__features');
const popupDescription = newAdItem.querySelector('.popup__description');
const newAdPhotoBlock = newAdItem.querySelector('.popup__photos');
const newAdPhotoList = newAdPhotoBlock.children;
const AdPhoto = newAdItem.querySelector('.popup__photo');
//const newAdPhoto = AdPhoto.cloneNode(true);
const popupAvatar = newAdItem.querySelector('.popup__avatar');

const getNewAdList = function (item) {

  const {
    author,
    offer,
  } = item;

  (!offer.title) ? popupTitle.classList.add('hidden'): popupTitle.textContent = offer.title;
  (!offer.address) ? popupTextAddress.classList.add('hidden'): popupTextAddress.textContent = offer.address;
  (!offer.price) ? popupTextPrice.classList.add('hidden'): popupTextPrice.textContent = `${offer.price} ₽/ночь`;
  (!offer.type) ? popupType.classList.add('hidden'): popupType.textContent = renameTypeOfProperty[offer.type];
  (!offer.rooms || !offer.guests) ? popupTextCapacity.classList.add('hidden'): popupTextCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  (!offer.checkin || !offer.checkout) ? popupTextTime.classList.add('hidden'): popupTextTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  (!offer.description) ? popupDescription.classList.add('hidden'): popupDescription.textContent = offer.description;

  let newFeaturesArray = [];
  for (let feature = 0; feature < offer.features.length; feature++) {
    if (!offer.features[feature]) {
      newListItem.classList.add('hidden');
    } else {
      for (let popupFeaturesItem of popupFeaturesList) {
        if (popupFeaturesItem.className === `popup__feature popup__feature--${offer.features[feature]}`) {
          newFeaturesArray.push(popupFeaturesItem);
        } else {
          popupFeaturesItem.remove();
        }
      }
    }
  }
  newFeaturesArray.forEach(feature => {
    popupFeaturesBlock.appendChild(feature);
  });

  if (offer.photos === []) {
    newAdPhotoBlock.classList.add('hidden');
  } else {
    for (let photo = 0; photo < offer.photos.length - 1; photo++) {
      const newAdPhoto = AdPhoto.cloneNode(true);
      newAdPhotoBlock.appendChild(newAdPhoto);
    }

    for (let photo = 0; photo < newAdPhotoList.length; photo++) {
      newAdPhotoList[photo].src = offer.photos[photo];
    }
  }

  if (!author.avatar) {
    popupAvatar.classList.add('hidden');
  } else {
    popupAvatar.src = author.avatar;
    popupAvatar.alt = 'avatar пользователя';
  }

  adList.appendChild(newAdItem);
};
getNewAdList(newAdList[0]);
