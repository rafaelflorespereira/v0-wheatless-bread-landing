"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

const categories = ["Todos", "Pães", "Massa de Pizza", "Doces", "Misturas"]

const products = [
  {
    id: 1,
    name: "Pão de Fermentação Natural",
    category: "Pães",
    price: 18.90,
    image: "/images/product-sourdough.jpg",
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Pão Multigrãos",
    category: "Pães",
    price: 21.90,
    image: "/images/product-multigrain.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Massa de Pizza",
    category: "Massa de Pizza",
    price: 14.90,
    image: "/images/product-pizza.jpg",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Rosca de Canela",
    category: "Doces",
    price: 24.90,
    image: "/images/product-cinnamon.jpg",
    badge: null,
  },
  {
    id: 5,
    name: "Focaccia",
    category: "Pães",
    price: 22.90,
    image: "/images/product-focaccia.jpg",
    badge: "Novo",
  },
  {
    id: 6,
    name: "Kit Mistura para Pão",
    category: "Misturas",
    price: 29.90,
    image: "/images/product-mix.jpg",
    badge: null,
  },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Nossa Coleção
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Sabor e saúde em cada mordida
          </h2>
          <p className="text-lg text-muted-foreground">
            De pães artesanais a massas de pizza, descubra opções sem trigo que nunca comprometem o sabor.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {product.badge}
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
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <Button size="sm" variant="outline" className="gap-2 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                    <ShoppingBag className="h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
