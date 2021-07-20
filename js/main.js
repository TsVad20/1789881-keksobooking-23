import './popup.js';
import {unactivatePage, unactivateFilters, activatePage} from './form.js';
import {loadMap} from './map.js';

unactivatePage(unactivateFilters);
activatePage();
loadMap();
