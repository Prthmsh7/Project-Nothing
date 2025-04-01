import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";

const f = createUploadthing();

const handleAuth = () => {
  try {
    console.log("UploadThing: Authentication attempt started");
    const { userId } = auth();
    console.log("UploadThing: Auth result:", { userId: userId || "No userId found" });
    
    // For development mode - provide a fallback user ID
    if (!userId && process.env.NODE_ENV !== "production") {
      console.log("UploadThing: Using development fallback user");
      return { userId: "dev-user-id" };
    }
    
    if (!userId) {
      console.log("UploadThing: Unauthorized access attempt");
      throw new Error("Unauthorized");
    }
    
    console.log("UploadThing: Authentication successful for userId:", userId);
    return { userId };
  } catch (error) {
    console.error("UploadThing: Authentication error:", error);
    // For development mode - provide a fallback user ID
    if (process.env.NODE_ENV !== "production") {
      console.log("UploadThing: Authentication error, using development fallback user");
      return { userId: "dev-user-id" };
    }
    throw new Error("Unauthorized");
  }
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(() => {
      console.log("UploadThing: Processing serverImage upload");
      return handleAuth();
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log("UploadThing: serverImage upload complete", { 
        metadata, 
        fileUrl: file.url,
        fileKey: file.key,
        fileName: file.name
      });
    }),
  messageFile: f(["image", "pdf"])
    .middleware(() => {
      console.log("UploadThing: Processing messageFile upload");
      return handleAuth();
    })
    .onUploadComplete(({ metadata, file }) => {
      console.log("UploadThing: messageFile upload complete", { 
        metadata, 
        fileUrl: file.url,
        fileKey: file.key,
        fileName: file.name
      });
    })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter; 