"use client";

import * as z from "zod";

import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';



import {
    Dialog,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogContent
} from "@/components/ui/dialog"
import {useForm} from "react-hook-form";

export const InitialModal = () => {

    
    const form = useForm({
        defaultValues:{
            name: "",
            imageUrl: "",
        }
    })
    
    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize Your ClassRoom
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your classroom a personality with a name and an image. You can always chage it later
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}