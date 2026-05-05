import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionContainer } from "@/components/layout/section-container";

export function NewsletterSection() {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <SectionContainer>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Join the Bagzillas Club</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling tips straight to your inbox.
          </p>
          <form className="flex w-full max-w-md flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-primary-foreground"
              required
            />
            <Button variant="secondary" type="submit" className="shrink-0 font-semibold">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-xs text-primary-foreground/60">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </SectionContainer>
    </section>
  );
}
