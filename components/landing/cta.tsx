import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
          Ready to taste the difference?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of happy customers who have discovered the joy of wheat-free bread 
          that actually tastes amazing. Your first order ships free!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8">
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-secondary text-base px-8">
            Contact Us
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          Free shipping on orders over $35 • 30-day freshness guarantee
        </p>
      </div>
    </section>
  )
}
