import { Accordion } from 'react-bootstrap';

import { Link } from '@/definitions/definitions';

function MobileSitemap({ sitemap }: { sitemap: Link[] }) {
  return sitemap.map((link, linkIndex) => (
    <Accordion.Item eventKey={linkIndex.toString()} key={linkIndex}>
      <Accordion.Header>{link.title}</Accordion.Header>
      <Accordion.Body>
        <ul>
          {link.subLinks.map((subLink, subLinkIndex) => (
            <li key={subLinkIndex}>
              <a href={subLink.link}>{subLink.title}</a>
            </li>
          ))}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  ));
}

export default MobileSitemap;
