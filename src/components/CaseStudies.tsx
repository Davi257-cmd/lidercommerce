import { TrendingUp, Settings, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    icon: TrendingUp,
    company: "Confeitaria Brasil",
    segment: "Alimentos & Bebidas",
    before: "R$ 15k/mês (offline)",
    after: "R$ 120k/mês (marketplaces)",
    growth: "800%",
    timeframe: "8 meses",
    metric: "+5 mil vendas/mês",
    color: "primary",
  },
  {
    icon: Settings,
    company: "Eletrônicos XYZ",
    segment: "Tecnologia & Eletrônicos",
    before: "Tentava sozinho, caos operacional",
    after: "Gestão profissional estruturada",
    growth: "450%",
    timeframe: "6 meses",
    metric: "Margem cresceu 35%",
    color: "secondary",
  },
  {
    icon: ShoppingBag,
    company: "Distribuição Brasil",
    segment: "Atacado & Distribuição",
    before: "1 marketplace saturado",
    after: "5 marketplaces com tráfego diverso",
    growth: "600%",
    timeframe: "10 meses",
    metric: "10k pedidos/mês",
    color: "primary",
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-deep mb-3 sm:mb-4">
            <span className="text-primary">Resultados</span> Reais
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-medium max-w-2xl mx-auto px-4">
            Casos de sucesso de clientes que transformaram seus negócios
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-green-soft to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border-2 border-border hover:border-primary hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl w-fit mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <caseStudy.icon className={`h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-${caseStudy.color}`} />
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-gray-deep mb-1">
                  {caseStudy.company}
                </h3>
                <p className="text-xs sm:text-sm text-gray-medium mb-4 sm:mb-6">{caseStudy.segment}</p>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-medium uppercase tracking-wide mb-1">
                      Antes
                    </div>
                    <div className="text-xs sm:text-sm text-gray-deep">{caseStudy.before}</div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-xs text-gray-medium uppercase tracking-wide mb-1">
                      Depois
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-deep">{caseStudy.after}</div>
                  </div>
                </div>

                <div className="mt-auto pt-4 sm:pt-6 border-t border-primary/20 space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-medium">Crescimento</span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">{caseStudy.growth}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-medium">Prazo</span>
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-deep">{caseStudy.timeframe}</span>
                  </div>
                  <div className="pt-2 sm:pt-3 border-t border-primary/10">
                    <div className="text-xs sm:text-sm font-semibold text-primary">{caseStudy.metric}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-base sm:text-lg lg:text-xl font-heading font-semibold text-gray-deep px-4">
            Próxima história de sucesso: <span className="text-primary">A SUA</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
