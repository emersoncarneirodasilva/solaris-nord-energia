import Image from "next/image";
import solarNeighborhood from "../../../public/images/houses.webp";
import { strengths } from "@/src/Constants/strengths";

export default function CompanyStrengths() {
  return (
    <section id="company-strengths" className="py-24 md:py-36 bg-background">
      <div className="site-container grid lg:grid-cols-2 gap-20 items-center">
        {/* Lado Esquerdo: Texto */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 md:mb-20 leading-tight">
            Por que somos a referência em energia solar no NE?
          </h2>

          <div className="space-y-10">
            {strengths.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado Direito: Imagem com Borda */}
        <div className="relative px-4 sm:px-0">
          <div className="relative aspect-square w-full max-w-162.5 mx-auto rounded-4xl overflow-hidden shadow-2xl border-8 border-[#f8fafc]">
            <Image
              src={solarNeighborhood}
              alt="Instalação solar no Nordeste"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>

          {/* Selo de Garantia */}
          <div className="absolute -top-4 right-0 md:right-6 lg:-right-2 -rotate-12 w-28 h-28 sm:w-36 sm:h-36 bg-tertiary rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl z-10 border-4 border-[#f8fafc]">
            <span className="font-bold text-inverted leading-tight text-xs sm:text-sm">
              25 anos de garantia de eficiência
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
