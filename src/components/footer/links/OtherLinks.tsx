import { SubLink } from '@/definitions/definitions';

function OtherLinks({ others }: { others: SubLink[] }) {
  return others.map((other, linkIndex) => (
    <li key={linkIndex}>
      <a href={other.link}>{other.title}</a>
    </li>
  ));
}

export default OtherLinks;
