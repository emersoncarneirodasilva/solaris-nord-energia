import Image from "next/image";
import { Star } from "lucide-react";
import testimonialImage01 from "../../../public/images/testimonials-image-01.webp";
import testimonialImage02 from "../../../public/images/testimonials-image-02.webp";

const testimonials = [
  {
    name: "Roberto Silva",
    role: "Sócio de Confecção - Fortaleza/CE",
    text: "Reduzimos drasticamente nossos custos fixos com a Solaris. Instalação técnica impecável e cumpriram todos os prazos. Nosso fluxo de caixa nunca foi tão eficiente.",
    image: testimonialImage02,
  },
  {
    name: "Maria Oliveira",
    role: "Arquiteta - Salvador/BA",
    text: "Nossa conta de luz era altíssima. Com o projeto da Solaris, o valor caiu para a taxa mínima e a economia é imediata todo mês. Foi a melhor decisão para nossa casa.",
    image: testimonialImage01,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="w-full py-24 md:py-36 bg-background">
      <div className="site-container">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Histórias de quem já mudou para o Sol
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-benefits p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="w-full md:w-1/2 h-48 relative rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-foreground/80 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <span className="text-sm text-secondary-dark font-medium">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
