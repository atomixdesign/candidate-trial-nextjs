'use client';

import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown } from 'react-bootstrap';

import routesHelper from '@/helpers/routes';
import { Header } from '@/definitions/definitions';
import Weather from './weather/Weather';

import styles from './Header.module.scss';

function Header({ headerData }: { headerData: Header | false }) {
  if (!headerData) {
    return;
  }

  const { logoImagePath, logoImageAlt, about } = headerData;

  return (
    <header className={styles.header}>
      <Navbar expand='lg'>
        <Container fluid className={styles.container}>
          <Navbar.Brand href={routesHelper.HOME} bsPrefix={`navbar ${styles.logo}`}>
            <Image src={logoImagePath} alt={logoImageAlt} width={289} height={37} priority />
          </Navbar.Brand>
          <div className={styles.toggler}>
            <Navbar.Toggle aria-controls='navbarScroll' />
          </div>
          <Navbar.Collapse id='navbarScroll' bsPrefix={`navbar-collapse ${styles.navbarCollapse}`}>
            <Nav className='ms-auto me-auto my-2 my-lg-0'>
              <NavDropdown title='About' id='navbarScrollingDropdown'>
                <div className='desktop-menu'>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <Image
                          src={about?.imagePath}
                          alt={about?.imageAlt}
                          width={296}
                          height={348.82}
                        />
                      </div>
                      <div className='col-lg-4'>
                        <h5>About sample link 1</h5>
                        <Nav className='ms-auto me-auto my-2 my-lg-0 flex-column sub-menu-wrapper'>
                          <Nav.Link href='#action1'>About menu item 1</Nav.Link>
                          <Nav.Link href='#action2'>About menu item 2</Nav.Link>
                          <Nav.Link href='#action3'>About menu item 3</Nav.Link>
                          <Nav.Link href='#action4'>About menu item 4</Nav.Link>
                        </Nav>
                      </div>
                      <div className='col-lg-4'>
                        <h5>About sample link 2</h5>
                        <Nav className='ms-auto me-auto my-2 my-lg-0 flex-column sub-menu-wrapper'>
                          <Nav.Link href='#action1'>About menu item 1</Nav.Link>
                          <Nav.Link href='#action2'>About menu item 2</Nav.Link>
                          <Nav.Link href='#action3'>About menu item 3</Nav.Link>
                          <Nav.Link href='#action4'>About menu item 4</Nav.Link>
                        </Nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mobile-menu'>
                  <NavDropdown title='About sample link 1' id='navbarScrollingDropdown'>
                    <NavDropdown.Item href='#action1'>About menu item 1</NavDropdown.Item>
                    <NavDropdown.Item href='#action2'>About menu item 2</NavDropdown.Item>
                    <NavDropdown.Item href='#action3'>About menu item 3</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>About menu item 4</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title='About sample link 2' id='navbarScrollingDropdown'>
                    <NavDropdown.Item href='#action1'>About menu item 1</NavDropdown.Item>
                    <NavDropdown.Item href='#action2'>About menu item 2</NavDropdown.Item>
                    <NavDropdown.Item href='#action3'>About menu item 3</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>About menu item 4</NavDropdown.Item>
                  </NavDropdown>
                </div>
              </NavDropdown>
              <Nav.Link href='/services'>Services</Nav.Link>
              <Nav.Link href='/faqs'>FAQs</Nav.Link>
              <Nav.Link href='news'>News</Nav.Link>
            </Nav>
            <Button variant='secondary' bsPrefix={`btn btn-secondary ${styles.contactUs}`}>
              Contact Us
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Weather />
    </header>
  );
}

export default Header;
