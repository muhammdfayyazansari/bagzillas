import { prisma } from "@/lib/prisma";

/** Read-side helpers for catalog relations; Nest-portable via injected Prisma. */
export const categoryRepository = {
  async findById(id: string) {
    return prisma.category.findUnique({
      where: { id },
      select: { id: true, name: true, slug: true, isActive: true },
    });
  },

  async findSelectList(options?: { includeInactive?: boolean }) {
    return prisma.category.findMany({
      where: options?.includeInactive ? undefined : { isActive: true },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { id: true, name: true, slug: true },
    });
  },
};
