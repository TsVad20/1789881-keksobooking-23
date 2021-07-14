import './popup.js';
<<<<<<< HEAD
import { activePage, setFormSubmit, unactivePage, setDefaultFormParameters} from './form.js';
import {getAdMap} from './map.js';
import {getErrorPopupMessage} from './form-submit-messages.js';

unactivePage();
getAdMap(activePage);
setFormSubmit(setDefaultFormParameters, getErrorPopupMessage);
=======
import {activePage, unactivePage} from './form.js';
import {getAdMap} from './map.js';

unactivePage();
getAdMap(activePage);
>>>>>>> 3e874ed62e6a08eb7b7a088d5636f943a65b2f2e
