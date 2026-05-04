import { type NextRequest, NextResponse } from "next/server";

import { authRoutes, hasExplicitNonAdminMetadata } from "@/lib/auth";
import { createMiddlewareAuthProvider } from "@/server/auth/providers/auth-provider.factory";

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const authProvider = createMiddlewareAuthProvider();
  const { response, identity } =
    await authProvider.getMiddlewareIdentity(request);

  if (
    !pathname.startsWith("/admin") ||
    pathname.startsWith(authRoutes.adminLogin)
  ) {
    return response;
  }

  if (!identity) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = authRoutes.adminLogin;
    loginUrl.searchParams.set("next", `${pathname}${search}`);

    return NextResponse.redirect(loginUrl);
  }

  if (hasExplicitNonAdminMetadata(identity)) {
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
