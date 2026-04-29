import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Story() {
  return (
    <section
      id="story"
      className="py-20 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/story-baker.png"
                alt="Nossa padeira preparando pão fresco sem trigo"
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
              Nossa História
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance">
              Nascido da paixão por um pão melhor
            </h2>
            <div className="space-y-4 text-primary-foreground/90 leading-relaxed">
              <p>
                A Vó Zulmira começou em uma pequena cozinha quando nosso
                fundador descobriu uma sensibilidade ao trigo. Recusando-se a
                desistir do amor por pão fresco, ele passou meses aperfeiçoando
                receitas que entregariam o sabor e a textura que ele desejava,
                sem os ingredientes que causavam desconforto.
              </p>
              <p>
                Hoje, servimos milhares de clientes que, como ele, acreditam que
                restrições alimentares não devem significar sacrificar o sabor.
                Cada pão, biscoito e massa é feito com o mesmo cuidado e atenção
                daquela primeira fornada na cozinha da vó.
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2 mt-4"
            >
              Leia Nossa História Completa
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
