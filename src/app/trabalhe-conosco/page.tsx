export default function TrabalheConosco() {
  return (
    <main className="site-container py-24 md:py-36">
      <div className="max-w-5xl mx-auto text-center mb-12 md:mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Venha iluminar o futuro conosco!
        </h1>
        <p className="text-lg text-foreground/80 mb-12">
          Na Solaris Nord Energia, acreditamos que nosso maior ativo são as
          pessoas. Se você é apaixonado por inovação, sustentabilidade e quer
          fazer parte da transformação energética do Nordeste, queremos te
          conhecer.
        </p>

        <div className="bg-navbar p-8 rounded-2xl border border-gray-200/10 shadow-lg">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Como se candidatar
          </h2>
          <p className="text-foreground/80 mb-8">
            Envie seu currículo atualizado para o nosso e-mail de recrutamento
            com o assunto <strong>"Vaga - [Seu Nome]"</strong>.
          </p>

          <a
            href="mailto:rh@solarisnordenergia.com.br"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-md"
          >
            Enviar Currículo por E-mail
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-xl font-bold text-primary mb-6">
            Por que trabalhar na Solaris Nord?
          </h3>
          <ul className="space-y-4 text-foreground/80 text-left md:text-center inline-block">
            <li className="flex items-center gap-3">
              <span className="text-secondary font-bold">✓</span> Ambiente
              focado em inovação e energia limpa.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-secondary font-bold">✓</span> Cultura de
              valorização do talento local.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-secondary font-bold">✓</span> Oportunidade
              de crescer junto com o setor solar no Nordeste.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
