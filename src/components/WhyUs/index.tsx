import { PiggyBank, Home, Leaf, TrendingUp } from "lucide-react";

const features = [
  {
    name: "Economia",
    description:
      "Redução imediata de até 95% no valor da sua fatura mensal de energia elétrica.",
    icon: PiggyBank,
  },
  {
    name: "Valorização",
    description:
      "Imóveis com sistema fotovoltaico valorizam até 10% no mercado imobiliário.",
    icon: Home,
  },
  {
    name: "Sustentabilidade",
    description:
      "Energia limpa, renovável e inesgotável para um futuro sem emissões de carbono.",
    icon: Leaf,
  },
  {
    name: "ROI Rápido",
    description:
      "O sistema se paga em média de 3 a 4 anos, gerando lucro livre por mais de duas décadas.",
    icon: TrendingUp,
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-nos" className="w-full py-24 md:py-36 bg-background">
      <div className="site-container">
        {/* Título da Seção */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Por que escolher a Solaris Nord Energia?
          </h2>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-benefits p-8 rounded-3xl transition-all duration-300 border border-gray-100/10 hover:shadow-lg"
            >
              <div className="w-16 h-16 bg-secondary-dark/10 flex items-center justify-center rounded-2xl mb-6 text-secondary-dark">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.name}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
