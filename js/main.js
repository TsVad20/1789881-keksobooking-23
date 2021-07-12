import './popup.js';
import { activePage, setFormSubmit, unactivePage, setDefaultMapParameters} from './form.js';
import {getAdMap} from './map.js';
import {getErrorPopupMessage} from './form-submit-messages.js';

unactivePage();
getAdMap(activePage);
setFormSubmit(setDefaultMapParameters, getErrorPopupMessage);
