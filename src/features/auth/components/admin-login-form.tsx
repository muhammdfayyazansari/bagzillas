"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyhole } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { adminLoginAction } from "@/features/auth/actions/admin-login.action";
import {
  adminLoginSchema,
  type AdminLoginInput,
} from "@/features/auth/schemas/auth.schema";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AdminLoginFormProps = {
  redirectTo?: string;
  initialError?: string;
};

export function AdminLoginForm({
  redirectTo,
  initialError,
}: AdminLoginFormProps) {
  const [serverError, setServerError] = useState(initialError);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginInput>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      email: "",
      password: "",
      redirectTo,
    },
  });

  function onSubmit(values: AdminLoginInput) {
    setServerError(undefined);

    startTransition(async () => {
      const result = await adminLoginAction({
        ...values,
        redirectTo,
      });

      if (result?.error) {
        setServerError(result.error);
      }
    });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-3">
        <div className="flex size-11 items-center justify-center rounded-lg border bg-background">
          <LockKeyhole className="size-5" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-2xl">Admin login</CardTitle>
          <CardDescription>
            Sign in to manage Bagzillas operations.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("redirectTo")} />

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="admin@bagzillas.com"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email ? (
              <p className="text-destructive text-sm">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              aria-invalid={Boolean(errors.password)}
              {...register("password")}
            />
            {errors.password ? (
              <p className="text-destructive text-sm">
                {errors.password.message}
              </p>
            ) : null}
          </div>

          {serverError ? (
            <div
              className="border-destructive/30 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm"
              role="alert"
            >
              {serverError}
            </div>
          ) : null}

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
