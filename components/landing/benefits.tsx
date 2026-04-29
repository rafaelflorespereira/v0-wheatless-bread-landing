import { Leaf, Heart, Wheat, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Wheat,
    title: "100% Sem Trigo",
    description: "Todos os nossos produtos são feitos sem trigo, usando farinhas alternativas de alta qualidade.",
  },
  {
    icon: Heart,
    title: "Saudável para o Coração",
    description: "Rico em fibras e nutrientes, nossos pães apoiam a saúde digestiva e o bem-estar geral.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturais",
    description: "Sem conservantes ou aditivos artificiais. Apenas ingredientes puros e naturais que você pode confiar.",
  },
  {
    icon: Sparkles,
    title: "Qualidade Artesanal",
    description: "Cada produto é feito à mão com cuidado, garantindo sabor e textura excepcionais sempre.",
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
                Por Que Nos Escolher
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
                Feito para sua saúde e felicidade
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que todos merecem pão delicioso, independente de restrições alimentares. 
                Nossas receitas sem trigo são desenvolvidas para entregar o sabor e textura que você ama, 
                enquanto apoia sua jornada de saúde.
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
                  <p className="text-sm text-muted-foreground mt-2">Produtos Únicos</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary">10K+</p>
                  <p className="text-sm text-muted-foreground mt-2">Clientes Felizes</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary">5</p>
                  <p className="text-sm text-muted-foreground mt-2">Anos de Tradição</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-serif font-bold text-primary">4.9</p>
                  <p className="text-sm text-muted-foreground mt-2">Avaliação Média</p>
                </div>
              </div>
              
              {/* Quote */}
              <div className="border-t border-border pt-8">
                <blockquote className="text-lg font-serif italic text-foreground">
                  {`"Finalmente, um pão que é delicioso e não me faz mal. A Vó Zulmira mudou minha vida!"`}
                </blockquote>
                <p className="text-sm text-muted-foreground mt-4">— Maria S., Cliente Verificada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
