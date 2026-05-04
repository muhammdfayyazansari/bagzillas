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

## Folder Structure

```txt
src/
├── app/
├── components/
│   └── ui/
├── features/
├── lib/
├── server/
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

### Pending

- Prisma schema setup
- Database schema design
- Supabase connection
- Auth system
- Storefront
- Admin dashboard
- Payments integration
