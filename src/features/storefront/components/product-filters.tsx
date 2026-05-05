"use client";

import * as React from "react";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = ["Backpacks", "Tote Bags", "Duffel Bags", "Accessories"];
const priceRanges = ["Under Rs. 3000", "Rs. 3000 - Rs. 5000", "Over Rs. 5000"];

function FilterContent() {
  return (
    <Accordion type="multiple" defaultValue={["category", "price"]} className="w-full">
      <AccordionItem value="category">
        <AccordionTrigger className="text-base font-semibold">Category</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-1">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <input type="checkbox" id={`cat-${category}`} className="rounded border-input text-primary focus:ring-primary h-4 w-4" />
                <label htmlFor={`cat-${category}`} className="text-sm text-foreground">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="price">
        <AccordionTrigger className="text-base font-semibold">Price Range</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-1">
            {priceRanges.map((range) => (
              <div key={range} className="flex items-center gap-2">
                <input type="checkbox" id={`price-${range}`} className="rounded border-input text-primary focus:ring-primary h-4 w-4" />
                <label htmlFor={`price-${range}`} className="text-sm text-foreground">
                  {range}
                </label>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function ProductFilters() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
      <div className="flex items-center gap-4">
        {/* Mobile Filter */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
              <Button className="w-full">Apply Filters</Button>
            </div>
          </SheetContent>
        </Sheet>

        <p className="text-sm text-muted-foreground hidden md:block">
          Showing 12 results
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium whitespace-nowrap">Sort by</span>
        <Select defaultValue="featured">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="newest">Newest Arrivals</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function DesktopFilterSidebar() {
  return (
    <div className="hidden md:block w-64 shrink-0">
      <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
        <Filter className="h-5 w-5" />
        Filters
      </h3>
      <FilterContent />
    </div>
  );
}
