import { auth } from "@clerk/nextjs";
import { db } from "@/app/lib/db";

// For development only - creates a fallback user when Clerk keys aren't set
const createDevProfile = async () => {
  // Check if we already have a dev profile
  const existingProfile = await db.profile.findFirst({
    where: {
      userId: "dev-user-id"
    }
  });

  if (existingProfile) {
    return existingProfile;
  }

  // Create a dev profile if one doesn't exist
  return await db.profile.create({
    data: {
      userId: "dev-user-id",
      name: "Development User",
      imageUrl: "/images/nothing-logo-dark.png",
      email: "dev@example.com"
    }
  });
};

export const currentProfile = async () => {
  try {
    const { userId } = auth();

    if (!userId) {
      // For development only - create a fallback user if Clerk keys aren't set
      if (process.env.NODE_ENV !== "production") {
        console.log("Using development fallback user (not authenticated with Clerk)");
        return await createDevProfile();
      }
      return null;
    }

    const profile = await db.profile.findUnique({
      where: {
        userId
      }
    });

    return profile;
  } catch (error) {
    // For development only - create a fallback user if Clerk authentication fails
    if (process.env.NODE_ENV !== "production") {
      console.log("Authentication error, using development fallback user");
      return await createDevProfile();
    }
    return null;
  }
}; 