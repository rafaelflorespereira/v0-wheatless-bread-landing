#!/usr/bin/env bash
#
# create-products-ssr-pr.sh
# Run this from the ROOT of your Next.js repo. It will:
#   1. write the four new files
#   2. install @supabase/supabase-js
#   3. create a branch, commit, and push
#   4. open a PR (if the GitHub CLI `gh` is installed and authed)
#
set -euo pipefail

# --- sanity checks ----------------------------------------------------------
if [ ! -d .git ]; then
  echo "error: run this from the root of your git repo (no .git found here)" >&2
  exit 1
fi

BRANCH="feat/products-ssr"

# --- write files ------------------------------------------------------------
mkdir -p lib/supabase components/products

cat > lib/supabase/server.ts <<'EOF'
import "server-only"
import { createClient } from "@supabase/supabase-js"

/**
 * Server-side Supabase client for read-only, public data (e.g. the product
 * catalog). It uses the publishable (anon) key, so reads must be allowed by an
 * RLS policy on the table — see the note at the bottom of this file.
 */
export function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and/or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    )
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
}

/*
 * RLS reminder
 * ------------
 * For the publishable key to read the products table, add a SELECT policy:
 *
 *   alter table products enable row level security;
 *
 *   create policy "Public can read available products"
 *     on products for select
 *     to anon, authenticated
 *     using (is_available is true);
 *
 * To query with elevated privileges (bypassing RLS) use SUPABASE_SERVICE_ROLE_KEY
 * instead — but never expose that key to the browser or prefix it NEXT_PUBLIC_.
 */
EOF

cat > lib/types.ts <<'EOF'
export interface Product {
  id: string
  name: string
  slug: string
  description: string | null
  /**
   * Postgres `numeric` is returned by PostgREST as a string to preserve
   * precision. Coerce with Number(...) before formatting (the card does this).
   */
  price: number | string
  category: string
  image_url: string | null
  is_bestseller: boolean | null
  is_available: boolean | null
  weight: string | null
  ingredients: string[] | null
  allergens: string[] | null
  nutritional_info: Record<string, unknown> | null
  created_at: string | null
  updated_at: string | null
}
EOF

cat > components/products/product-card.tsx <<'EOF'
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/types"

function formatPrice(price: number | string) {
  return `R$ ${Number(price).toFixed(2).replace(".", ",")}`
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
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
          {product.category}
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
          <Button
            size="sm"
            variant="outline"
            className="gap-2 border-primary/30 hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingBag className="h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  )
}
EOF

cat > components/products/product-list.tsx <<'EOF'
import { createSupabaseServerClient } from "@/lib/supabase/server"
import type { Product } from "@/lib/types"
import { ProductCard } from "./product-card"

/**
 * Server Component (SSR). Async with no "use client" directive, so it runs only
 * on the server and fetches data during render.
 *
 * Control caching from the PAGE that renders this (route segment config):
 *   export const dynamic = "force-dynamic"  // always fresh, per request
 *   export const revalidate = 60            // ISR
 */
export async function ProductList() {
  const supabase = createSupabaseServerClient()

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_available", true)
    .order("is_bestseller", { ascending: false, nullsFirst: false })
    .order("name", { ascending: true })

  if (error) {
    return (
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            Não foi possível carregar os produtos no momento.
          </p>
        </div>
      </section>
    )
  }

  const products = (data ?? []) as Product[]

  if (products.length === 0) {
    return (
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            Nenhum produto disponível no momento.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Nossa Coleção
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Sabor e saúde em cada mordida
          </h2>
          <p className="text-lg text-muted-foreground">
            De pães artesanais a massas de pizza, descubra opções que nunca
            comprometem o sabor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
EOF

echo "✓ files written"

# --- install dependency -----------------------------------------------------
if command -v pnpm >/dev/null 2>&1; then
  pnpm add @supabase/supabase-js
else
  echo "warning: pnpm not found — install @supabase/supabase-js manually" >&2
fi

# --- branch, commit, push ---------------------------------------------------
git checkout -b "$BRANCH"
git add lib/supabase/server.ts lib/types.ts \
        components/products/product-card.tsx \
        components/products/product-list.tsx \
        package.json pnpm-lock.yaml
git commit -m "feat(products): SSR product list from Supabase

- add server-side Supabase client (publishable key)
- add Product type matching the products table
- add ProductCard + ProductList server component"

git push -u origin "$BRANCH"

# --- open PR ----------------------------------------------------------------
if command -v gh >/dev/null 2>&1; then
  gh pr create \
    --title "feat(products): SSR product list from Supabase" \
    --body "Adds an SSR Server Component that renders products from the Supabase \`products\` table.

**Includes**
- \`lib/supabase/server.ts\` – server Supabase client (publishable key)
- \`lib/types.ts\` – Product type
- \`components/products/product-card.tsx\` – product card (matches existing landing styling)
- \`components/products/product-list.tsx\` – async SSR list component

**Before merge / deploy**
- Add an RLS SELECT policy on \`products\` (SQL in \`server.ts\`)
- Add the Supabase image host to \`next.config\` \`images.remotePatterns\`
- Render \`<ProductList />\` in a page with \`revalidate\` or \`dynamic\` set"
  echo "✓ PR opened"
else
  echo "gh CLI not found — branch pushed. Open the PR from the GitHub web UI." >&2
fi
