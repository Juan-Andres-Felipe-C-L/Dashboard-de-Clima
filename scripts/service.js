import { setLocalStorageValue } from "./persistance.js";

export async function onClick(ciudad) {
    const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}`,
    );
    const json = await response.json();
    const resultados = json.results;
    const ciudadResultado = resultados[0];
    const latitud = ciudadResultado.latitude;
    const longitud = ciudadResultado.longitude;

    const response2 = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true&current_weather_units=true&timezone=auto`,
    );
    const clima = await response2.json();
     
    setLocalStorageValue("ciudad", ciudad);
    
    const temperature = clima.current_weather.temperature;
    const temperatureUnit = clima.current_weather_units.temperature;
    setLocalStorageValue("temperature", temperature);
    setLocalStorageValue("temperatureUnit", temperatureUnit);
    
    const windSpeed = clima.current_weather.windspeed;
    const windSpeedUnit = clima.current_weather_units.windspeed;
    setLocalStorageValue("windSpeed", windSpeed);
    setLocalStorageValue("windSpeedUnit", windSpeedUnit);
    
    const weatherCode = clima.current_weather.weathercode;
    const weatherCodeUnit = clima.current_weather_units.weathercode;
    setLocalStorageValue("weatherCode", weatherCode);
    setLocalStorageValue("weatherCodeUnit", weatherCodeUnit);
    
    const time = clima.current_weather.time;
    const timeUnit = clima.current_weather_units.time;
    setLocalStorageValue("time", time);
    setLocalStorageValue("timeUnit", timeUnit);

    const imprimirInfo = `<p><strong>Nombre de la ciudad: </strong>${ciudad}.</p>
    <p><strong>Temperatura actual (°C): </strong>${temperature}. <strong>Está en formato: </strong>${temperatureUnit}.</p>
    <p><strong>Velocidad del viento: </strong>${windSpeed}. <strong>Está en formato: </strong>${windSpeedUnit}.</p>
    <p><strong>El código del clima es: </strong>${weatherCode}. <strong>Está en formato: </strong>${weatherCodeUnit}.</p>
    <p><strong>El tiempo es: </strong>${time}. <strong>Está en formato: </strong>${timeUnit}.</p>`;
    const span = document.getElementById("time");
    span.innerHTML = imprimirInfo;
}