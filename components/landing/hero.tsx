import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">
                Sem Trigo | Artesanal | Saudável
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
                Pão que nutre seu corpo
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Descubra nossa coleção de pães artesanais sem trigo, massas de pizza e produtos feitos com amor e ingredientes naturais.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8">
                Ver Produtos
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-primary/30 hover:bg-secondary">
                Nossa História
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>100% Sem Trigo</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Sem Conservantes</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-primary text-xs font-bold">✓</span>
                </div>
                <span>Fresquinho Todo Dia</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <Image
                src="/images/hero-bread.jpg"
                alt="Pães artesanais sem trigo"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Mais Vendido</p>
              <p className="font-serif font-semibold text-foreground">Pão de Fermentação Natural</p>
              <p className="text-primary font-bold">R$ 18,90</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
