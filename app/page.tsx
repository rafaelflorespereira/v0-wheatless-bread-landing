import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Products } from "@/components/landing/products"
import { Benefits } from "@/components/landing/benefits"
import { Story } from "@/components/landing/story"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Benefits />
      <Story />
      <CTA />
      <Footer />
    </main>
  )
}
