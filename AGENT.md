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

- Cloudinary or Supabase Storage (see Step 6 — `MEDIA_STORAGE_PROVIDER` + `src/server/storage/*`)

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
- Supabase Auth user IDs are UUIDs and are stored as provider identity values, while Bagzillas keeps its own internal `User.id`.
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
- After Supabase authentication, `auth.service.ts` syncs the provider identity into the local `User` table.
- Admin access requires:
  - active local `User`
  - local `User.role` of `ADMIN` or `SUPER_ADMIN`
  - active linked `Admin` profile
- Unauthorized accounts are signed out and shown an admin authorization error.
- Logout uses a server action and clears the Supabase session.

### Important Auth Notes

- This step intentionally implements admin auth only, not customer-facing auth.
- New Supabase auth users are synced into `User` as `USER` by default with `authProvider=SUPABASE` and `authProviderId=<supabase-user-id>`. Admin access must be granted deliberately in the database by setting `User.role` and creating an active `Admin` profile.
- Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env` for runtime auth.
- Supabase `app_metadata` can be used as a fast middleware hint, but the database remains the source of truth for admin authorization.

---

## Auth Abstraction Refactor Completed

Step 3.5 future-proof auth architecture refactor has been completed.

### New Auth Abstraction Architecture

- Added `src/server/auth/providers/auth-provider.interface.ts` as the stable provider contract.
- Added `src/server/auth/providers/supabase-auth.provider.ts` as the current Supabase Auth adapter.
- Added `src/server/auth/providers/auth-provider.factory.ts` as the single provider binding point.
- Refactored `src/server/services/auth.service.ts` to consume `AuthProviderAdapter` behavior through the factory rather than calling Supabase APIs directly.
- Refactored `middleware.ts` to consume `MiddlewareAuthProviderAdapter` through the same provider factory.
- Removed `src/lib/supabase/server.ts` and `src/lib/supabase/middleware.ts`; provider-specific session handling now lives inside the Supabase adapter.

### User Identity Decoupling

- Added Prisma enum `AuthProvider` with `SUPABASE` and `CUSTOM_JWT`.
- Added `User.authProvider` and `User.authProviderId`.
- Added a compound unique constraint on `[authProvider, authProviderId]`.
- `User.id` is now treated as Bagzillas' internal user ID, not a provider-owned ID.
- A migration backfills existing users by using the prior UUID `id` value as the initial `authProviderId`.

### Coupling Rules

- UI components must never import Supabase directly.
- Feature actions must call internal app services/actions and avoid provider SDK usage.
- Supabase SDK usage belongs only in `src/server/auth/providers/supabase-auth.provider.ts` unless the provider factory is intentionally changed.
- Database admin authorization remains centralized in `src/server/services/auth.service.ts`.

### Future JWT / NestJS Migration Strategy

- Add `src/server/auth/providers/jwt-auth.provider.ts` implementing `AuthProviderAdapter` and `MiddlewareAuthProviderAdapter`.
- Switch `src/server/auth/providers/auth-provider.factory.ts` from Supabase to JWT.
- Keep `src/features/auth/*`, admin pages, and admin shell unchanged.
- Portability maps cleanly to NestJS:
  - provider interface -> Nest provider contract
  - `auth.service.ts` -> Nest auth service
  - middleware provider -> Nest guard/session strategy
  - Prisma user/admin checks -> Nest authorization guard/service

---

## Folder Structure

```txt
src/
├── app/
├── components/
│   └── ui/
├── constants/
├── features/
│   ├── admin/
│   ├── auth/
│   ├── products/
│   └── storefront/
├── lib/
├── server/
│   ├── auth/
│   │   └── providers/
│   ├── db/
│   │   ├── queries/
│   │   └── repositories/
│   ├── services/
│   └── storage/
├── hooks/
├── providers/
├── store/
└── types/
```

---

## Step 6 Admin Product CRUD Backend Integration Completed

Step 6 connects the admin Products UI to real database and upload infrastructure using a Nest-portable layering model.

### New Dependency

- `cloudinary` (optional path when `MEDIA_STORAGE_PROVIDER=cloudinary`)

### Product Domain & CRUD

- **Repositories (data access only):**
  - `src/server/db/repositories/product.repository.ts` — pagination with lean `select`, detail `include`, create with nested images, transactional image replacement on update, delete.
  - `src/server/db/repositories/category.repository.ts` — category picklist for admin forms.
- **Query layer:**
  - `src/server/db/queries/product-list.query.ts` — builds `Prisma.ProductWhereInput` for search/status/category filters (portable predicate builder).
- **Service (domain orchestration, no Prisma in UI):**
  - `src/server/services/product.service.ts` — slug allocation, SKU/slug conflict handling (Prisma `P2002` mapped to user-facing errors), category existence checks, image row normalization (single primary), Decimal mapping.
- **Server actions (Next entrypoints; Nest would become controllers):**
  - `src/features/products/actions/create-product.action.ts`
  - `src/features/products/actions/update-product.action.ts`
  - `src/features/products/actions/delete-product.action.ts`
  - `src/features/products/actions/upload-product-image.action.ts`
- **Validation & DTOs:**
  - `src/features/products/schemas/product.schema.ts` — Zod for create/update payloads and list query (`page`, `pageSize`, `q`, `status`, `categoryId`).
  - `src/features/products/types/product.types.ts` — serializable admin list shapes and form value types.
- **Serialization:**
  - `src/features/products/lib/serialize-admin-product.ts` — `Decimal`/Date → JSON-safe payloads for Client Components.

### Admin UI Wiring

- `src/app/admin/(protected)/products/page.tsx` — server-rendered paginated list via `productService.listPaginated` + URL search params; no Prisma in the route file besides calling the service.
- `src/app/admin/(protected)/products/new/page.tsx` — category picklist + create form.
- `src/app/admin/(protected)/products/[productId]/edit/page.tsx` — load by id (`notFound` if missing) + edit form.
- `src/features/admin/components/products/products-table.tsx` — client interactions (delete mutation, GET search form, pagination via links).
- `src/features/admin/components/products/product-form.tsx` — React Hook Form + server actions, success/error banners, redirect to edit after create.
- `src/features/admin/components/products/image-upload-zone.tsx` — `FormData` upload through `uploadProductImageAction`; controlled image list including primary selection.

### Security

- **`requireAdminSession()`** continues to gate the `/admin/(protected)` layout (SSR).
- **`requireAdminActionSession()`** (`src/server/services/auth.service.ts`) re-validates admin on **every mutating/action** boundary so UI-only checks are insufficient.
- Actions: `createProduct`, `updateProduct`, `deleteProduct`, `uploadProductImage` all enforce admin before persistence or upload.

### Media / Storage Strategy

- **`MediaStorageAdapter`** (`src/server/storage/media-storage.interface.ts`) — small port: `uploadImage({ buffer, filename, mimeType }) → { url }`.
- **`getMediaStorageAdapter()`** (`src/server/storage/media-storage.factory.ts`) — chooses implementation from `MEDIA_STORAGE_PROVIDER`:
  - `cloudinary` → `CloudinaryMediaStorage` (`src/server/storage/cloudinary.media-storage.ts`)
  - `supabase` → `SupabaseBucketMediaStorage` (`src/server/storage/supabase.media-storage.ts`) using `SUPABASE_SERVICE_ROLE_KEY` and public URL output.
- **Environment** (`src/lib/env.ts`, `.env.example`): provider + Cloudinary/Supabase keys documented. Uploads fail fast with a clear message if the provider is unset or misconfigured.

### Performance

- Product list uses `findMany` + `count` in a transaction with **narrow `select`**, indexed filters, and deterministic `orderBy` (`updatedAt desc`).
- Pagination is URL-driven (`?page=&pageSize=&q=`) so list pages remain cache-friendly and shareable.

### NestJS Migration Notes

- Move `MediaStorageAdapter` + factory into a Nest dynamic module; bind Cloudinary or Supabase as providers.
- `productRepository` ↔ Nest `@Injectable()` repository using injected `PrismaService`.
- `productService` ↔ domain service invoked by guarded controllers.
- Server actions ↔ HTTP PATCH/POST/DELETE controllers with identical Zod/DTO contracts.

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
- Step 3.5 auth provider abstraction refactor
- Internal user ID decoupled from provider IDs
- JWT/NestJS-ready auth provider structure
- Step 4 shared design system & public storefront UI foundation
- Global layout components (`StorefrontLayout`, `Navbar`, `Footer`, `SectionContainer`)
- Shared components (`ProductCard`, `TrustBadge`, `EmptyState`)
- Reusable page sections inside `src/features/storefront/components`
- Homepage UI with Hero, Featured Products, Categories, Trust, Testimonials, and Newsletter sections
- Product Listing Page (PLP) UI with responsive grid and filter placeholders
- Product Detail Page (PDP) UI with image gallery, product info, and related products
- Framer Motion animations for hover, entrance, and mobile menu transitions
- Public route grouping under `(storefront)`

- Step 5 admin dashboard UI foundation
- Responsive AdminShell with mobile drawer and sidebar
- Dashboard Overview with `recharts` sales chart and metrics
- Products management UI (tables, forms, image upload zone placeholder)
- CMS management UI (Hero editor, Featured products selector)
- Orders management UI (Slide-out details drawer, status badges)
- Settings UI placeholders
- Step 6 admin product CRUD integrated with Prisma (create, read, update, delete, paginated list)
- Product repository + query builder + `productService` orchestration
- Zod-validated product server actions and admin upload pipeline
- Swappable media storage (Cloudinary / Supabase) via `MediaStorageAdapter` + factory
- Server-side admin checks on all product mutations and uploads (`requireAdminActionSession`)
- Admin routes: `/admin/products`, `/admin/products/new`, `/admin/products/[productId]/edit`
- Step 8 Cart + Checkout + Order Creation System
- Implemented Zustand store (`src/store/cart.store.ts`) with `localStorage` persistence for client-side cart management.
- Built sliding `CartDrawer` integrated into the global `Navbar`.
- Built Zod schema and React Hook Form-powered checkout page with Pakistani context (COD default, phone, city, address).
- Built secure backend order domain: `order.repository.ts` and `order.service.ts`.
- Server action `createOrderAction` validates cart prices strictly against DB, recalculates totals, and wraps creation in a Prisma transaction.
- Admin dashboard orders page updated to fetch real DB orders via `orderService.findManyPaginated`.
- Admin order details drawer connected to `getOrderDetailsAction` to fetch real order items and shipping data dynamically.
- `updateOrderStatusAction` implemented to allow admins to transition orders (PENDING -> PROCESSING -> SHIPPED -> DELIVERED).

### Pending

- Apply migration to Supabase database
- Customer-facing auth
- Payments integration
- Connect storefront catalog pages to Prisma-backed product reads (admin path is wired)
