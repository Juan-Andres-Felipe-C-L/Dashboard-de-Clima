/*Buena noche instructor Alejandro, gracias por haberme compartido el código con el que trató de explicarme esta actividad,
gracias a eso pude hacerla. También, debo de admitir que, para terminar este código de una mnera agil, debí hacer uso de la IA
Chat GPT. Buen resto de fin de semana.*/


// Aquí están todos estados del Spinner.
const spinner = document.getElementById("spinner");

export function showSpinner() {
    spinner.classList.remove("hide");
    spinner.classList.add("show");
}

export function hideSpinner() {
    spinner.classList.remove("show");
    spinner.classList.add("hide");
}