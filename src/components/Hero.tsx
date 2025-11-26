import { Button } from "@/components/ui/button";
import { TrendingUp, ShoppingCart, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-white-off to-green-soft py-12 sm:py-16 lg:py-20 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-bold text-gray-deep leading-tight tracking-tight">
                Sua Empresa{" "}
                <span className="text-primary">PRESENTE NOS MAIORES MARKETPLACES</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-semibold text-secondary">
                Gestão inteligente + Sistema exclusivo Ads Seller
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg text-gray-medium">
              <p className="font-medium">Não deixe mais dinheiro na mesa.</p>
              <p>Mercado Livre, Shopee, B2Brazil... As vendas crescem 200-400% com expertise profissional.</p>
              <p className="font-semibold text-gray-deep">Você gestiona o negócio. Nós escalamos as vendas.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                variant="hero"
                size="default"
                className="text-sm sm:text-base lg:text-lg sm:h-12 lg:h-14"
                onClick={() => scrollToSection("contato")}
              >
                <TrendingUp className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Comece Análise Gratuita
              </Button>
              <Button
                variant="hero-outline"
                size="default"
                className="text-sm sm:text-base lg:text-lg sm:h-12 lg:h-14"
                onClick={() => scrollToSection("servicos")}
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 border-t border-border">
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">200-400%</div>
                <div className="text-xs sm:text-sm text-gray-medium">Crescimento médio</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">2.382</div>
                <div className="text-xs sm:text-sm text-gray-medium">Seguidores confiantes</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-gray-medium">Suporte dedicado</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary/10 via-green-soft to-white h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="text-center p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white/80 rounded-lg p-2 sm:p-3 lg:p-4 shadow-md">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">+300%</div>
                    <div className="text-[10px] sm:text-xs text-gray-medium">Crescimento</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-2 sm:p-3 lg:p-4 shadow-md">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">R$ 120k</div>
                    <div className="text-[10px] sm:text-xs text-gray-medium">Vendas</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-2 sm:p-3 lg:p-4 shadow-md">
                    <div className="text-base sm:text-lg lg:text-2xl font-bold text-primary">5.2k</div>
                    <div className="text-[10px] sm:text-xs text-gray-medium">Pedidos</div>
                  </div>
                </div>
                <div className="bg-white/80 rounded-lg p-4 sm:p-5 lg:p-6 shadow-md">
                  <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-primary mx-auto mb-2 sm:mb-4" />
                  <p className="text-xs sm:text-sm text-gray-deep font-semibold">Dashboard de Crescimento</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Icons - Hidden on mobile, visible on larger screens */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="hidden md:block absolute -top-4 lg:-top-6 -right-4 lg:-right-6 bg-white rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-elegant"
            >
              <TrendingUp className="h-5 w-5 lg:h-8 lg:w-8 text-primary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="hidden md:block absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-6 bg-white rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-elegant"
            >
              <ShoppingCart className="h-5 w-5 lg:h-8 lg:w-8 text-secondary" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="hidden lg:block absolute top-1/2 -right-6 lg:-right-8 bg-white rounded-xl lg:rounded-2xl p-2 lg:p-4 shadow-elegant"
            >
              <BarChart3 className="h-5 w-5 lg:h-8 lg:w-8 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
