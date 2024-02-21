import { useEffect, useState } from 'react';

import { getWeatherData } from '@/actions/serverActions';
import { getWeatherPermissions } from '@/utils/weather';
import { GeoLocation, WeatherData } from '@/definitions/definitions';

/**
 * Represents the Weather component, responsible for fetching and displaying weather data.
 *
 * @returns JSX element representing weather information.
 */
function Weather() {
  const [location, setLocation] = useState<GeoLocation | false>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | false>(false);

  useEffect(() => {
    const getData = async () => {
      const geolocation: GeoLocation | false = await getWeatherPermissions();
      setLocation(geolocation);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const weatherRes: WeatherData | false = await getWeatherData(location);
      setWeatherData(weatherRes);
    };
    if (location) {
      getData();
    }
  }, [location]);

  if (!weatherData) {
    return null;
  }

  return (
    <div className='container text-end'>
      <div className='row'>
        <span>
          {weatherData.main?.temp}&deg; <i className='fi fi-rs-temperature-high' />
        </span>
      </div>
      <div className='row'>
        <h6>{weatherData.name}</h6>
      </div>
    </div>
  );
}

export default Weather;
