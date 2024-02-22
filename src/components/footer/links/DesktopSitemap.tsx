import { Link } from '@/definitions/definitions';

function DesktopSitemap({ sitemap }: { sitemap: Link[] }) {
  return sitemap.map((link, linkIndex) => (
    <div key={linkIndex} className='col-lg-3'>
      <h6>{link.title}</h6>
      <ul>
        {link.subLinks.map((subLink, subLinkIndex) => (
          <li key={subLinkIndex}>
            <a href={subLink.link}>{subLink.title}</a>
          </li>
        ))}
      </ul>
    </div>
  ));
}

export default DesktopSitemap;
