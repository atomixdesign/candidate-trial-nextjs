import { getCarouselData } from '@/actions/rawActions';
import Carousel from '@/components/home/carousel/Carousel';
import HomeBanner from '@/components/home/homeBanner/HomeBanner';
import Team from '@/components/home/team/Team';
import ThreeColumn from '@/components/home/threeColumn/ThreeColumn';
import { MainCarousel } from '@/definitions/definitions';

/**
 * Represents the home page component.
 * This component contains sections for a banner, a three-column layout, a carousel, and a team section.
 *
 * @returns The JSX structure for the home page.
 */
export default function Page() {
  const carouselData: MainCarousel = getCarouselData();
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
