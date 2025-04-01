import { NextResponse } from 'next/server';
import { servers } from '@/app/api/mock-data';

export async function GET(
  req: Request,
  { params }: { params: { serverId: string; channelId: string } }
) {
  const { serverId, channelId } = params;
  
  // Find the server with the matching ID
  const server = servers.find(s => s.id === serverId);
  
  if (!server) {
    return new NextResponse("Server not found", { status: 404 });
  }
  
  // Find the channel with the matching ID
  const channel = server.channels.find(c => c.id === channelId);
  
  if (!channel) {
    return new NextResponse("Channel not found", { status: 404 });
  }
  
  return NextResponse.json(channel);
} 