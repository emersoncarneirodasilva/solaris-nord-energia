import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center site-container text-center">
      <h1 className="text-8xl font-bold text-secondary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-primary mb-6">
        Ops! Esta página não está gerando energia no momento.
      </h2>
      <p className="text-foreground/70 mb-10 max-w-md">
        Não conseguimos encontrar o que você buscava. Que tal voltar para nossa
        página inicial e continuar explorando nossas soluções de energia?
      </p>

      <Link
        href="/"
        className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary-dark transition-colors"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}
