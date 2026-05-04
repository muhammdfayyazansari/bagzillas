import type {
  AdminRole,
  HomepageContentStatus,
  OrderStatus,
  PaymentMethod,
  PaymentProvider,
  PaymentStatus,
  ProductStatus,
  UserRole,
  UserStatus,
} from "@prisma/client";

export type {
  AdminRole,
  HomepageContentStatus,
  OrderStatus,
  PaymentMethod,
  PaymentProvider,
  PaymentStatus,
  ProductStatus,
  UserRole,
  UserStatus,
};

export type CurrencyCode = "PKR";

export type AddressSnapshot = {
  fullName: string;
  phone?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  province?: string;
  postalCode?: string;
  country: string;
};
