import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import type { OrderStatus } from "@prisma/client";

export const orderRepository = {
  async createWithItemsAndPayment(data: {
    orderNumber: string;
    customerEmail: string;
    customerName: string;
    customerPhone: string;
    shippingAddress: Prisma.InputJsonValue;
    notes?: string;
    subtotal: Prisma.Decimal;
    shippingAmount: Prisma.Decimal;
    total: Prisma.Decimal;
    items: {
      productId: string;
      productName: string;
      productSku: string;
      productSnapshot: Prisma.InputJsonValue;
      quantity: number;
      unitPrice: Prisma.Decimal;
      lineTotal: Prisma.Decimal;
    }[];
    paymentMethod: "CASH_ON_DELIVERY" | "CARD" | "BANK_TRANSFER" | "MOBILE_WALLET";
  }) {
    return prisma.$transaction(async (tx) => {
      // 1. Create Order
      const order = await tx.order.create({
        data: {
          orderNumber: data.orderNumber,
          customerEmail: data.customerEmail,
          customerName: data.customerName,
          customerPhone: data.customerPhone,
          shippingAddress: data.shippingAddress,
          notes: data.notes,
          subtotal: data.subtotal,
          shippingAmount: data.shippingAmount,
          total: data.total,
          status: "PENDING",
          currency: "PKR",
        },
      });

      // 2. Create Order Items
      await tx.orderItem.createMany({
        data: data.items.map((item) => ({
          orderId: order.id,
          ...item,
        })),
      });

      // 3. Create Payment record
      await tx.payment.create({
        data: {
          orderId: order.id,
          provider: "MANUAL",
          method: data.paymentMethod,
          status: "PENDING",
          amount: data.total,
          currency: "PKR",
        },
      });

      // 4. Update product stock
      for (const item of data.items) {
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stockQuantity: {
              decrement: item.quantity,
            },
          },
        });
      }

      return order;
    });
  },

  async findManyPaginated(params: {
    page: number;
    pageSize: number;
    status?: OrderStatus;
    search?: string;
  }) {
    const { page, pageSize, status, search } = params;
    const skip = (page - 1) * pageSize;

    const where: Prisma.OrderWhereInput = {};

    if (status) {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { orderNumber: { contains: search, mode: "insensitive" } },
        { customerName: { contains: search, mode: "insensitive" } },
        { customerEmail: { contains: search, mode: "insensitive" } },
      ];
    }

    const [items, totalCount] = await Promise.all([
      prisma.order.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
        include: {
          items: {
            select: { id: true } // just for count if needed
          },
          payments: {
            select: { method: true, status: true }
          }
        }
      }),
      prisma.order.count({ where }),
    ]);

    return {
      items,
      totalCount,
      totalPages: Math.ceil(totalCount / pageSize),
      currentPage: page,
    };
  },

  async findById(id: string) {
    return prisma.order.findUnique({
      where: { id },
      include: {
        items: true,
        payments: true,
        user: true,
      },
    });
  },

  async updateStatus(id: string, status: OrderStatus) {
    return prisma.order.update({
      where: { id },
      data: { status },
    });
  },
};
