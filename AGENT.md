# AGENT.md

## Project Name

Bagzillas

## Project Purpose

Bagzillas is a scalable ecommerce platform for selling school bags and related products in Pakistan.

The platform includes:

- Public storefront
- Dynamic product management
- Admin CMS for homepage customization
- Pakistan payment gateway integration
- Order management
- Future scalability for enterprise ecommerce growth

---

## Tech Stack

### Frontend

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- lucide-react

### Backend / Data

- Supabase PostgreSQL
- Prisma ORM

### Auth

- Supabase Auth
- @supabase/ssr

### State / Forms / Validation

- Zustand
- React Hook Form
- @hookform/resolvers
- Zod

### UI Utilities

- class-variance-authority
- clsx
- tailwind-merge
- radix-ui
- tw-animate-css

### Media / Storage

- Cloudinary or Supabase Storage (TBD)

### Deployment

- Vercel

---

## Foundation Setup Completed

Step 1 foundation setup has been completed.

### Installed / Configured Dependencies

- prisma
- @prisma/client
- zod
- react-hook-form
- @hookform/resolvers
- zustand
- framer-motion
- class-variance-authority
- clsx
- tailwind-merge
- lucide-react
- shadcn
- radix-ui
- tw-animate-css
- prettier
- eslint-config-prettier
- eslint-plugin-prettier

### Setup Decisions

- Initialized shadcn/ui with the Next.js defaults, Radix component base, Lucide icons, Tailwind CSS v4, React Server Components, and CSS variables.
- Kept the initial page intentionally minimal and foundation-only; no product, cart, auth, CMS, payment, or database business logic has been added.
- Added a singleton Prisma client helper in `src/lib/prisma.ts` for future server-side data access.
- Added environment parsing in `src/lib/env.ts` with Zod. `DATABASE_URL` is optional until the database setup step is completed.
- Added reusable animation constants in `src/lib/animations.ts` for future client components.
- Added Prettier config and scripts, with ESLint configured to defer formatting conflicts to Prettier.
- Confirmed the `@/*` path alias points to `src/*`.

---

## Database & Prisma Setup Completed

Step 2 database foundation has been completed.

### Added Files / Structure

- `prisma/schema.prisma`
- `prisma/migrations/20260504000000_init/migration.sql`
- `prisma/migrations/migration_lock.toml`
- `prisma/seed.ts`
- `.env.example`
- `src/types/database.types.ts`
- `src/server/db/queries/`
- `src/server/db/repositories/`

### Database Models

- `User`: customer identity foundation with email, phone, role, status, and orders.
- `Admin`: admin profile linked one-to-one with `User`, with admin role, active flag, and permissions JSON for future granular access.
- `Category`: normalized product categories with slug uniqueness, hierarchy support, active flag, and sort order.
- `Product`: catalog item with SKU/slug uniqueness, status lifecycle, pricing fields, inventory quantity, category relation, metadata JSON, and featured flag.
- `ProductImage`: multiple image support per product with primary image and sort order.
- `HomepageContent`: CMS content blocks keyed by unique section keys, JSON content, publish status, versioning, publish timestamp, and optional admin editor relation.
- `Order`: ecommerce order aggregate with guest/user support, order lifecycle, customer snapshot fields, address JSON snapshots, totals, and currency.
- `OrderItem`: line-item records with product relation plus product snapshot fields to preserve historical order accuracy.
- `Payment`: payment lifecycle records with provider, method, status, amount, transaction ID, gateway response JSON, and paid timestamp.

### Enums

- `UserRole`
- `UserStatus`
- `AdminRole`
- `ProductStatus`
- `OrderStatus`
- `PaymentStatus`
- `PaymentMethod`
- `PaymentProvider`
- `HomepageContentStatus`

### Architectural Decisions

- Supabase PostgreSQL is configured through Prisma with `DATABASE_URL` and `DIRECT_URL`.
- UUID primary keys use PostgreSQL `gen_random_uuid()` via `pgcrypto` in the initial migration.
- Prisma model names stay PascalCase while database table names are mapped to snake_case plural tables with `@@map`.
- Monetary values use `Decimal @db.Decimal(12, 2)`.
- Product deletion preserves order history by setting `OrderItem.productId` to null while retaining product snapshot fields.
- User deletion preserves order history by setting `Order.userId` to null.
- Product image deletion cascades with product deletion.
- Admin deletion does not delete CMS records; homepage editor references are set null.
- Query and repository folders are prepared under `src/server/db`, but no business logic has been added yet.
- `src/lib/prisma.ts` remains the singleton Prisma Client entrypoint for Next.js hot reload safety.

### Future DB Notes

- Apply the initial migration to Supabase when ready with Prisma migration tooling using `DIRECT_URL`.
- Add auth-provider identifiers after the auth system is selected.
- Add product variants, coupons, shipping zones, reviews, inventory ledgers, audit logs, and payment gateway-specific metadata when those features are scoped.
- Add Row Level Security and Supabase policies deliberately after the app access patterns are defined.

---

## Authentication & Admin Authorization Completed

Step 3 admin authentication and authorization has been completed.

### Auth Provider Chosen

Supabase Auth is the selected authentication provider.

### Why Supabase Auth Was Selected

- The project already uses Supabase PostgreSQL, so Supabase Auth keeps authentication close to the database platform.
- Supabase Auth user IDs are UUIDs, which map cleanly to the existing `User.id` primary key.
- The architecture can later expand into customer auth, Row Level Security, storage policies, and gateway callbacks without replacing the auth provider.
- Server-side Supabase session helpers work well with the Next.js App Router and middleware.

### Added Dependencies

- `@supabase/ssr`
- `@supabase/supabase-js`

### Added Files / Structure

- `middleware.ts`
- `src/lib/auth.ts`
- `src/lib/supabase/server.ts`
- `src/lib/supabase/middleware.ts`
- `src/server/services/auth.service.ts`
- `src/features/auth/actions/admin-login.action.ts`
- `src/features/auth/actions/admin-logout.action.ts`
- `src/features/auth/components/admin-login-form.tsx`
- `src/features/auth/components/admin-logout-button.tsx`
- `src/features/auth/components/admin-shell.tsx`
- `src/features/auth/schemas/auth.schema.ts`
- `src/app/admin/login/page.tsx`
- `src/app/admin/(protected)/layout.tsx`
- `src/app/admin/(protected)/page.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/card.tsx`

### Route Protection Strategy

- `middleware.ts` protects `/admin/*`.
- Unauthenticated admin requests are redirected to `/admin/login?next=<requested-path>`.
- Middleware refreshes Supabase sessions using `@supabase/ssr`.
- Middleware rejects users who explicitly have non-admin Supabase `app_metadata.role` / `app_metadata.roles`.
- Final admin authorization is server-side in `src/server/services/auth.service.ts` against the Prisma `User` and `Admin` tables.
- The protected admin route group uses `src/app/admin/(protected)/layout.tsx`, which calls `requireAdminSession()` before rendering the admin shell.

### Admin Auth Flow

- Admins sign in at `/admin/login`.
- Login form uses React Hook Form, Zod validation, and shadcn/ui primitives.
- Login uses Supabase Auth email/password.
- After Supabase authentication, `auth.service.ts` syncs the Supabase auth user into the local `User` table.
- Admin access requires:
  - active local `User`
  - local `User.role` of `ADMIN` or `SUPER_ADMIN`
  - active linked `Admin` profile
- Unauthorized accounts are signed out and shown an admin authorization error.
- Logout uses a server action and clears the Supabase session.

### Important Auth Notes

- This step intentionally implements admin auth only, not customer-facing auth.
- New Supabase auth users are synced into `User` as `USER` by default. Admin access must be granted deliberately in the database by setting `User.role` and creating an active `Admin` profile.
- Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env` for runtime auth.
- Supabase `app_metadata` can be used as a fast middleware hint, but the database remains the source of truth for admin authorization.

---

## Folder Structure

```txt
src/
├── app/
├── components/
│   └── ui/
├── features/
│   └── auth/
├── lib/
│   └── supabase/
├── server/
│   ├── db/
│   │   ├── queries/
│   │   └── repositories/
│   └── services/
├── hooks/
├── providers/
├── store/
├── types/
└── constants/
```

---

## Architecture Principles

- Enterprise-grade modular architecture
- Domain-driven folder structure
- Service/repository separation
- Reusable UI components
- Server-first Next.js approach
- Type-safe schemas and validation
- Scalable admin/storefront separation
- Never query the database directly in UI components
- Business logic belongs in feature services, server services, repositories, or domain modules

---

## Coding Standards

- Use PascalCase for Components
- Use camelCase for functions/utilities
- Use kebab-case for route folders
- Use Zod for validation
- Prefer Server Components unless client interactivity is required
- Use shadcn/ui components and `cn` from `src/lib/utils.ts` for shared UI composition
- Keep feature code inside `src/features/<domain>`
- Keep server-only infrastructure inside `src/server` or `src/lib` as appropriate

---

## Development Workflow

Whenever making significant architectural or feature changes:

1. Implement the change
2. Update this AGENT.md / AGENTS.md documentation
3. Document:
   - What changed
   - Why it changed
   - New dependencies
   - New architectural decisions

This file must always stay updated so future AI/dev agents can continue seamlessly.

---

## Current Progress

### Completed

- Initial Next.js project scaffolded
- Step 1 foundation setup
- Dependency installation
- shadcn/ui initialization
- Enterprise folder architecture
- Shared utility files
- Prettier and ESLint formatting setup
- Starter/demo Next.js boilerplate cleanup
- Step 2 database and Prisma setup
- Initial Prisma schema and migration
- Prisma Client generation
- Database type exports and server DB folder placeholders
- Step 3 admin authentication and authorization
- Supabase Auth integration
- Protected admin route shell
- Admin login/logout flow

### Pending

- Apply migration to Supabase database
- Customer-facing auth
- Storefront
- Admin dashboard
- Payments integration
