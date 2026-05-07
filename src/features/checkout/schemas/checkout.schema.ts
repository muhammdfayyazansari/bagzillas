import { z } from "zod";
import { PaymentMethod } from "@prisma/client";

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  phone: z.string().regex(/^(?:03|\+923)[0-9]{2}[\s\-]?[0-9]{7}$/, "Must be a valid Pakistani phone number (e.g. 0300-1234567 or +923001234567)"),
  email: z.string().email("Valid email is required").max(150),
  city: z.string().min(2, "City is required").max(100),
  address: z.string().min(10, "Complete address is required").max(500),
  notes: z.string().max(500).optional(),
  paymentMethod: z.nativeEnum(PaymentMethod),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
