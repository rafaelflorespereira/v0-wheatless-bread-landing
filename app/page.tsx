import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Benefits } from "@/components/landing/benefits";
import { Story } from "@/components/landing/story";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { ProductList } from "@/components/products/product-list";

export const revalidate = 60;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductList />
      <Benefits />
      <Story />
      <CTA />
      <Footer />
    </main>
  );
}
