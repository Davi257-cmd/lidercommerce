import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold text-primary">LIDER</span>
          <span className="text-2xl font-heading font-bold text-gray-deep">COMMERCE</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-sm font-medium text-gray-deep hover:text-primary transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("planos")}
            className="text-sm font-medium text-gray-deep hover:text-primary transition-colors"
          >
            Planos
          </button>
          <button
            onClick={() => scrollToSection("calculadora")}
            className="text-sm font-medium text-gray-deep hover:text-primary transition-colors"
          >
            Calculadora
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium text-gray-deep hover:text-primary transition-colors"
          >
            Contato
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <a href="/login" className="hidden md:inline-flex">
            <Button
              variant="outline"
              size="default"
            >
              Login
            </Button>
          </a>
          <Button
            variant="hero"
            size="default"
            onClick={() => scrollToSection("contato")}
            className="hidden md:inline-flex"
          >
            Análise Gratuita
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-deep" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left text-sm font-medium text-gray-deep hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-left text-sm font-medium text-gray-deep hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("calculadora")}
              className="text-left text-sm font-medium text-gray-deep hover:text-primary transition-colors"
            >
              Calculadora
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-left text-sm font-medium text-gray-deep hover:text-primary transition-colors"
            >
              Contato
            </button>
            <a href="/login" className="w-full">
              <Button variant="outline" size="default" className="w-full">
                Login
              </Button>
            </a>
            <Button variant="hero" size="default" className="w-full">
              Análise Gratuita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
