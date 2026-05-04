-- Add provider identity fields so Bagzillas owns internal user IDs independently
-- from Supabase Auth or any future JWT/NestJS identity provider.
CREATE TYPE "AuthProvider" AS ENUM ('SUPABASE', 'CUSTOM_JWT');

ALTER TABLE "users"
ADD COLUMN "authProvider" "AuthProvider" NOT NULL DEFAULT 'SUPABASE',
ADD COLUMN "authProviderId" TEXT;

UPDATE "users"
SET "authProviderId" = "id"::TEXT
WHERE "authProviderId" IS NULL;

ALTER TABLE "users"
ALTER COLUMN "authProviderId" SET NOT NULL;

CREATE UNIQUE INDEX "users_authProvider_authProviderId_key" ON "users"("authProvider", "authProviderId");
CREATE INDEX "users_authProvider_idx" ON "users"("authProvider");
