import Grid from './grid/Grid';
import CarouselWrapper from './carousel/Carousel';
import { getTeamData } from '@/actions/actions';
import { Team } from '@/definitions/definitions';

/**
 * Represents a component displaying team information.
 * This component fetches team data and renders it within a grid or carousel wrapper, depends on the screen size.
 *
 * @returns The JSX structure for displaying team information.
 */
async function Team() {
  const members: Team | false = await getTeamData();

  if (!members) {
    return;
  }

  return (
    <>
      <Grid title='Team section' members={members} />
      <CarouselWrapper title='Team section' members={members} />
    </>
  );
}

export default Team;
