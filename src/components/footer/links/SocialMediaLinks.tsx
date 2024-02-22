import { SocialMediaLink } from '@/definitions/definitions';

function SocialMediaLinks({ socialMedia }: { socialMedia: SocialMediaLink[] }) {
  return socialMedia.map((media, linkIndex) => (
    <li key={linkIndex}>
      <a href={media.link}>
        <i className={media.icon}></i>
      </a>
    </li>
  ));
}

export default SocialMediaLinks;
