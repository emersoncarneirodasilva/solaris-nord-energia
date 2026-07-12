import Link from "next/link";
import { TrendingUp, Landmark } from "lucide-react";

export default function Benefits() {
  return (
    <section id="beneficios" className="w-full py-24 md:py-36 bg-benefits">
      <div className="site-container">
        {/* Cabeçalho */}
        <div className="text-center mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight mx-auto">
            Cansado de altas taxas na sua conta de luz?
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto">
            A energia no Brasil é uma das mais caras do mundo. Mas no Nordeste,
            temos o maior potencial solar do país a nosso favor.
          </p>
        </div>

        {/* Grid com proporção 2/3 e 1/3 e altura igual (items-stretch) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Problema (2/3) */}
          <div className="lg:col-span-2 bg-background p-8 lg:p-10 rounded-3xl border border-gray-100/20 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-red-500 mb-6">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                O problema: Inflação Energética
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed">
                As contas de luz sobem anualmente acima da inflação oficial.
                Você trabalha, mas o lucro do seu negócio ou a renda da sua
                família é drenada por taxas abusivas e bandeiras tarifárias
                imprevisíveis.
              </p>
            </div>
            <div className="bg-red-50 border border-red-100 p-5 rounded-xl text-red-700 font-medium mt-8">
              Perda estimada de R$ 24.000 em 5 anos para residências médias.
            </div>
          </div>

          {/* Card 2: Solução (1/3) */}
          <div className="lg:col-span-1 bg-primary text-inverted p-8 lg:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-secondary mb-6">
                <Landmark className="w-10 h-10" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                A solução: Investimento Inteligente
              </h3>
              <p className="text-inverted/80 text-lg leading-relaxed">
                Energia solar não é custo, é um ativo que se paga em tempo
                recorde. Você trava o preço da sua energia por 25 anos e protege
                seu patrimônio.
              </p>
            </div>
            <Link
              href="#por-que-nos"
              className="block text-center w-full py-4 bg-secondary-dark hover:bg-secondary text-white font-bold rounded-xl transition-colors duration-300 mt-8"
            >
              Ver Projeção de Retorno
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
