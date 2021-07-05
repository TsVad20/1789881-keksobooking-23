import {generateArrayOfAds} from './utils.js';
import {COORDS_OF_TOKIO} from './data.js';
import {addressInput} from './form.js';
import {createPopup} from './popup.js';

const adMap = 'map-canvas';

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
const neiborAdCoords = generateArrayOfAds(10);

export const getAdMap = function (cb) {

  const map = L.map(adMap)
    .on('load', () => {
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

  neiborAdCoords.forEach((item) => {
    const marker = L.marker(item.location, {
      icon: pinIcon
    });
    marker.addTo(map).bindPopup(createPopup(item));
  });

  mainMarker.on('moveend', (evt) => {
    const {
      lat,
      lng
    } = evt.target.getLatLng();
    addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });
};
