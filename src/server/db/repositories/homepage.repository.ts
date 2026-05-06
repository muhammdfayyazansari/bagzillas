import { prisma } from "@/lib/prisma";
import type { Prisma, HomepageContentStatus } from "@prisma/client";

export const homepageRepository = {
  async getByKey(key: string) {
    return prisma.homepageContent.findUnique({
      where: { key },
    });
  },

  async getManyByKeys(keys: string[]) {
    return prisma.homepageContent.findMany({
      where: { key: { in: keys } },
    });
  },

  async upsertContent(
    key: string,
    title: string,
    content: Prisma.InputJsonValue,
    adminId: string,
    status: HomepageContentStatus = "PUBLISHED"
  ) {
    const existing = await this.getByKey(key);

    if (existing) {
      return prisma.homepageContent.update({
        where: { key },
        data: {
          title,
          content,
          status,
          editedByAdminId: adminId,
          version: { increment: 1 },
          publishedAt: status === "PUBLISHED" ? new Date() : existing.publishedAt,
        },
      });
    }

    return prisma.homepageContent.create({
      data: {
        key,
        title,
        content,
        status,
        editedByAdminId: adminId,
        publishedAt: status === "PUBLISHED" ? new Date() : null,
      },
    });
  },
};
