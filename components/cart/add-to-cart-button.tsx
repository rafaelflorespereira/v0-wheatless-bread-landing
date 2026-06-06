"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-context";
import type { Product } from "@/lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => addItem(product)}
      className="gap-2 border-primary/30 hover:bg-primary hover:text-primary-foreground"
    >
      <ShoppingBag className="h-4 w-4" />
      Adicionar
    </Button>
  );
}
