import { Button } from 'react-bootstrap';

import { getHomeBannerData } from '@/actions/actions';
import { Banner } from '@/definitions/definitions';

import styles from './HomeBanner.module.scss';

/**
 * Represents the banner component for the home page.
 * This component fetches data for the banner and renders the banner content accordingly.
 *
 * @returns The JSX structure for the home page banner.
 */
async function HomeBanner() {
  const data: Banner | false = await getHomeBannerData();
  if (!data) {
    return;
  }
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className='mb-5'>{data?.text}</h1>
        <Button variant='primary'>{data?.buttonText}</Button>
      </div>
      <i className='fi fi-rr-arrow-down'></i>
    </div>
  );
}

export default HomeBanner;
