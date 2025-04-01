import { NextResponse } from 'next/server';
import { servers } from '@/app/api/mock-data';

export async function GET(
  req: Request,
  { params }: { params: { serverId: string } }
) {
  const { serverId } = params;
  
  // Find the server with the matching ID
  const server = servers.find(s => s.id === serverId);
  
  if (!server) {
    return new NextResponse("Server not found", { status: 404 });
  }
  
  return NextResponse.json(server);
} 