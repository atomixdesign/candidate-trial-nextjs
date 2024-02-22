import { Banner, Header, MainCarousel, Team, ThreeColumn } from '@/definitions/definitions';
import headerData from '@/data/header.json';
import homeBannerData from '@/data/home/homeBanner.json';
import threeColumnData from '@/data/home/threeColumn.json';
import carouselData from '@/data/home/carousel.json';
import teamData from '@/data/home/team.json';

export function getHeaderData(): Header {
  return JSON.parse(JSON.stringify(headerData));
}

export function getHomeBannerData(): Banner {
  return JSON.parse(JSON.stringify(homeBannerData));
}

export function getThreeColumnData(): ThreeColumn {
  return JSON.parse(JSON.stringify(threeColumnData));
}

export function getCarouselData(): MainCarousel {
  return JSON.parse(JSON.stringify(carouselData));
}

export function getTeamData(): Team {
  return JSON.parse(JSON.stringify(teamData));
}
