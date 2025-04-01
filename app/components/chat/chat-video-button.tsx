"use client";

import { Video, VideoOff } from "lucide-react";
import { ActionTooltip } from "@/app/components/action-tooltip";
import { Button } from "@/app/components/ui/button";

export const ChatVideoButton = () => {
  return (
    <ActionTooltip side="bottom" label="Start Video Call">
      <Button
        onClick={() => {}}
        variant="ghost"
        className="hover:opacity-75 transition mr-4"
      >
        <Video className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </ActionTooltip>
  )
} 