import { Leaf, Heart, Wheat, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Wheat,
    title: "100% Wheat-Free",
    description: "All our products are crafted without wheat, using premium alternative flours for those with sensitivities.",
  },
  {
    icon: Heart,
    title: "Heart Healthy",
    description: "Rich in fiber and nutrients, our breads support digestive health and overall wellness.",
  },
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "No artificial preservatives or additives. Just pure, wholesome ingredients you can trust.",
  },
  {
    icon: Sparkles,
    title: "Artisan Quality",
    description: "Each product is handcrafted with care, ensuring exceptional taste and texture every time.",
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
                Why Choose Us
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
                Crafted for your health and happiness
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe everyone deserves delicious bread, regardless of dietary restrictions. 
                Our wheat-free recipes are developed to deliver the taste and texture you love, 
                while supporting your health journey.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground mt-2">Unique Products</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground mt-2">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary">5</p>
                  <p className="text-sm text-muted-foreground mt-2">Years of Baking</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary">4.9</p>
                  <p className="text-sm text-muted-foreground mt-2">Average Rating</p>
                </div>
              </div>
              
              {/* Quote */}
              <div className="border-t border-border pt-8">
                <blockquote className="text-lg font-serif italic text-foreground">
                  {`"Finally, bread that tastes amazing and doesn't make me feel terrible. Pure Grain has changed my life!"`}
                </blockquote>
                <p className="text-sm text-muted-foreground mt-4">— Sarah M., Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
