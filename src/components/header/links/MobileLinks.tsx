import { NavDropdown } from 'react-bootstrap';

import { Links } from '@/definitions/definitions';

function MobileLinks({ links }: { links: Links }) {
  return links.map((link, linkIndex) => (
    <NavDropdown key={linkIndex} title={link.title} id='navbarScrollingDropdown'>
      {link.subLinks.map((subLink, subLinkIndex) => (
        <NavDropdown.Item key={subLinkIndex} href={subLink.link}>
          {subLink.title}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  ));
}

export default MobileLinks;
