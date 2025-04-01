import { currentUser } from "@clerk/nextjs";
import { db } from "@/app/lib/db";

// For development only
const createDevProfile = async () => {
  return await db.profile.upsert({
    where: {
      userId: "dev-user-id"
    },
    update: {},
    create: {
      userId: "dev-user-id",
      name: "Development User",
      imageUrl: "/images/nothing-logo-dark.png",
      email: "dev@example.com"
    }
  });
};

export const initialProfile = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      // For development only
      if (process.env.NODE_ENV !== "production") {
        console.log("Using development fallback user (not authenticated with Clerk)");
        return await createDevProfile();
      }
      throw new Error("User not found");
    }

    const profile = await db.profile.findUnique({
      where: {
        userId: user.id
      }
    });

    if (profile) {
      return profile;
    }

    const newProfile = await db.profile.create({
      data: {
        userId: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress
      }
    });

    return newProfile;
  } catch (error) {
    // For development only
    if (process.env.NODE_ENV !== "production") {
      console.log("Authentication error, using development fallback user");
      return await createDevProfile();
    }
    throw error;
  }
}; 