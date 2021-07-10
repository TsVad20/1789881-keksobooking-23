import {COORDS_OF_TOKIO} from './data.js';
import {addressInput, titleInput} from './form.js';
import {createPopup} from './popup.js';
import {getData} from './create-fetch.js';
import { getSuccessPopupMessage } from "./form-submit-messages.js";
const adMap = 'map-canvas';

const map = L.map(adMap);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainMarker = L.marker(
  COORDS_OF_TOKIO, {
    draggable: true,
    icon: mainPinIcon,
  },
);

const countOfAds = 5; // ограничил размер массива объявлений от сервака для удобства разработки

export const getAdMap = function (cb) {

  map.on('load', () => {
      cb();
    })
    .setView(COORDS_OF_TOKIO, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker.addTo(map);

  addressInput.value = `${COORDS_OF_TOKIO.lat.toFixed(5)}, ${COORDS_OF_TOKIO.lng.toFixed(5)}`;

  const addPoints = function(data) {data.slice(0,countOfAds).forEach(item=>{
    const marker = L.marker(item.location, {icon: pinIcon,});
    console.log(createPopup(item));
    marker.addTo(map).bindPopup(createPopup(item));
  })};
  getData(addPoints);

  mainMarker.on('moveend', (evt) => {
    const {
      lat,
      lng,
    } = evt.target.getLatLng();
    addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });
};
export const setDefaultMapParameters = function(){
  mainMarker.setLatLng(COORDS_OF_TOKIO);
  addressInput.value = `${COORDS_OF_TOKIO.lat.toFixed(5)}, ${COORDS_OF_TOKIO.lng.toFixed(5)}`;
  titleInput.value = '';
  getSuccessPopupMessage();
};
