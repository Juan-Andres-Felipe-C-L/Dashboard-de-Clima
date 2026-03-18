//MEJORAR   

import {searchElements} from "./ui.js";
import {onClick} from "./service.js";
import {setLocalStorageValue, getLocalStorageValue, clearLocalStorage} from './persistance.js';

function start() {
    searchElements(onClick);
}

start();