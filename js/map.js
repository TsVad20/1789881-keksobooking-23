<<<<<<< HEAD
import {COORDS_OF_TOKIO} from './data.js';
import {addressInput} from './form.js';
import {createPopup} from './popup.js';
import {getData} from './create-fetch.js';

const adMap = 'map-canvas';

const map = L.map(adMap);

=======
import {generateArrayOfAds} from './utils.js';
import {COORDS_OF_TOKIO} from './data.js';
import {addressInput} from './form.js';
import {createPopup} from './popup.js';

const adMap = 'map-canvas';

>>>>>>> 3e874ed62e6a08eb7b7a088d5636f943a65b2f2e
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

<<<<<<< HEAD
export const mainMarker = L.marker(
=======
const mainMarker = L.marker(
>>>>>>> 3e874ed62e6a08eb7b7a088d5636f943a65b2f2e
  COORDS_OF_TOKIO, {
    draggable: true,
    icon: mainPinIcon,
  },
);
<<<<<<< HEAD

const countOfAds = 5; // ограничил размер массива объявлений от сервака для удобства разработки

export const getAdMap = function (cb) {

  map.on('load', () => {
=======
const neiborAdCoords = generateArrayOfAds(10);

export const getAdMap = function (cb) {

  const map = L.map(adMap)
    .on('load', () => {
>>>>>>> 3e874ed62e6a08eb7b7a088d5636f943a65b2f2e
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

<<<<<<< HEAD
  const addPoints = function(data) {data.slice(0,countOfAds).forEach(item=>{
    const marker = L.marker(item.location, {icon: pinIcon,});
    marker.addTo(map).bindPopup(createPopup(item));
  })};
  getData(addPoints);
=======
  neiborAdCoords.forEach((item) => {
    const marker = L.marker(item.location, {
      icon: pinIcon,
    });
    marker.addTo(map).bindPopup(createPopup(item));
  });
>>>>>>> 3e874ed62e6a08eb7b7a088d5636f943a65b2f2e

  mainMarker.on('moveend', (evt) => {
    const {
      lat,
      lng,
    } = evt.target.getLatLng();
    addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });
};
