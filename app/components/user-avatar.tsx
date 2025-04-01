"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar";
import { cn } from "@/app/lib/utils";

interface UserAvatarProps {
  src?: string;
  className?: string;
}

export const UserAvatar = ({
  src,
  className
}: UserAvatarProps) => {
  return (
    <Avatar className={cn(
      "h-8 w-8 md:h-10 md:w-10",
      className
    )}>
      <AvatarImage src={src || "/images/placeholder-user.png"} />
      <AvatarFallback>
        <span className="sr-only">User Avatar</span>
      </AvatarFallback>
    </Avatar>
  )
} 