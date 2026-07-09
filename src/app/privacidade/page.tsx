export default function Privacy() {
  return (
    <main className="site-container py-24 md:py-36">
      <div className="max-w-5xl mx-auto prose dark:prose-invert">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Política de Privacidade
        </h1>

        <p className="text-foreground/80 mb-6">
          A sua privacidade é importante para a Solaris Nord Energia. Esta
          política descreve como coletamos e usamos as informações quando você
          utiliza nosso site.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          1. Coleta de Informações
        </h2>
        <p className="text-foreground/80 mb-4">
          Coletamos informações que você fornece voluntariamente ao preencher
          nosso formulário de simulação ou ao entrar em contato via WhatsApp.
          Isso inclui dados como seu nome, telefone e informações sobre sua
          conta de energia.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          2. Uso dos Dados
        </h2>
        <p className="text-foreground/80 mb-4">
          Utilizamos seus dados exclusivamente para:
        </p>
        <ul className="list-disc pl-6 text-foreground/80 mb-6">
          <li>Realizar a simulação de viabilidade solar;</li>
          <li>
            Entrar em contato para oferecer nosso atendimento especializado;
          </li>
          <li>Melhorar a experiência de navegação em nosso site.</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          3. Proteção de Dados
        </h2>
        <p className="text-foreground/80 mb-4">
          Não compartilhamos, vendemos ou alugamos suas informações pessoais com
          terceiros. Seus dados são tratados com total confidencialidade e
          utilizados apenas para o propósito que você solicitou.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          4. Cookies
        </h2>
        <p className="text-foreground/80 mb-4">
          Utilizamos cookies apenas para melhorar sua experiência de navegação
          (como manter sua preferência de tema claro ou escuro).
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          5. Contato
        </h2>
        <p className="text-foreground/80">
          Se você tiver qualquer dúvida sobre esta política, entre em contato
          conosco através dos canais disponibilizados em nosso rodapé.
        </p>
      </div>
    </main>
  );
}
