import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "BRONZE",
    subtitle: "Entry",
    price: "4% sobre faturamento",
    monthly: "R$ 299/mês",
    capacity: "1-2 lojas",
    features: [
      "Gestão básica de marketplace",
      "Chat moderado",
      "Relatórios básicos mensais",
      "Suporte por email",
    ],
    idealFor: "Começando online",
    cta: "Começar",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "PRATA",
    subtitle: "Standard",
    price: "5% sobre faturamento",
    monthly: "R$ 349/mês",
    capacity: "3-5 lojas",
    features: [
      "Tudo do Bronze +",
      "Fotos de cortesia (até 50/mês)",
      "Chat completo 24/7",
      "Análises detalhadas semanais",
      "Suporte direto via WhatsApp",
    ],
    idealFor: "Escalando vendas",
    cta: "Escolher Prata",
    variant: "default" as const,
    popular: false,
  },
  {
    name: "OURO",
    subtitle: "Premium",
    price: "6% sobre faturamento",
    monthly: "R$ 399/mês",
    capacity: "Lojas ilimitadas",
    features: [
      "Tudo do Prata +",
      "ACESSO EXCLUSIVO ADS SELLER",
      "Gerenciamento COMPLETO",
      "Atendimento especialista direto",
      "Consultoria estratégica mensal",
      "Prioridade absoluta",
    ],
    idealFor: "Crescimento máximo",
    highlight: "Típico ROI: +300% em 6 meses",
    cta: "Começar Agora",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "ENTERPRISE",
    subtitle: "Custom",
    price: "Sob consulta",
    monthly: "Conforme escala",
    capacity: "Multi-marketplace + integrações",
    features: [
      "Tudo personalizado",
      "API integrations",
      "Multi-canais",
      "Gerente de conta dedicado",
      "SLA garantido",
    ],
    idealFor: "Grandes operações",
    cta: "Conversar",
    variant: "hero-outline" as const,
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-b from-white-off to-green-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-deep mb-3 sm:mb-4">
            Escolha o Plano <span className="text-primary">Ideal</span> Para Seu Negócio
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-medium max-w-2xl mx-auto px-4">
            Transparência total. Sem surpresas. Pague baseado no que você vende.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-glow"
                  : "border-border hover:border-primary hover:shadow-elegant"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-2 sm:px-3 lg:px-4 py-1 rounded-full text-[10px] sm:text-xs lg:text-sm font-bold flex items-center gap-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                    MELHOR OFERTA
                  </div>
                </div>
              )}

              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-gray-deep mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-medium">{plan.subtitle}</p>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1">{plan.price}</div>
                <div className="text-xs sm:text-sm text-gray-medium">{plan.monthly}</div>
                <div className="text-[10px] sm:text-xs text-gray-medium mt-1 sm:mt-2">{plan.capacity}</div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-deep leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 sm:space-y-4">
                <div className="text-xs sm:text-sm text-gray-medium">
                  <span className="font-semibold text-gray-deep">Ideal para:</span> {plan.idealFor}
                </div>
                
                {plan.highlight && (
                  <div className="text-xs sm:text-sm font-semibold text-primary bg-green-soft p-2 sm:p-3 rounded-lg">
                    {plan.highlight}
                  </div>
                )}

                <Button
                  variant={plan.variant}
                  size="default"
                  className="w-full text-xs sm:text-sm"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2 sm:space-y-3"
        >
          <p className="text-xs sm:text-sm text-gray-medium">✓ Financie em até 12x sem juros</p>
          <p className="text-xs sm:text-sm text-gray-medium">✓ Sem taxas extras ou custos ocultos</p>
          <p className="text-xs sm:text-sm text-gray-medium font-semibold text-gray-deep">
            ✓ Análise gratuita antes de contratar
          </p>
        </motion.div>
      </div>
    </section>
  );
};
