"use client"

import {Plus} from "lucide-react"

import { ActionTooltip } from "@/components/action-tooltip"

export const NavigationAction = () => {
  return(
    <div>
        <ActionTooltip
        side="right"
        align="center"
        label="Add a classroom"
        >
        <button className="group flex items-center">
            <div className="flex mx-3 p-2 rounded-[24px] group-hover:rounded-[24px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-red-500">
                <Plus className="group-hover:text-white transition text-yellow-500" size={25}/>
            </div>
        </button>
        </ActionTooltip>
    </div>
  )  
}