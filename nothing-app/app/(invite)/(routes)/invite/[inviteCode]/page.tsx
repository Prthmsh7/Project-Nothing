import { currentprofile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentprofile();

  if (!profile) {
    return redirectToSignIn();
  }

  if (!params.inviteCode) {
    return redirect("/");
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) {
    return redirect(`/servers/${existingServer.id}`);
  }

  // Find the server by inviteCode
  const serverToUpdate = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
    },
  });

  if (serverToUpdate) {
    // Update the server by adding a new member
    const updatedServer = await db.server.update({
      where: {
        id: serverToUpdate.id,
      },
      data: {
        members: {
          create: [
            {
              profileId: profile.id,
            },
          ],
        },
      },
    });

    if (updatedServer) {
      return redirect(`/servers/${updatedServer.id}`);
    }
  }

  return null;
};

export default InviteCodePage;
