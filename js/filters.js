import {
  PRICE_FILTER_RANGES,
  POINTS_COUNT
} from './data.js';

import {
  renderPoints
} from './map.js';

export const mapFiltersForm = document.querySelector('.map__filters');
const houseTypeInput = mapFiltersForm.querySelector('#housing-type');
const housePriceInput = mapFiltersForm.querySelector('#housing-price');
const houseRoomsInput = mapFiltersForm.querySelector('#housing-rooms');
const houseGuestsInput = mapFiltersForm.querySelector('#housing-guests');

export const filterData = (data) => {
  const filteredData = data.filter((item) => {
    const currentType = houseTypeInput.value === 'any' || item.offer.type === houseTypeInput.value;
    const currentPrice = housePriceInput.value === 'any' || PRICE_FILTER_RANGES[housePriceInput.value].min <= item.offer.price && item.offer.price < PRICE_FILTER_RANGES[housePriceInput.value].max;
    const currentRooms = houseRoomsInput.value === 'any' || `${item.offer.rooms}` === houseRoomsInput.value;
    const currentGuests = houseGuestsInput.value === 'any' || `${item.offer.guests}` === houseGuestsInput.value;
    return currentType && currentPrice && currentRooms && currentGuests;
  }).slice(0, POINTS_COUNT);
  renderPoints(filteredData);
};
