/*Buena noche instructor Alejandro, gracias por haberme compartido el código con el que trató de explicarme esta actividad,
gracias a eso pude hacerla. También, debo de admitir que, para terminar este código de una mnera agil, debí hacer uso de la IA
Chat GPT. Buen resto de fin de semana.*/

/* Importaciones de los demás scripts que deben estar enlazados al main.js */
import { searchElements, renderClima } from "./ui.js";
import { onClick } from "./service.js";
import { getLocalStorageValue } from "./persistance.js";

function start() {
    searchElements(onClick);

    // Recuperar datos guardados
    const data = getLocalStorageValue("clima");

    if (data) {
        renderClima(data);
    }
}

start();