'use client';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

import DesktopSitemap from './links/DesktopSitemap';
import MobileSitemap from './links/MobileSitemap';
import { Footer } from '@/definitions/definitions';
import OtherLinks from './links/OtherLinks';
import SocialMediaLinks from './links/SocialMediaLinks';

import styles from './Footer.module.scss';

function Footer({ footerData }: { footerData: Footer }) {
  const { sitemap, others, socialMedia } = footerData;
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.logo}>
          <a href='#'>
            <Image src='/company-logo-2.png' alt='Company logo' height={37} width={289} />
          </a>
        </div>
        <div className={styles.desktopMenu}>
          <div className='row'>
            <DesktopSitemap sitemap={sitemap} />
          </div>
        </div>
        <div className={`accordion-menu ${styles.mobileMenu}`}>
          <Accordion>
            <MobileSitemap sitemap={sitemap} />
          </Accordion>
        </div>
        <hr />
        <div className='row d-flex flex-wrap-reverse flex-lg-wrap'>
          <div className='col-lg-9'>
            <ul className={styles.quickLinks}>
              <OtherLinks others={others} />
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className={styles.socialMedia}>
              <SocialMediaLinks socialMedia={socialMedia} />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
