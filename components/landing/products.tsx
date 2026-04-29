"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

const categories = ["All", "Breads", "Pizza Dough", "Pastries", "Mixes"]

const products = [
  {
    id: 1,
    name: "Classic Sourdough",
    category: "Breads",
    price: 8.99,
    image: "/images/product-sourdough.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Multigrain Loaf",
    category: "Breads",
    price: 9.49,
    image: "/images/product-multigrain.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Pizza Dough Ball",
    category: "Pizza Dough",
    price: 6.99,
    image: "/images/product-pizza.jpg",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Cinnamon Rolls",
    category: "Pastries",
    price: 12.99,
    image: "/images/product-cinnamon.jpg",
    badge: null,
  },
  {
    id: 5,
    name: "Focaccia",
    category: "Breads",
    price: 10.99,
    image: "/images/product-focaccia.jpg",
    badge: "New",
  },
  {
    id: 6,
    name: "Bread Mix Kit",
    category: "Mixes",
    price: 14.99,
    image: "/images/product-mix.jpg",
    badge: null,
  },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Our Collection
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Wholesome goodness in every bite
          </h2>
          <p className="text-lg text-muted-foreground">
            From artisan loaves to pizza doughs, discover wheat-free options that never compromise on taste.
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
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="sm" variant="outline" className="gap-2 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
