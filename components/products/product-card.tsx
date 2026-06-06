import Image from "next/image";
import { ShoppingBag } from "lucide-react";

import type { Product } from "@/lib/types";
import { AddToCartButton } from "@/components/cart/add-to-cart-button";

function formatPrice(price: number | string) {
  return `R$ ${Number(price).toFixed(2).replace(".", ",")}`;
}
const CATEGORY_LABELS: Record<string, string> = {
  paes: "Pães",
  "massa-pizza": "Massa de Pizza",
  doces: "Doces",
  misturas: "Misturas",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-4/3 bg-secondary overflow-hidden">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <ShoppingBag className="h-10 w-10 opacity-40" />
          </div>
        )}

        {product.is_bestseller && (
          <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
            Mais Vendido
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
          {CATEGORY_LABELS[product.category] || product.category}
        </p>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
