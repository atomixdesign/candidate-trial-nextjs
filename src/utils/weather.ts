import { GeoLocation, Position } from '@/definitions/definitions';

export const getWeatherPermissions = async (): Promise<GeoLocation | false> => {
  try {
    const position: Position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return {
      latitude: position?.coords?.latitude,
      longitude: position?.coords?.longitude,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return false;
  }
};
