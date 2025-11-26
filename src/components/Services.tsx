import { BarChart3, Camera, Headphones, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: BarChart3,
    title: "Sistema Ads Seller",
    description: "Clareza total de vendas, lucros e métricas em tempo real",
    features: ["Dashboard real-time", "Análise automática", "ROI calculado"],
    cta: "Explorar Sistema",
  },
  {
    icon: Camera,
    title: "Fotografia de Produtos",
    description: "Fotos que vendem, produzidas em estúdio profissional",
    features: ["Lightbox profissional", "Ângulos variados", "Qualidade HD"],
    cta: "Ver Portfolio",
  },
  {
    icon: Headphones,
    title: "Gestão de Chat & Reclamações",
    description: "Atendimento rápido que mantém clientes satisfeitos",
    features: ["Resposta 24h", "Resolução eficiente", "Zero perda de clientes"],
    cta: "Saber Mais",
  },
  {
    icon: Zap,
    title: "Estratégia de Crescimento",
    description: "Planejamento + Execução = Vendas exponenciais",
    features: ["Tráfego estratégico", "Posicionamento premium", "Promoções inteligentes"],
    cta: "Consultar",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-deep mb-3 sm:mb-4">
            Serviços <span className="text-primary">Completos</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-medium max-w-2xl mx-auto px-4">
            Tudo que você precisa para dominar marketplaces em um só lugar
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border-2 border-border hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="p-3 sm:p-4 bg-green-soft rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-gray-deep mb-2">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm lg:text-base text-gray-medium mb-3 sm:mb-4 flex-grow">
                  {service.description}
                </p>
                
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs sm:text-sm text-gray-medium flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="hero-outline"
                  size="sm"
                  className="w-full text-xs sm:text-sm"
                >
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
