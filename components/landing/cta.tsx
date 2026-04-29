import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
          Pronto para sentir a diferença?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de clientes felizes que descobriram a alegria de comer pão sem trigo 
          que realmente é delicioso. Seu primeiro pedido tem frete grátis!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base px-8">
            Comprar Agora
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-secondary text-base px-8">
            Fale Conosco
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-6">
          Frete grátis em pedidos acima de R$ 100 | Garantia de frescor de 30 dias
        </p>
      </div>
    </section>
  )
}
