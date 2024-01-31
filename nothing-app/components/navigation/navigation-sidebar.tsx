
import { currentprofile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { NavigationAction } from "./navigation-action";

export const NavigationSidebar = async () => {
  try {
    const profile = await currentprofile();


    if (!profile) {
      return redirect("/");
    }

    const servers = await db.server.findMany({
      where: {
        members: {
          some: { profileId: profile.id },
        },
      },
    });

    return (
      <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] py-3">
        <NavigationAction />
      </div>
    );
  } catch (error) {
    console.error("Error in NavigationSidebar:", error);
    // Handle the error or redirect as needed
    return redirect("/error");
  }
};
