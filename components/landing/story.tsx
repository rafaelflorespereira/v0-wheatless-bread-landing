import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Story() {
  return (
    <section id="story" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/story-baker.jpg"
                alt="Our baker preparing fresh wheat-free bread"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-sm uppercase tracking-widest text-primary-foreground/70 font-medium">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance">
              Born from a passion for better bread
            </h2>
            <div className="space-y-4 text-primary-foreground/90 leading-relaxed">
              <p>
                Pure Grain Co. started in a small kitchen in 2019 when our founder, Maria, 
                was diagnosed with a wheat sensitivity. Refusing to give up her love for fresh bread, 
                she spent months perfecting recipes that would deliver the taste and texture 
                she craved without the ingredients that caused her discomfort.
              </p>
              <p>
                Today, we serve thousands of customers who, like Maria, believe that dietary 
                restrictions shouldn&apos;t mean sacrificing flavor. Every loaf, roll, and pizza dough 
                is made with the same care and attention as that first batch in Maria&apos;s kitchen.
              </p>
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 mt-4"
            >
              Read Our Full Story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
