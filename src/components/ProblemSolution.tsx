import { TrendingDown, TrendingUp, X, Check } from "lucide-react";
import { motion } from "framer-motion";

export const ProblemSolution = () => {
  const problems = [
    "Sem estratégia de tráfego qualificado",
    "Fotos de baixa qualidade prejudicam conversão",
    "Chats e reclamações consomem tempo valioso",
    "Concorrência feroz derruba suas margens",
    "Falta análise de dados para decisões",
  ];

  const solutions = [
    "Gestão completa + Sistema Ads Seller exclusivo",
    "Fotos profissionais que realmente vendem",
    "Atendimento ao cliente 100% gerenciado",
    "Estratégia de crescimento baseada em dados",
    "Dashboards em tempo real para controle total",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white-off">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-deep mb-3 sm:mb-4">
            De Frustração Para <span className="text-primary">Crescimento</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-medium max-w-2xl mx-auto px-4">
            Transformamos desafios em oportunidades de vendas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Problem Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 xl:p-10 border-2 border-border shadow-card"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-destructive/10 rounded-lg sm:rounded-xl">
                <TrendingDown className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-destructive" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-gray-deep">O PROBLEMA</h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-deep mb-4 sm:mb-6">
              Está em marketplace mas não escala?
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-medium">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-soft to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 xl:p-10 border-2 border-primary shadow-elegant"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-primary/10 rounded-lg sm:rounded-xl">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-primary">A SOLUÇÃO LIDER</h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-deep mb-4 sm:mb-6">
              Tudo gerenciado por especialistas
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-deep font-medium">{solution}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/20">
              <p className="text-sm sm:text-base text-gray-deep font-semibold">
                <span className="text-primary">Resultado:</span> Vendas crescem, você respira.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
