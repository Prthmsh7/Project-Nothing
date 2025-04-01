import { v4 as uuidv4 } from "uuid";
import { NextResponse } from "next/server";

import { currentProfile } from "@/app/lib/current-profile";
import { db } from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();
    console.log("Server creation request received:", { name, imageUrl });
    
    const profile = await currentProfile();
    console.log("Profile for server creation:", profile ? { id: profile.id, name: profile.name } : "No profile found");

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Validate imageUrl
    if (!imageUrl || typeof imageUrl !== 'string') {
      console.error("Invalid imageUrl:", imageUrl);
      return new NextResponse("Invalid image URL", { status: 400 });
    }

    console.log("Creating server with data:", {
      profileId: profile.id,
      name,
      imageUrl,
      inviteCode: "Will be generated"
    });

    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        inviteCode: uuidv4(),
        channels: {
          create: [
            {
              name: "general",
              profileId: profile.id,
            }
          ]
        },
        members: {
          create: [
            {
              profileId: profile.id,
              role: "ADMIN",
            }
          ]
        }
      }
    });

    console.log("Server created successfully:", { serverId: server.id, name: server.name });
    return NextResponse.json(server);
  } catch (error) {
    console.error("[SERVERS_POST] Detailed error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 