import {generateArrayOfAds} from './utils.js';

import {renameTypeOfProperty} from './data.js';

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
const popupFeaturesList = newAdItem.querySelector('.popup__features');
const featureListElements = popupFeaturesList.querySelectorAll('.popup__feature');
const popupDescription = newAdItem.querySelector('.popup__description');
const newAdPhotoBlock = newAdItem.querySelector('.popup__photos');
const AdPhoto = newAdItem.querySelector('.popup__photo');
const popupAvatar = newAdItem.querySelector('.popup__avatar');

const getNewAdList = function (item) {

  const {author, offer} = item;

  (!offer.title) ? popupTitle.classList.add('hidden'): popupTitle.textContent = offer.title;
  (!offer.address) ? popupTextAddress.classList.add('hidden'): popupTextAddress.textContent = offer.address;
  (!offer.price) ? popupTextPrice.classList.add('hidden'): popupTextPrice.textContent = `${offer.price} ₽/ночь`;
  (!offer.type) ? popupType.classList.add('hidden'): popupType.textContent = renameTypeOfProperty[offer.type];
  (!offer.rooms || !offer.guests) ? popupTextCapacity.classList.add('hidden'): popupTextCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  (!offer.checkin || !offer.checkout) ? popupTextTime.classList.add('hidden'): popupTextTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  (!offer.description) ? popupDescription.classList.add('hidden'): popupDescription.textContent = offer.description;

  const modifiers = offer.features.map((feature)=>{`popup__feature--${feature}`;});

  if (!offer.features) {
    popupFeaturesList.classList.add('hidden');
  }
  else {
    for (const dataFeatureItem of featureListElements){
      const modifier = dataFeatureItem.classList[1];
      if(!modifiers.includes(modifier)){
        dataFeatureItem.remove();
      }
    }
  }

  if (offer.photos === []) {
    newAdPhotoBlock.classList.add('hidden');
  } else {
    for (let photo = 0; photo < offer.photos.length; photo++) {
      const newAdPhoto = AdPhoto.cloneNode(true);
      newAdPhoto.src = offer.photos[photo];
      newAdPhotoBlock.appendChild(newAdPhoto);
    }
    AdPhoto.remove();
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
