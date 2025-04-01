"use client";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/button";
import { Separator } from "@/app/components/ui/separator";
import { ActionTooltip } from "@/app/components/action-tooltip";

export const NavigationSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home"
    },
    {
      icon: Plus,
      href: "/servers/new",
      label: "Create Server"
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings"
    },
  ];

  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <div className="flex items-center justify-center">
        <div className="relative h-10 w-10">
          <Image
            fill
            src="/images/nothing-logo-dark.png"
            alt="Nothing Logo"
            className="dark:hidden"
          />
          <Image
            fill
            src="/images/nothing-logo-white-removebg-preview.png"
            alt="Nothing Logo"
            className="hidden dark:block"
          />
        </div>
      </div>
      <Separator
        className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto"
      />
      <nav className="flex flex-col items-center gap-4">
        {routes.map((route) => (
          <ActionTooltip
            key={route.href}
            side="right"
            align="center"
            label={route.label}
          >
            <Button
              onClick={() => router.push(route.href)}
              variant="ghost"
              className={cn(
                "group relative flex items-center justify-center w-10 h-10 rounded-3xl p-0",
                pathname === route.href && "bg-primary/10"
              )}
            >
              <route.icon
                className={cn(
                  "h-5 w-5",
                  pathname === route.href
                    ? "text-primary"
                    : "text-zinc-500 dark:text-zinc-400"
                )}
              />
              <div
                className={cn(
                  "absolute left-0 w-1 rounded-r-full bg-primary transition-all",
                  pathname === route.href ? "h-8" : "h-0"
                )}
              />
            </Button>
          </ActionTooltip>
        ))}
      </nav>
    </div>
  );
}; 