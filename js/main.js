import './popup.js';
import { activePage, setFormSubmit, unactivePage, setDefaultFormParameters} from './form.js';
import {getAdMap} from './map.js';
import {getErrorPopupMessage} from './form-submit-messages.js';

unactivePage();
getAdMap(activePage);
setFormSubmit(setDefaultFormParameters, getErrorPopupMessage);
