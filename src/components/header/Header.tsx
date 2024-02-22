'use client';

import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown } from 'react-bootstrap';

import routesHelper from '@/helpers/routes';
import { Header } from '@/definitions/definitions';
import DesktopLinks from './links/DesktopLinks';
import MobileLinks from './links/MobileLinks';
import Weather from './weather/Weather';

import styles from './Header.module.scss';

function Header({ headerData }: { headerData: Header }) {
  const { logoImagePath, logoImageAlt, about, otherLinks, contact } = headerData;
  return (
    <header className={styles.header}>
      <Navbar expand='lg'>
        <Container fluid className={styles.container}>
          <Navbar.Brand href={routesHelper.HOME} bsPrefix={`navbar ${styles.logo}`}>
            <Image src={logoImagePath} alt={logoImageAlt} width={289} height={37} priority />
          </Navbar.Brand>
          <Weather />
          <div className={styles.toggler}>
            <Navbar.Toggle aria-controls='navbarScroll' />
          </div>
          <Navbar.Collapse id='navbarScroll' bsPrefix={`navbar-collapse ${styles.navbarCollapse}`}>
            <Nav className='ms-auto me-auto my-2 my-lg-0'>
              <NavDropdown title={about.title} id='navbarScrollingDropdown'>
                <div className='desktop-menu'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <Image
                          src={about.imagePath}
                          alt={about.imageAlt}
                          width={296}
                          height={348.82}
                        />
                      </div>
                      <DesktopLinks links={about.links} />
                    </div>
                  </div>
                </div>
                <div className='mobile-menu'>
                  <MobileLinks links={about.links} />
                </div>
              </NavDropdown>
              {otherLinks.map((otherLink, i) => (
                <Nav.Link key={i} href={otherLink.link}>
                  {otherLink.title}
                </Nav.Link>
              ))}
            </Nav>
            <Button variant='secondary' bsPrefix={`btn btn-secondary ${styles.contactUs}`}>
              {contact.label}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
