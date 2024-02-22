'use client';

import { useMemo } from 'react';

import Carousel from '@/components/carousel/Carousel';
import Slide from './slide/Slide';
import { MainCarousel } from '@/definitions/definitions';

/**
 * Represents a wrapper component for the carousel section.
 * This component receives carousel data and renders the carousel accordingly.
 *
 * @param data The carousel data to be displayed.
 * @returns The JSX structure for the carousel wrapper.
 */
function CarouselWrapper({ data }: { data: MainCarousel | false }) {
  const slides: React.FC[] | any[] = useMemo(() => {
    if (!data) {
      return [];
    }
    return data.map(d => <Slide key={d.id} data={d} />);
  }, [data]);

  return <Carousel title='Carousel section New' slides={slides} />;
}

export default CarouselWrapper;
