import teamData from '@/data/home/team.json';

export async function GET() {
  return Response.json(teamData);
}
