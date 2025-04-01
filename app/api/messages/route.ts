import { NextResponse } from 'next/server';

// Mock messages data
const messages = {
  // Map channelId to messages
  "1": [
    { id: "msg1", content: "Welcome to the general channel!", userId: "user1", timestamp: new Date().toISOString() },
    { id: "msg2", content: "Hello everyone!", userId: "user2", timestamp: new Date().toISOString() }
  ],
  "2": [
    { id: "msg3", content: "Important announcement!", userId: "user1", timestamp: new Date().toISOString() },
  ],
  "3302071e-b85d-4d41-870b-d4aeb275fbd6": [
    { id: "msg4", content: "Welcome to the special channel!", userId: "user3", timestamp: new Date().toISOString() },
    { id: "msg5", content: "This is a test message", userId: "user2", timestamp: new Date().toISOString() },
    { id: "msg6", content: "Let's fix all the errors", userId: "user1", timestamp: new Date().toISOString() }
  ]
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const channelId = searchParams.get('channelId');
  
  if (!channelId) {
    return new NextResponse("Channel ID is required", { status: 400 });
  }
  
  const channelMessages = messages[channelId as keyof typeof messages] || [];
  
  return NextResponse.json(channelMessages);
} 