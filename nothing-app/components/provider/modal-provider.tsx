"use client"

import {CreateServerModal} from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"
import { EditServerModal } from "@/components/modals/edit-server-modal "
import { InviteModal } from "@/components/modals/invite-modal"
import { MembersModal } from "@/components/modals/member-modal"
export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }
    


    return (
        <>
            <CreateServerModal/>
            <EditServerModal/>
            <MembersModal/>
            <InviteModal/>
        </>
    )
}