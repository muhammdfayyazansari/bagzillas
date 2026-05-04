import { type NextRequest, NextResponse } from "next/server";

import { authRoutes, hasExplicitNonAdminMetadata } from "@/lib/auth";
import { updateSupabaseSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const { response, user } = await updateSupabaseSession(request);

  if (
    !pathname.startsWith("/admin") ||
    pathname.startsWith(authRoutes.adminLogin)
  ) {
    return response;
  }

  if (!user) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = authRoutes.adminLogin;
    loginUrl.searchParams.set("next", `${pathname}${search}`);

    return NextResponse.redirect(loginUrl);
  }

  if (hasExplicitNonAdminMetadata(user)) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = authRoutes.adminLogin;
    loginUrl.searchParams.set("error", "unauthorized");

    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
