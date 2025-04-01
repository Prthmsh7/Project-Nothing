import React from "react";
import { currentProfile } from "@/app/lib/current-profile";
import { redirect } from "next/navigation";

export default async function ServersPage() {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  return redirect("/setup");
} 