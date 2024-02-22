'use client';

import { useMemo } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import NavigationIcon, { IconTypes } from './navigationIcon/NavigationIcon';

import './Carousel.scss';

/**
 * Represents a wrapper component for the carousel.
 * This component wraps the provided slides with a title and renders them within a carousel.
 *
 * @param props The properties for the CarouselWrapper component.
 * @param props.title The title for the carousel.
 * @param props.slides An array of slide components to be rendered within the carousel.
 * @returns The JSX structure for the carousel wrapper.
 */
function CarouselWrapper(props: { title: string; slides: any[] }) {
  const { title, slides } = props;

  const wrappedSlides: React.ReactNode[] = useMemo(() => {
    return slides.map((s, i) => <Carousel.Item key={i}>{s}</Carousel.Item>);
  }, [slides]);

  return (
    <div className='container'>
      <div className='row'>
        <h3 className='text-center mb-5'>{title}</h3>
      </div>
      <Carousel
        controls
        indicators
        prevIcon={<NavigationIcon iconType={IconTypes.LEFT} />}
        nextIcon={<NavigationIcon iconType={IconTypes.RIGHT} />}
      >
        {wrappedSlides}
      </Carousel>
    </div>
  );
}

export default CarouselWrapper;
