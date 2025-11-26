import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const Footer = () => {
  return (
    <footer className="bg-gray-deep text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-heading font-bold text-primary">LIDER</span>
              <span className="text-2xl font-heading font-bold text-white">COMMERCE</span>
            </div>
            <p className="text-gray-light text-sm mb-6">
              Gestão inteligente de marketplaces. Sistema Ads Seller exclusivo.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/lidercommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@lidercommerce.com.br"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#servicos" className="text-gray-light hover:text-primary transition-colors">
                  Sistema Ads Seller
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-light hover:text-primary transition-colors">
                  Fotografia Profissional
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-light hover:text-primary transition-colors">
                  Gestão de Chat
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-light hover:text-primary transition-colors">
                  Estratégia de Crescimento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#planos" className="text-gray-light hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#calculadora" className="text-gray-light hover:text-primary transition-colors">
                  Calculadora ROI
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-light hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-light hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-light text-sm mb-4">
              Receba dicas exclusivas sobre marketplaces
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-light"
              />
              <Button variant="hero" size="default">
                Enviar
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-light">
            <p>© 2024 Lider Commerce. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
