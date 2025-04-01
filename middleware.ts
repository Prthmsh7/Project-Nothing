import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function completely bypasses Clerk authentication in development mode
export function middleware(request: NextRequest) {
  console.log("Development mode: Authentication middleware bypassed");
  return NextResponse.next();
}

// Match all routes
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}; 