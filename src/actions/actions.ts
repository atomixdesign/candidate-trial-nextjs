import routeHelper from '@/helpers/routes';
import {
  HTTP_Methods,
  Cache_Methods,
  Header,
  Banner,
  ThreeColumn,
  MainCarousel,
  Team,
} from '@/definitions/definitions';

/**
 * Fetches header data from the server.
 * @returns {Promise<Header | false>} A promise that resolves with the header data if successful,
 * or `false` if there was an error fetching the data.
 */
export async function getHeaderData(): Promise<Header | false> {
  try {
    const res = await fetch(`${routeHelper.HOST}/api/header`, {
      method: HTTP_Methods.GET,
      cache: Cache_Methods.FORCE_CACHE,
    });
    return await res.json();
  } catch (error) {
    console.error('Data fetching error', error);
    return false;
  }
}

/**
 * Fetches home banner data from the server.
 * @returns {Promise<Banner | false>} A promise that resolves with the banner data if successful,
 * or `false` if there was an error fetching the data.
 */
export async function getHomeBannerData(): Promise<Banner | false> {
  try {
    const res = await fetch(`${routeHelper.HOST}/api/home/banner`, {
      method: HTTP_Methods.GET,
      cache: Cache_Methods.FORCE_CACHE,
    });
    return await res.json();
  } catch (error) {
    console.error('Data fetching error', error);
    return false;
  }
}

/**
 * Fetches three coulumn data from the server.
 * @returns {Promise<ThreeColumn | false>} A promise that resolves with the three column data if successful,
 * or `false` if there was an error fetching the data.
 */
export async function getThreeColumnData(): Promise<ThreeColumn | false> {
  try {
    const res = await fetch(`${routeHelper.HOST}/api/home/threeColumn`, {
      method: HTTP_Methods.GET,
      cache: Cache_Methods.FORCE_CACHE,
    });
    return await res.json();
  } catch (error) {
    console.error('Data fetching error', error);
    return false;
  }
}

/**
 * Fetches carousel data from the server.
 * @returns {Promise<MainCarousel | false>} A promise that resolves with the carousel data if successful,
 * or `false` if there was an error fetching the data.
 */
export async function getCarouselData(): Promise<MainCarousel | false> {
  try {
    const res = await fetch(`${routeHelper.HOST}/api/home/carousel`, {
      method: HTTP_Methods.GET,
      cache: Cache_Methods.NO_STORE,
    });
    return await res.json();
  } catch (error) {
    console.error('Data fetching error', error);
    return false;
  }
}

/**
 * Fetches team data from the server.
 * @returns {Promise<Team | false>} A promise that resolves with the team data if successful,
 * or `false` if there was an error fetching the data.
 */
export async function getTeamData(): Promise<Team | false> {
  try {
    const res = await fetch(`${routeHelper.HOST}/api/home/team`, {
      method: HTTP_Methods.GET,
      cache: Cache_Methods.NO_STORE,
    });
    return await res.json();
  } catch (error) {
    console.error('Data fetching error', error);
    return false;
  }
}
