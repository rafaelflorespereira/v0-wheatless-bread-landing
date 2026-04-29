import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  products: [
    { label: "Pães", href: "#" },
    { label: "Massa de Pizza", href: "#" },
    { label: "Doces", href: "#" },
    { label: "Misturas para Pão", href: "#" },
  ],
  company: [
    { label: "Nossa História", href: "#story" },
    { label: "Blog", href: "#" },
    { label: "Trabalhe Conosco", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  support: [
    { label: "Fale Conosco", href: "#contact" },
    { label: "Perguntas Frequentes", href: "#" },
    { label: "Entrega", href: "#" },
    { label: "Trocas e Devoluções", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif font-bold text-background">
                Vó Zulmira
              </span>
            </Link>
            <p className="text-background/70 max-w-sm">
              Criando deliciosos pães e produtos sem trigo para uma vida mais saudável e feliz.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-background">Assine nossa newsletter</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Digite seu e-mail" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
                />
                <Button variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-background mb-4">Produtos</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-background mb-4">Suporte</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Vó Zulmira. Todos os direitos reservados.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="h-10 w-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-background" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
