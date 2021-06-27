const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');
const adFormElements = document.querySelectorAll('.ad-form>fieldset');
const mapFiltersFormElements = document.querySelectorAll('.map__filters>fieldset');

export const activePage = function () {

  adForm.classList.remove('ad-form--disabled');

  adFormElements.forEach((element) => {
    element.disabled = false;
  });

  mapFiltersForm.classList.remove('ad-form--disabled');

  mapFiltersFormElements.forEach((element) => {
    element.disabled = false;
  });

};
export const unactivePage = function () {

  adForm.classList.add('ad-form--disabled');

  adFormElements.forEach((element) => {
    element.disabled = true;
  });

  mapFiltersForm.classList.add('ad-form--disabled');

  mapFiltersFormElements.forEach((element) => {
    element.disabled = true;
  });

};
