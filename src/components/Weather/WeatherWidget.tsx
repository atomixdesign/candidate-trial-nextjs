import React, { useEffect, useState } from 'react'
import './Weather.component.scss'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import axios from 'axios';

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=34.9285&lon=138.6007&appid=${API_KEY}`;
    const fetchData = async () => {
        try {
            const response = await axios.get(endpoint);
            setWeatherData(response.data);
            console.log(API_KEY)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <main className='weather_main'>
            <div className="weather-container">
                <div className="weather-target" tabIndex={0}>
                    <TiWeatherPartlySunny />
                </div>
                <aside className="weather-popup">
                    {weatherData ? (
                        <>
                            <h2>{weatherData.name}</h2>
                            <p>Temperature: {weatherData.main.temp}°C</p>
                            <p>Description: {weatherData.weather[0].description}</p>
                            <p>Feels like : {weatherData.main.feels_like}°C</p>
                            <p>Humidity : {weatherData.main.humidity}%</p>
                            <p>Pressure : {weatherData.main.pressure}</p>
                            <p>Wind Speed : {weatherData.wind.speed}m/s</p>
                        </>
                    ) : (
                        <p>Loading weather data...</p>
                    )}
                </aside>
            </div>
        </main>

    )
}

export default WeatherWidget