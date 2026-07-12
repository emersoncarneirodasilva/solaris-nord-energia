import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import house from "../../../public/images/hero-image.webp";

export default function Hero() {
  // Define o número de telefone do .env
  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || "";

  // Define a mensagem personalizada
  const message =
    "Olá! Vi o site da Solaris Nord Energia e gostaria de saber como a energia solar pode reduzir minha conta de luz. Pode me ajudar?";

  // Cria o link dinâmico
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section className="w-full pt-16 pb-36 md:pt-24 md:pb-44 bg-background">
      <div className="site-container grid lg:grid-cols-2 gap-14 items-center">
        {/* Lado Esquerdo: Conteúdo */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 self-start">
            <CheckCircle size={16} />
            <span className="text-sm font-medium">
              Atendimento em todo o Nordeste
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            Reduza até 95% da sua conta de energia com{" "}
            <span className="text-secondary">energia solar</span>
          </h1>

          <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
            Economize dinheiro e invista no que importa com a melhor solução
            solar para o Nordeste brasileiro. Especialistas em converter o nosso
            sol em lucro real para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Botão de Ação Imediata */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-tertiary text-white font-bold rounded-lg transition-all hover:bg-tertiary/90 shadow-lg"
            >
              Falar com especialista
            </a>

            {/* Botão de Ação Consultiva */}
            <Link
              href="#contato"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-lg hover:border-secondary hover:text-secondary transition-colors"
            >
              Solicitar simulação gratuita
            </Link>
          </div>
        </div>

        {/* Lado Direito: Imagem e Card de Provas */}
        <div className="relative w-full lg:max-w-xl justify-self-end">
          <div className="relative rotate-2 hover:rotate-0 transition-all duration-1000 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={house}
              alt="Casa com painéis solares"
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Card Flutuante mantido na posição correta */}
          <div className="absolute -bottom-8 -left-2 md:-left-4 lg:-left-8 bg-background p-4 sm:p-6 rounded-2xl border border-primary/10 shadow-xl flex items-center gap-4 z-10 w-52 sm:w-65">
            <div className="p-3 bg-secondary/5 rounded-xl text-secondary">
              <CheckCircle size={28} />
            </div>
            <div>
              <div className="text-xl sm:text-3xl font-bold text-primary dark:text-foreground">
                +3.500
              </div>
              <div className="text-xs text-foreground/70">
                Projetos instalados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
