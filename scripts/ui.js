/*Buena noche instructor Alejandro, gracias por haberme compartido el código con el que trató de explicarme esta actividad,
gracias a eso pude hacerla. También, debo de admitir que, para terminar este código de una mnera agil debí, hacer uso de la IA
Chat GPT. Buen resto de fin de semana.*/

/* Aquí está toda la lógica de la interfaz de usaurio para captar los datos */

/* Función que escucha el evento del bóton de búsqueda y capta el dato escrito en el input que debe ser una ciudad*/
export function searchElements(callback) {
    const buscarBtn = document.getElementById("buscar-btn");

    buscarBtn.addEventListener("click", () => {
        const input = document.getElementById("ciudad-input");
        const ciudad = input.value.trim();

        //Aquí verifica si no se ha escrito una ciudad en el input.
        if (!ciudad) {
            mostrarError("Por favor, escribe una ciudad.");
            return;
        }

        // Se manda como parametro la ciudad del input a la función del service.js 
        callback(ciudad);
    });
}

// Función para imprimir los datos obtenidos de la API con estilos.
export function renderClima(data) {
    const {
        ciudad,
        temperature,
        temperatureUnit,
        windSpeed,
        windSpeedUnit,
        weatherCode,
        weatherCodeUnit,
        time,
        timeUnit
    } = data;

    const imprimirInfo = `
        <div class="card"><strong>Ciudad:</strong> ${ciudad}</div>
        <div class="card"><strong>Temperatura:</strong> ${temperature} ${temperatureUnit}</div>
        <div class="card"><strong>Viento:</strong> ${windSpeed} ${windSpeedUnit}</div>
        <div class="card"><strong>Código clima:</strong> ${weatherCode} ${weatherCodeUnit}</div>
        <div class="card"><strong>Hora:</strong> ${time} ${timeUnit}</div>
    `;

    const span = document.getElementById("time");
    span.innerHTML = imprimirInfo;
}

// Función para mostrar posibles advertencias de errores.
export function mostrarError(mensaje) {
    const span = document.getElementById("time");
    span.innerHTML = `<p style="color:red;"><strong>${mensaje}</strong></p>`;
}