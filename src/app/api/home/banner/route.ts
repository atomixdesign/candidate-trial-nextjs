import homeBannerData from '@/data/home/homeBanner.json';

export async function GET() {
  return Response.json(homeBannerData);
}
