import type { AuthIdentity } from "@/server/auth/providers/auth-provider.interface";

export const authRoutes = {
  adminLogin: "/admin/login",
  adminDashboard: "/admin",
  adminUnauthorized: "/admin/login?error=unauthorized",
} as const;

const adminRoles = new Set(["ADMIN", "SUPER_ADMIN"]);

export function getSafeAdminRedirect(redirectTo?: string | null) {
  if (
    redirectTo &&
    redirectTo.startsWith("/admin") &&
    !redirectTo.startsWith(authRoutes.adminLogin)
  ) {
    return redirectTo;
  }

  return authRoutes.adminDashboard;
}

export function isAdminMetadataIdentity(identity: AuthIdentity | null) {
  if (!identity) {
    return false;
  }

  const role = identity.metadata?.role;
  const roles = identity.metadata?.roles;

  if (typeof role === "string" && adminRoles.has(role)) {
    return true;
  }

  if (Array.isArray(roles)) {
    return roles.some(
      (item) => typeof item === "string" && adminRoles.has(item)
    );
  }

  return false;
}

export function hasExplicitNonAdminMetadata(identity: AuthIdentity | null) {
  if (!identity) {
    return false;
  }

  const role = identity.metadata?.role;
  const roles = identity.metadata?.roles;

  if (typeof role === "string") {
    return !adminRoles.has(role);
  }

  if (Array.isArray(roles) && roles.length > 0) {
    return !roles.some(
      (item) => typeof item === "string" && adminRoles.has(item)
    );
  }

  return false;
}
