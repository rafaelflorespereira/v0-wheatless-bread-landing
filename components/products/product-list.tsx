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
