import type { Admin, User } from "@prisma/client";
import { UserRole, UserStatus } from "@prisma/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

import { authRoutes } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminSession = {
  authUser: SupabaseUser;
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

async function syncAuthUser(authUser: SupabaseUser) {
  const email = authUser.email?.toLowerCase();

  if (!email) {
    return null;
  }

  const fullName =
    typeof authUser.user_metadata?.name === "string"
      ? authUser.user_metadata.name
      : typeof authUser.user_metadata?.full_name === "string"
        ? authUser.user_metadata.full_name
        : null;

  return prisma.user.upsert({
    where: {
      id: authUser.id,
    },
    update: {
      email,
      name: fullName,
    },
    create: {
      id: authUser.id,
      email,
      name: fullName,
      role: UserRole.USER,
      status: UserStatus.ACTIVE,
    },
    include: {
      adminProfile: true,
    },
  });
}

export async function getCurrentAuthUser() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  return user;
}

export async function getAdminSessionForUser(
  authUser: SupabaseUser
): Promise<AdminSession | null> {
  const user = await syncAuthUser(authUser);

  if (!user || !isAuthorizedAdmin(user) || !user.adminProfile) {
    return null;
  }

  return {
    authUser,
    user,
    admin: user.adminProfile,
  };
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const authUser = await getCurrentAuthUser();

  if (!authUser) {
    return null;
  }

  return getAdminSessionForUser(authUser);
}

export async function requireAdminSession() {
  const adminSession = await getAdminSession();

  if (!adminSession) {
    redirect(authRoutes.adminUnauthorized);
  }

  return adminSession;
}

export async function signOutAdmin() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
}
