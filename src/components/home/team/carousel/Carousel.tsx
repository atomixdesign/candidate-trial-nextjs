'use client';

import { useMemo } from 'react';

import Carousel from '@/components/carousel/Carousel';
import Slide from '../member/Member';
import { Team } from '@/definitions/definitions';

/**
 * Represents a wrapper component for the carousel.
 * This component wraps the provided team members with a title and renders them within a carousel.
 *
 * @param title The title for the carousel.
 * @param members An array of team members to be displayed within the carousel.
 * @returns The JSX structure for the carousel wrapper.
 */
function CarouselWrapper({ title, members }: { title: string; members: Team }): React.ReactElement {
  const slides = useMemo(
    () =>
      members.map(m => (
        <Slide
          key={m.id}
          id={m.id}
          name={m.name}
          principle={m.principle}
          imageSrc={m.imageSrc}
          imgAlt={m.imgAlt}
        />
      )),
    [members]
  );

  return (
    <div className='d-sm-block d-md-none'>
      <Carousel title={title} slides={slides} />
    </div>
  );
}

export default CarouselWrapper;
