"use client";

import { Badge } from "@/app/components/ui/badge";

export const SocketIndicator = () => {
  return (
    <Badge 
      variant="outline" 
      className="bg-emerald-600 text-white border-none"
    >
      Live
    </Badge>
  )
} 