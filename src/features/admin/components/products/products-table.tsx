import * as React from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, MoreHorizontal, Search, Trash2 } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const products = [
  { id: "1", title: "Classic Leather Backpack", sku: "BGZ-BP-001", price: 4500, stock: 120, status: "Active" },
  { id: "2", title: "Urban Commuter Tote", sku: "BGZ-TT-002", price: 3200, stock: 45, status: "Active" },
  { id: "3", title: "Weekend Duffel Pro", sku: "BGZ-DF-003", price: 6800, stock: 12, status: "Low Stock" },
  { id: "4", title: "Student Essential Pack", sku: "BGZ-BP-004", price: 2500, stock: 0, status: "Out of Stock" },
  { id: "5", title: "Mini Crossbody Bag", sku: "BGZ-CB-005", price: 1800, stock: 200, status: "Active" },
];

export function ProductsTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell>{product.sku}</TableCell>
                <TableCell>Rs. {product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      product.status === "Active" ? "default" :
                      product.status === "Low Stock" ? "secondary" : "destructive"
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" disabled>Previous</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  );
}
