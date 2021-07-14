const successSubmitMessage = document.querySelector('#success').content.querySelector('.success');
const errorSubmitMessage = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.querySelector('body');

export const getSuccessPopupMessage = function(){
  const successPopupMessageElement = successSubmitMessage.cloneNode(true);
  bodyElement.appendChild(successPopupMessageElement);
  successPopupMessageElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    successPopupMessageElement.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      successPopupMessageElement.remove();
    }
  });
};

export const getErrorPopupMessage = function () {
  const errorPopupMessageElement = errorSubmitMessage.cloneNode(true);
  const errorButton = errorPopupMessageElement.querySelector('.error__button');
  bodyElement.appendChild(errorPopupMessageElement);
  errorPopupMessageElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorPopupMessageElement.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (evt.target.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      errorPopupMessageElement.remove();
    }
  });
  errorButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorPopupMessageElement.remove();
  });
};
