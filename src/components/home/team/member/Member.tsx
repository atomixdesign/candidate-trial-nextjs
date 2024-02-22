import Image from 'next/image';

import styles from './Member.module.scss';
import { TeamSinglData } from '@/definitions/definitions';

/**
 * Represents a member component for displaying individual team members.
 * This component renders a card containing the member's name, principle, and image.
 *
 * @param props The properties for the Member component.
 * @param props.name The name of the team member.
 * @param props.principle The principle of the team member.
 * @param props.imageSrc The source URL of the image for the team member.
 * @param props.imgAlt The alternative text for the team member's image.
 * @returns The JSX structure for the member component.
 */
function Member(props: TeamSinglData) {
  const { name, principle, imageSrc, imgAlt } = props;
  return (
    <div className='col-md-4 col-lg-4'>
      <div className={styles.card}>
        <img src={imageSrc} className='card-img-top' alt={imgAlt} />
        <div className={styles.cardBody}>
          <span className='card-title'>{principle}</span>
          <h5 className='card-text'>{name}</h5>
        </div>
      </div>
    </div>
  );
}

export default Member;
