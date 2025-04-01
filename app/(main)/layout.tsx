"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const params = useParams();
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient && !params?.serverId) {
    return redirect("/setup");
  }

  return (
    <div className="h-full">
      {children}
    </div>
  );
};

export default MainLayout; 