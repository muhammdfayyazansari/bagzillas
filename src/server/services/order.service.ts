import { Prisma } from "@prisma/client";
import { orderRepository } from "@/server/db/repositories/order.repository";
import { productRepository } from "@/server/db/repositories/product.repository";
import type { CheckoutFormData } from "@/features/checkout/schemas/checkout.schema";

export const orderService = {
  async createCheckoutOrder(
    checkoutData: CheckoutFormData,
    cartItems: { productId: string; quantity: number }[]
  ) {
    if (cartItems.length === 0) {
      throw new Error("Cart is empty");
    }

    // 1. Fetch real products to validate pricing securely
    const productIds = cartItems.map((i) => i.productId);
    const dbProducts = await productRepository.findManyByIds(productIds);
    
    if (dbProducts.length !== cartItems.length) {
      throw new Error("One or more products in your cart are no longer available.");
    }

    // 2. Calculate totals using DB prices
    let subtotal = new Prisma.Decimal(0);
    const orderItemsPayload = [];

    for (const cartItem of cartItems) {
      const dbProduct = dbProducts.find((p) => p.id === cartItem.productId)!;
      
      if (dbProduct.stockQuantity < cartItem.quantity) {
        throw new Error(`Not enough stock for ${dbProduct.name}. Only ${dbProduct.stockQuantity} left.`);
      }

      const unitPrice = dbProduct.price;
      const lineTotal = unitPrice.mul(cartItem.quantity);
      subtotal = subtotal.add(lineTotal);

      // Snapshot to freeze product data at time of purchase
      const productSnapshot = {
        name: dbProduct.name,
        sku: dbProduct.sku,
        imageUrl: dbProduct.images.find(img => img.isPrimary)?.url || null,
        categoryId: dbProduct.categoryId,
      };

      orderItemsPayload.push({
        productId: dbProduct.id,
        productName: dbProduct.name,
        productSku: dbProduct.sku,
        productSnapshot,
        quantity: cartItem.quantity,
        unitPrice,
        lineTotal,
      });
    }

    // Fixed Shipping Amount (Could be dynamic later based on city)
    const shippingAmount = new Prisma.Decimal(0); // Free shipping for now
    const total = subtotal.add(shippingAmount);

    // 3. Generate Order Number
    // Simple robust random ID for order number
    const randomHex = Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, '0');
    const orderNumber = `BZ-${Date.now().toString().slice(-6)}-${randomHex}`;

    // 4. Construct shipping address JSON
    const shippingAddress = {
      fullName: checkoutData.fullName,
      phone: checkoutData.phone,
      city: checkoutData.city,
      address: checkoutData.address,
    };

    // 5. Call Repository
    const order = await orderRepository.createWithItemsAndPayment({
      orderNumber,
      customerEmail: checkoutData.email,
      customerName: checkoutData.fullName,
      customerPhone: checkoutData.phone,
      shippingAddress,
      notes: checkoutData.notes,
      subtotal,
      shippingAmount,
      total,
      items: orderItemsPayload,
      paymentMethod: checkoutData.paymentMethod,
    });

    return order;
  },

  async findManyPaginated(params: {
    page: number;
    pageSize: number;
    status?: any;
    search?: string;
  }) {
    return orderRepository.findManyPaginated(params);
  },

  async findById(id: string) {
    return orderRepository.findById(id);
  },

  async updateStatus(id: string, status: any) {
    return orderRepository.updateStatus(id, status);
  }
};
