"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function GeneralSettingsForm() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold">Store Details</h3>
          <p className="text-sm text-muted-foreground">Manage your store's public information.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="store-name">Store Name</Label>
            <Input id="store-name" defaultValue="Bagzillas" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Contact Email</Label>
            <Input id="contact-email" type="email" defaultValue="support@bagzillas.pk" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="+92 300 1234567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currency">Currency</Label>
            <Input id="currency" defaultValue="PKR (Rs.)" disabled />
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-6">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold">Payment Integration</h3>
          <p className="text-sm text-muted-foreground">Configure your payment gateway (Mock UI).</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-md bg-muted/20">
            <div>
              <p className="font-medium">Cash on Delivery (COD)</p>
              <p className="text-sm text-muted-foreground">Default payment method in Pakistan.</p>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-md bg-muted/20 opacity-70">
            <div>
              <p className="font-medium">Stripe / Credit Card</p>
              <p className="text-sm text-muted-foreground">Accept international payments.</p>
            </div>
            <Button variant="secondary" size="sm">Connect</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button>Save Settings</Button>
      </div>
    </div>
  );
}
