'use client';

import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

import styles from './Footer.module.scss';

function Footer() {
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
            <div className='col-lg-3'>
              <h6>About</h6>
              <ul>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h6>Services</h6>
              <ul>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h6>Footer links</h6>
              <ul>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3'>
              <h6>Footer links</h6>
              <ul>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
                <li>
                  <a href='#'>About menu item 1</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`accordion-menu ${styles.mobileMenu}`}>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>About</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Services</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>Footer links </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>Footer links</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                  <li>
                    <a href='#'>About menu item 1</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <hr />
        <div className='row d-flex flex-wrap-reverse flex-lg-wrap'>
          <div className='col-lg-9'>
            <ul className={styles.quickLinks}>
              <li>
                <a href='#'>© 2022 Company Inc.</a>
              </li>
              <li>
                <a href='#'>Terms and conditions</a>
              </li>
              <li>
                <a href='#'>Privacy policy</a>
              </li>
              <li>
                <a href='#'>Website by atomix</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className={styles.socialMedia}>
              <li>
                <a href='#'>
                  <i className='fi fi-brands-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fi fi-brands-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fi fi-brands-instagram'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fi fi-brands-linkedin'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fi fi-brands-youtube'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
