import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Normalmente, nossos clientes começam a ver melhorias significativas entre 30-60 dias. O crescimento é consistente e sustentável, com picos maiores após 3-6 meses de operação estruturada.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, trabalhamos sem lock-in. Você pode cancelar sem penalidades, embora recomendemos um período mínimo de 3 meses para resultados otimizados.",
  },
  {
    question: "E se minhas vendas caírem?",
    answer: "Ajustamos a estratégia imediatamente. Nossa garantia é de trabalho contínuo até atingir os objetivos. Não deixamos clientes com resultados abaixo do esperado.",
  },
  {
    question: "Como funciona a comissão sobre vendas?",
    answer: "Totalmente transparente: você vende, nós recebemos a comissão percentual acordada sobre o faturamento real. Quanto mais você vende, mais ganhamos juntos. É um modelo de parceria genuína.",
  },
  {
    question: "Preciso ter experiência com marketplace?",
    answer: "Não! Nós cuidamos de tudo: cadastro de produtos, otimização de anúncios, gestão de estoque, atendimento, estratégia. Você apenas aprova e acompanha os resultados.",
  },
  {
    question: "Qual o investimento mínimo?",
    answer: "Nosso plano Bronze começa em R$ 299/mês + 4% de comissão. Ideal para quem está começando. Para resultados máximos, recomendamos o plano Ouro com acesso ao Ads Seller.",
  },
  {
    question: "Como vocês fazem as fotos dos produtos?",
    answer: "Temos estúdio profissional equipado com lightbox, câmeras de alta resolução e fotógrafos especializados. Capturamos múltiplos ângulos, detalhes e aplicamos edição de qualidade comercial.",
  },
  {
    question: "E se eu não gostar do serviço?",
    answer: "Oferecemos análise gratuita inicial sem compromisso. Você conhece nossa metodologia, vê o plano de ação e só contrata se fizer sentido para seu negócio. Zero risco inicial.",
  },
];

export const FAQ = () => {
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
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-medium max-w-2xl mx-auto px-4">
            Tudo que você precisa saber antes de começar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg sm:rounded-xl border-2 border-border px-4 sm:px-5 lg:px-6 data-[state=open]:border-primary transition-all"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-sm sm:text-base lg:text-lg text-gray-deep hover:text-primary py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm lg:text-base text-gray-medium leading-relaxed pb-3 sm:pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
