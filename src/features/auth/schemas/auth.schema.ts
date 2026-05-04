import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  redirectTo: z.string().optional(),
});

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
