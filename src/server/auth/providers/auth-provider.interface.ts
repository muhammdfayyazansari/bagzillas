import type { AuthProvider } from "@prisma/client";
import type { NextRequest, NextResponse } from "next/server";

export type AuthProviderMetadata = {
  role?: string;
  roles?: string[];
};

export type AuthIdentity = {
  provider: AuthProvider;
  providerId: string;
  email: string;
  name?: string | null;
  metadata?: AuthProviderMetadata;
};

export type AuthProviderErrorCode =
  | "INVALID_CREDENTIALS"
  | "MISSING_EMAIL"
  | "PROVIDER_ERROR";

export type AuthProviderResult =
  | {
      identity: AuthIdentity;
      error?: never;
    }
  | {
      identity?: never;
      error: {
        code: AuthProviderErrorCode;
        message: string;
      };
    };

export type PasswordSignInInput = {
  email: string;
  password: string;
};

export type MiddlewareAuthResult = {
  response: NextResponse;
  identity: AuthIdentity | null;
};

export interface AuthProviderAdapter {
  signInWithPassword(input: PasswordSignInInput): Promise<AuthProviderResult>;
  getCurrentIdentity(): Promise<AuthIdentity | null>;
  signOut(): Promise<void>;
}

export interface MiddlewareAuthProviderAdapter {
  getMiddlewareIdentity(request: NextRequest): Promise<MiddlewareAuthResult>;
}
