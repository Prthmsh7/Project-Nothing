"use client";

import { Hash, Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/app/lib/utils";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Separator } from "@/app/components/ui/separator";
import { Server, Channel, fetchServerById } from "@/app/lib/server-service";

interface ServerSidebarProps {
  serverId: string;
}

export const ServerSidebar = ({ serverId }: ServerSidebarProps) => {
  const router = useRouter();
  const params = useParams();
  const [server, setServer] = useState<Server | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServer = async () => {
      try {
        const serverData = await fetchServerById(serverId);
        setServer(serverData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching server:', err);
        setError('Could not load server data');
        setLoading(false);
      }
    };

    loadServer();
  }, [serverId]);

  if (loading) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Loading server...
        </p>
      </div>
    );
  }

  if (error || !server) {
    return (
      <div className="flex flex-col h-full items-center justify-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          {error || "Server not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <div className="px-3 py-2">
        <div className="font-semibold text-lg">{server.name}</div>
      </div>
      <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md" />
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-2">
            Channels
          </div>
          <div className="space-y-1">
            {server.channels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => router.push(`/servers/${serverId}/channels/${channel.id}`)}
                className={cn(
                  "group px-2 py-1 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition",
                  params?.channelId === channel.id && "bg-zinc-700/20 dark:bg-zinc-700"
                )}
              >
                <Hash className="flex-shrink-0 w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <p className={cn(
                  "line-clamp-1 font-medium text-sm text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-100 transition",
                  params?.channelId === channel.id && "text-zinc-800 dark:text-zinc-100"
                )}>
                  {channel.name}
                </p>
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}; 