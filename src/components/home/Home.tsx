import HomeBanner from './homeBanner/HomeBanner';
import ThreeColumn from './threeColumn/ThreeColumn';
import Carousel from './carousel/Carousel';
import Team from './team/Team';
import { getCarouselData } from '@/actions/actions';
import { MainCarousel } from '@/definitions/definitions';

/**
 * Represents the home page component.
 * This component contains sections for a banner, a three-column layout, a carousel, and a team section.
 *
 * @returns The JSX structure for the home page.
 */
async function Home() {
  const carouselData: MainCarousel | false = await getCarouselData();
  return (
    <div>
      <div className='section pt-0 pb-0'>
        <HomeBanner />
      </div>
      <div className='section'>
        <ThreeColumn />
      </div>
      <div className='section dark'>
        <Carousel data={carouselData} />
      </div>
      <div className='section'>
        <Team />
      </div>
    </div>
  );
}

export default Home;
