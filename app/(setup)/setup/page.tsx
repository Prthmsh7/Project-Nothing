import { redirect } from "next/navigation";
import { initialProfile } from "@/app/lib/initial-profile";
import { db } from "@/app/lib/db";
import { InitialModal } from "@/app/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <InitialModal />
  );
}

export default SetupPage; 