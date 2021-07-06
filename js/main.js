import './popup.js';
import {activePage, unactivePage} from './form.js';
import {getAdMap} from './map.js';

unactivePage();
getAdMap(activePage);
