import carouselData from '@/data/home/carousel.json';

export async function GET() {
  return Response.json(carouselData);
}
