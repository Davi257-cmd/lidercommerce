import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const Calculator = () => {
  const [revenue, setRevenue] = useState<string>("50000");
  const [growth, setGrowth] = useState<string>("300");
  const [marketplace, setMarketplace] = useState<string>("mercadolivre");

  const calculateROI = () => {
    const currentRevenue = parseFloat(revenue) || 0;
    const growthPercent = parseFloat(growth) || 0;
    const newRevenue = currentRevenue * (1 + growthPercent / 100);
    const extraRevenue = newRevenue - currentRevenue;
    const yearlyExtra = extraRevenue * 12;
    const roiPercent = ((extraRevenue / currentRevenue) * 100).toFixed(0);

    return {
      newRevenue: newRevenue.toLocaleString("pt-BR"),
      extraRevenue: extraRevenue.toLocaleString("pt-BR"),
      yearlyExtra: yearlyExtra.toLocaleString("pt-BR"),
      roiPercent,
    };
  };

  const results = calculateROI();

  return (
    <section id="calculadora" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-white-off">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-deep mb-3 sm:mb-4">
            Quanto Você <span className="text-primary">Pode Ganhar?</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-medium max-w-2xl mx-auto px-4">
            Descubra o potencial de crescimento das suas vendas online
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 xl:p-12 border-2 border-primary shadow-elegant"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Inputs */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-deep mb-2">
                    Faturamento Mensal Atual (R$)
                  </label>
                  <Input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    placeholder="50000"
                    className="text-sm sm:text-base lg:text-lg border-2 focus:border-primary h-10 sm:h-12"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-deep mb-2">
                    Crescimento Esperado (%)
                  </label>
                  <Input
                    type="number"
                    value={growth}
                    onChange={(e) => setGrowth(e.target.value)}
                    placeholder="300"
                    className="text-sm sm:text-base lg:text-lg border-2 focus:border-primary h-10 sm:h-12"
                  />
                  <p className="text-[10px] sm:text-xs text-gray-medium mt-1">
                    Crescimento típico: 200-400%
                  </p>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-deep mb-2">
                    Marketplace Principal
                  </label>
                  <Select value={marketplace} onValueChange={setMarketplace}>
                    <SelectTrigger className="text-sm sm:text-base lg:text-lg border-2 focus:border-primary h-10 sm:h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mercadolivre">Mercado Livre</SelectItem>
                      <SelectItem value="shopee">Shopee</SelectItem>
                      <SelectItem value="b2brazil">B2Brazil</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-green-soft to-white p-4 sm:p-5 lg:p-6 rounded-lg sm:rounded-xl space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  <h3 className="text-base sm:text-lg lg:text-xl font-heading font-bold text-gray-deep">
                    Seu Potencial
                  </h3>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-medium mb-1">Vendas Potenciais</div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">R$ {results.newRevenue}</div>
                  </div>

                  <div>
                    <div className="text-xs sm:text-sm text-gray-medium mb-1">Receita Extra Mensal</div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">R$ {results.extraRevenue}</div>
                  </div>

                  <div>
                    <div className="text-xs sm:text-sm text-gray-medium mb-1">Margem Extra em 12 Meses</div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-deep">R$ {results.yearlyExtra}</div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-primary/20">
                    <div className="text-xs sm:text-sm text-gray-medium mb-1">ROI Estimado</div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{results.roiPercent}%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border text-center">
              <Button variant="cta" size="default" className="text-sm sm:text-base w-full sm:w-auto">
                Conversar com Especialista
              </Button>
              <p className="text-xs sm:text-sm text-gray-medium mt-3 sm:mt-4">
                Análise gratuita • Sem compromisso • Resposta em 24h
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
