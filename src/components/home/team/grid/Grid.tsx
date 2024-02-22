import { useMemo } from 'react';

import Member from '../member/Member';
import { Team } from '@/definitions/definitions';

/**
 * Represents a grid component for displaying team members.
 * This component renders team members within a grid layout.
 *
 * @param title The title for the grid.
 * @param members An array of team members to be displayed.
 * @returns The JSX structure for the grid component.
 */
function Grid({ title, members }: { title: string; members: Team }) {
  const membersComponents = useMemo(
    () =>
      members.map(m => (
        <Member
          key={m.id}
          id={m.id}
          name={m.name}
          principle={m.principle}
          imageSrc={m.imageSrc}
          imgAlt={m.imgAlt}
        />
      )),
    [members]
  );

  return (
    <div className='container d-none d-md-block'>
      <div className='row'>
        <h3 className='text-center mb-5'>{title}</h3>
      </div>
      <div className='row'>{membersComponents}</div>
    </div>
  );
}

export default Grid;
