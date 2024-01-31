"use client";

import { ServerWithMemberWithProfiles } from "@/types";
import { MemberRole, Server } from "@prisma/client";

interface ServerHeaderProps{
    server: ServerWithMemberWithProfiles;
    role?: MemberRole;
};
 export const ServerHeader =({server , role}: ServerHeaderProps) => {
    return (
        <div>
            Server Header !
        </div>
    )
 }