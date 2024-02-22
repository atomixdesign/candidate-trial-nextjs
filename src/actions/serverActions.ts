'use server';

import { HTTP_Methods, Cache_Methods, GeoLocation } from '@/definitions/definitions';

/**
 * Fetches weather data from the OpenWeatherMap API based on the provided location coordinates.
 *
 * @param location The location coordinates (latitude and longitude) for which to fetch weather data.
 * @returns A Promise that resolves to the fetched weather data, or false if an error occurs.
 */
export async function getWeatherData(location: GeoLocation | false) {
  try {
    const { latitude, longitude } = location || {};
    const appID = process.env.OPEN_WEATHER_APP_ID;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${appID}&units=metric`,
      {
        method: HTTP_Methods.GET,
        cache: Cache_Methods.NO_STORE,
      }
    );
    return await res.json();
  } catch (error) {
    console.error('Data fetching error', error);
    return false;
  }
}
