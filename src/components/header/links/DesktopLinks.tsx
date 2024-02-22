import Nav from 'react-bootstrap/Nav';

import { Links } from '@/definitions/definitions';

function DesktopLinks({ links }: { links: Links }) {
  return links.map((link, linkIndex) => (
    <div key={linkIndex} className='col-lg-4'>
      <h5>{link.title}</h5>
      <Nav className='ms-auto me-auto my-2 my-lg-0 flex-column sub-menu-wrapper'>
        {link.subLinks.map((subLink, subLinkIndex) => (
          <Nav.Link key={subLinkIndex} href={subLink.link}>
            {subLink.title}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  ));
}

export default DesktopLinks;
