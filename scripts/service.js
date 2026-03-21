/*Buena noche instructor Alejandro, gracias por haberme compartido el código con el que trató de explicarme esta actividad,
gracias a eso pude hacerla. También, debo de admitir que, para terminar este código de una mnera agil, debí hacer uso de la IA
Chat GPT. Buen resto de fin de semana.*/

// Importaciones necesarias de los demás scripts que se necesitan para hacer lógica de negocio.
import { setLocalStorageValue } from "./persistance.js";
import { renderClima, mostrarError } from "./ui.js";
import { showSpinner, hideSpinner } from "./state.js";

// Función que capta la ciudad y la suministra a la API para obtener los reesultados de la consulta que se necesitan imprimir.
export async function onClick(ciudad) {
    try {
        showSpinner();

        // Se hace el fetch a la API pasando como parametro la ciudad escrita en el input de la aplicación.
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}`
        );

        // Verificación si hay o no respuesta de la API.
        if (!response.ok) {
            throw new Error("Error al consultar la API de geolocalización.");
        }

        const json = await response.json();

        // Verificación si está la ciudad en el formato json brindado por la API.
        if (!json.results) {
            throw new Error("La ciudad no existe.");
        }

        // Verificación si hay otras ciudades pero que no coinciden con la que se busca.
        if (json.results.length === 0) {
            throw new Error("No se encontraron resultados para esa ciudad.");
        }

        const ciudadResultado = json.results[0];
        const latitud = ciudadResultado.latitude;
        const longitud = ciudadResultado.longitude;

        //Ahora, se hace el fetch enviando la latitud y longitud de la ciudad que se consulta, habiendo sido obtenidos estos datos de la respuesta del primer fetch.
        const response2 = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true&timezone=auto`
        );

        if (!response2.ok) {
            throw new Error("Error al consultar la API del clima.");
        }

        const clima = await response2.json();

        // Se agrupan todos los datos obtenidos del segundo fetch.
        const data = {
            ciudad,
            temperature: clima.current_weather.temperature,
            temperatureUnit: clima.current_weather_units.temperature,
            windSpeed: clima.current_weather.windspeed,
            windSpeedUnit: clima.current_weather_units.windspeed,
            weatherCode: clima.current_weather.weathercode,
            weatherCodeUnit: clima.current_weather_units.weathercode,
            time: clima.current_weather.time,
            timeUnit: clima.current_weather_units.time
        };

        // Se guarda TODO el objeto
        setLocalStorageValue("clima", data);

        // Se envían datos a función de impresión en ui.js .
        renderClima(data);

    } catch (error) {
        mostrarError(error.message);
    } finally {
        hideSpinner();
    }
}