import './popup.js';
import {activePage, setFormSubmit, unactivePage} from './form.js';
import {getAdMap , setDefaultMapParameters} from './map.js';
import {getErrorPopupMessage} from './form-submit-messages.js';

unactivePage();
getAdMap(activePage);
setFormSubmit(setDefaultMapParameters, getErrorPopupMessage);
