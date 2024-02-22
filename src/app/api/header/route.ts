import headerData from '@/data/header.json';

export async function GET() {
  return Response.json(headerData);
}
