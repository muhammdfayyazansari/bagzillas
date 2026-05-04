import type { Admin, User } from "@prisma/client";
import { UserRole, UserStatus } from "@prisma/client";
import { redirect } from "next/navigation";

import { authRoutes, getSafeAdminRedirect } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createAuthProvider } from "@/server/auth/providers/auth-provider.factory";
import type {
  AuthIdentity,
  PasswordSignInInput,
} from "@/server/auth/providers/auth-provider.interface";

export type AdminSession = {
  identity: AuthIdentity;
  user: User;
  admin: Admin;
};

type UserWithAdmin = User & {
  adminProfile: Admin | null;
};

function isAuthorizedAdmin(user: UserWithAdmin) {
  return (
    user.status === UserStatus.ACTIVE &&
    (user.role === UserRole.ADMIN || user.role === UserRole.SUPER_ADMIN) &&
    Boolean(user.adminProfile?.isActive)
  );
}

async function syncAuthUser(identity: AuthIdentity) {
  return prisma.user.upsert({
    where: {
      authProvider_authProviderId: {
        authProvider: identity.provider,
        authProviderId: identity.providerId,
      },
    },
    update: {
      email: identity.email,
      name: identity.name,
    },
    create: {
      email: identity.email,
      name: identity.name,
      authProvider: identity.provider,
      authProviderId: identity.providerId,
      role: UserRole.USER,
      status: UserStatus.ACTIVE,
    },
    include: {
      adminProfile: true,
    },
  });
}

export async function getCurrentAuthUser() {
  const authProvider = createAuthProvider();
  return authProvider.getCurrentIdentity();
}

export async function getAdminSessionForUser(
  identity: AuthIdentity
): Promise<AdminSession | null> {
  const user = await syncAuthUser(identity);

  if (!user || !isAuthorizedAdmin(user) || !user.adminProfile) {
    return null;
  }

  return {
    identity,
    user,
    admin: user.adminProfile,
  };
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const identity = await getCurrentAuthUser();

  if (!identity) {
    return null;
  }

  return getAdminSessionForUser(identity);
}

export async function requireAdminSession() {
  const adminSession = await getAdminSession();

  if (!adminSession) {
    redirect(authRoutes.adminUnauthorized);
  }

  return adminSession;
}

export async function signOutAdmin() {
  const authProvider = createAuthProvider();
  await authProvider.signOut();
}

export async function signInAdmin(
  input: PasswordSignInInput & { redirectTo?: string }
) {
  const authProvider = createAuthProvider();
  const result = await authProvider.signInWithPassword(input);

  if (result.error) {
    return {
      error:
        result.error.code === "INVALID_CREDENTIALS"
          ? "Invalid email or password."
          : "Unable to sign in. Please try again.",
    };
  }

  const adminSession = await getAdminSessionForUser(result.identity);

  if (!adminSession) {
    await authProvider.signOut();

    return {
      error: "This account is not authorized for admin access.",
    };
  }

  redirect(getSafeAdminRedirect(input.redirectTo));
}
