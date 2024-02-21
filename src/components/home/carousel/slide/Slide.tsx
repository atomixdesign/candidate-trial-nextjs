import { Button } from 'react-bootstrap';
import Image from 'next/image';

import { MainCarouselSinglData } from '@/definitions/definitions';

import styles from './Slide.module.scss';

type DataProps = MainCarouselSinglData & { id?: number };

/**
 * Represents a slide component for the carousel.
 * This component displays an image, title, description, and a button within a slide.
 *
 * @param data The data for the slide, including image source, alt text, title, and description.
 * @returns The JSX structure for the slide.
 */
function Slide({ data }: { data: DataProps }) {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-5 col-lg-5'>
        <div className={styles.image}>
          <Image src={data.imageSrc} alt={data.imageAlt} height={416} width={627} />
        </div>
      </div>
      <div className={`col-md-7 col-lg-7 ${styles.details}`}>
        <h5 className={styles.title}>{data.title}</h5>
        <p className={styles.description}>{data.description}</p>
        <Button variant='primary'>Button</Button>
      </div>
    </div>
  );
}

export default Slide;
