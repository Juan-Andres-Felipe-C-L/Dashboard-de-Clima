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
    
    const temperature = clima.current_weather.temperature;
    const temperatureUnit = clima.current_weather_units.temperature;
    
    const windSpeed = clima.current_weather.windspeed;
    const windSpeedUnit = clima.current_weather_units.windspeed;
    
    const weatherCode = clima.current_weather.weathercode;
    const weatherCodeUnit = clima.current_weather_units.weathercode;
    
    const time = clima.current_weather.time;
    const timeUnit = clima.current_weather_units.time;

    const imprimirInfo = `Nombre del aciudad: ${ciudad}. <br>Temperatura actual (°C): ${temperature}. Está en formato: ${temperatureUnit}. 
    <br>Velocidad del viento: ${windSpeed}. Está en formato: ${windSpeedUnit}. <br>El código del clima es: ${weatherCode}. Está en formato: ${weatherCodeUnit}.
    <br>El tiempo es: ${time}. Está en formato: ${timeUnit}.`;
    const span = document.getElementById("time");
    span.textContent = imprimirInfo;
}