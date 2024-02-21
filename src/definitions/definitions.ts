export enum HTTP_Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum Cache_Methods {
  FORCE_CACHE = 'force-cache',
  NO_STORE = 'no-store',
}

export type Header = {
  logoImagePath: string;
  logoImageAlt: string;
  about: {
    imagePath: string;
    imageAlt: string;
  };
};

export type Banner = {
  text: string;
  buttonText: string;
};

export type ThreeColumn = {
  title: string;
  column1: {
    header: string;
    image: {
      src: string;
      alt: string;
    };
  };
  column2: {
    p1: string;
    p2: string;
  };
  column3: {
    ul: string[];
    p: string;
  };
};

export type MainCarouselSinglData = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type MainCarousel = MainCarouselSinglData[];

export type TeamSinglData = {
  id: number;
  name: string;
  principle: string;
  imageSrc: string;
  imgAlt: string;
};

export type Team = TeamSinglData[];

export type WeatherData = {
  main: {
    temp: number;
  };
  name: string;
};

export type GeoLocation = {
  latitude: number;
  longitude: number;
};

export type Position = {
  coords: {
    latitude: number;
    longitude: number;
  };
};
