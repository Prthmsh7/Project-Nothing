import { currentprofile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Channel, ChannelType } from "@prisma/client";
import { channel } from "diagnostics_channel";
interface ServerSidebarProps{
    serverId:string;
}
export const ServerSidebar = async({
    serverId
}: ServerSidebarProps) =>
{  const profile = await currentprofile();

    if(!profile)
    {
        return redirect("/");
    }

    const server = await db.server.findUnique({
        where: { 
            id: serverId,
        },
        include:{
            channels:{
                orderBy:{
                    createdAt:"asc",
                },
            },
            members:{
                include:{
                    profile: true,
                },
                orderBy:{
                    role: "asc",
                }
            }
        }
    });

    const textChannels = server?.channels.filter((channel) => channel.type === ChannelType.TEXT)
    const audioChannels = server?.channels.filter((channel) => channel.type === ChannelType.AUDIO)
    const videoChannels = server?.channels.filter((channel) => channel.type === ChannelType.VIDEO)
       
    return (
        <div>
            Server Sidebar component
        </div>
    )
}