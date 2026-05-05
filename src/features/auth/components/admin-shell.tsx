"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  ShoppingCart, 
  Menu, 
  Search, 
  Bell, 
  Home,
  LogOut,
  ChevronRight,
  User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { AdminSession } from "@/server/services/auth.service";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type AdminShellProps = {
  adminSession: AdminSession;
  children: React.ReactNode;
};

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { label: "Products", icon: Package, href: "/admin/products" },
  { label: "Orders", icon: ShoppingCart, href: "/admin/orders" },
  { label: "Homepage CMS", icon: Home, href: "/admin/cms" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
];

export function AdminShell({ adminSession, children }: AdminShellProps) {
  const pathname = usePathname();
  const displayName = adminSession.user.name ?? adminSession.user.email ?? "Admin User";
  
  // Create breadcrumbs based on pathname
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const isLast = index === segments.length - 1;
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { label, isLast };
  });

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 border-r bg-background lg:flex lg:flex-col fixed inset-y-0 z-20">
        <div className="flex h-16 items-center border-b px-6 shrink-0">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Bagzillas <span className="text-primary text-sm font-semibold">ADMIN</span></span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="size-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t shrink-0">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium leading-none mb-1">{displayName}</span>
              <span className="text-xs text-muted-foreground">{adminSession.admin.role}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content (pushed by sidebar on desktop) */}
      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        {/* Top Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur px-4 sm:px-6">
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden -ml-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SheetHeader className="h-16 border-b flex items-center justify-center px-6 text-left">
                  <SheetTitle className="text-xl font-bold w-full">Bagzillas Admin</SheetTitle>
                </SheetHeader>
                <nav className="space-y-1 p-4">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium",
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        <item.icon className="size-4" aria-hidden="true" />
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>

            {/* Breadcrumbs */}
            <div className="hidden sm:flex items-center text-sm text-muted-foreground">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
                  <span className={cn(crumb.isLast && "font-medium text-foreground")}>
                    {crumb.label}
                  </span>
                </React.Fragment>
              ))}
            </div>

            {/* Search Placeholder */}
            <div className="ml-auto flex items-center gap-2 max-w-sm w-full lg:max-w-xs">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-muted/50 pl-9 rounded-full h-9 focus-visible:ring-1"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full ml-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-4 w-4" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{displayName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {adminSession.user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/admin/settings">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/">View Storefront</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="text-destructive focus:text-destructive cursor-pointer"
                  onClick={() => {
                    // This relies on the server action. 
                    // In a real app we might wrap this in a form or call the action directly.
                    // For UI purposes, we'll assume a form wrap or client wrapper exists elsewhere,
                    // but the existing AdminLogoutButton is better.
                    document.getElementById('admin-logout-form')?.dispatchEvent(
                      new Event("submit", { cancelable: true, bubbles: true })
                    );
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hidden form to allow dropdown to trigger logout */}
            <form id="admin-logout-form" action="/api/auth/logout" method="POST" className="hidden">
              <button type="submit" id="admin-logout-btn" />
            </form>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
