import threeColumnData from '@/data/home/threeColumn.json';

export async function GET() {
  return Response.json(threeColumnData);
}
