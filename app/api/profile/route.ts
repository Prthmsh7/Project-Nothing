import { currentUser, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/app/lib/db";

export async function GET() {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const profile = await db.profile.findUnique({
      where: {
        userId: user.id
      }
    });

    if (profile) {
      return NextResponse.json(profile);
    }

    const newProfile = await db.profile.create({
      data: {
        userId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress
      }
    });

    return NextResponse.json(newProfile);
  } catch (error) {
    console.log("[PROFILE_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 