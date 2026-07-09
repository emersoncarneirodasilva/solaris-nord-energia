import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function FinalConversionSection() {
  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || "";
  const message =
    "Olá! Vi o site da Solaris Nord Energia e gostaria de saber como a energia solar pode reduzir minha conta de luz. Pode me ajudar?";
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-24 md:py-36 bg-benefits">
      <div className="site-container flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary font-headline mb-6">
          Aproveite o Sol do Nordeste Hoje
        </h2>

        <p className="text-lg text-foreground/70 max-w-lg mb-12">
          As tarifas de energia não vão parar de subir. Garanta sua
          independência energética com quem entende do assunto.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          {/* Botão de Simulação */}
          <Link
            href="#contato"
            className="px-8 py-4 bg-tertiary hover:bg-tertiary/90 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Quero economizar agora
          </Link>

          {/* Botão de WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-secondary-dark hover:brightness-125 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            Falar com consultor
          </a>
        </div>
      </div>
    </section>
  );
}
