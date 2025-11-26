import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { motion } from "framer-motion";

export const FinalCTA = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-green-soft via-white-off to-green-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 sm:mb-6">
            Está Pronto Para <span className="text-primary">Escalar?</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-deep font-semibold mb-6 sm:mb-8 px-4">
            Deixe de perder dinheiro. Escale suas vendas online com especialistas.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button variant="cta" size="default" className="text-sm sm:text-base lg:text-lg w-full sm:w-auto">
              <WhatsAppIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              ANÁLISE GRATUITA AGORA
            </Button>
            <Button variant="hero-outline" size="default" className="text-sm sm:text-base lg:text-lg w-full sm:w-auto">
              Falar com Especialista
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            {[
              "Análise de viabilidade: Grátis",
              "Sem compromisso inicial",
              "Resposta em 24h",
              "Estratégia personalizada",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 justify-center sm:justify-start bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-primary/20"
              >
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-deep">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-primary/20 mx-4 sm:mx-0"
          >
            <p className="text-sm sm:text-base lg:text-lg text-gray-deep font-medium">
              <span className="text-primary font-bold">A cada dia que passa</span>, você deixa dinheiro na mesa.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Sua concorrência já está escalando. <span className="text-primary font-bold">E você?</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
