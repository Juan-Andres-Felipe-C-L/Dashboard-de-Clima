/*Buena noche instructor Alejandro, gracias por haberme compartido el código con el que trató de explicarme esta actividad,
gracias a eso pude hacerla. También, debo de admitir que, para terminar este código de una mnera agil, debí hacer uso de la IA
Chat GPT. Buen resto de fin de semana.*/

// Sentencias para que funcione el LocalStorage y la recarga de datos cuando se vuelve a abrir la aplicación en el navegador.
export function setLocalStorageValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorageValue(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function clearLocalStorage() {
    localStorage.clear();
}