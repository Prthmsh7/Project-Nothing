import { redirect } from "next/navigation";

import { ServerSidebar } from "@/app/components/server/server-sidebar";

interface ServerIdLayoutProps {
  children: React.ReactNode;
  params: { serverId: string };
}

const ServerIdLayout = async ({
  children,
  params,
}: ServerIdLayoutProps) => {
  const { serverId } = params;

  // In a real app, you might check if the user has access to this server
  // and redirect if not authorized

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSidebar serverId={serverId} />
      </div>
      <main className="h-full md:pl-60">
        {children}
      </main>
    </div>
  );
}

export default ServerIdLayout; 