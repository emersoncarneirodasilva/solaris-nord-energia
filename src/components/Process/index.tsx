import { steps } from "@/src/Constants/steps";

export default function Process() {
  return (
    <section
      id="processo"
      className="w-full py-24 md:py-36 bg-primary text-inverted"
    >
      <div className="site-container">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O caminho para sua liberdade energética
          </h2>
          <p className="text-inverted/60 text-lg">
            Processo simplificado e transparente, da primeira conversa até a
            economia na conta.
          </p>
        </div>

        <div className="relative">
          {/* Linha usando variável de cor com opacidade */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-inverted/20 z-0" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center z-10"
              >
                {/* 
                  IMPORTANTE: Aqui usamos 'bg-primary' para cobrir a linha 
                  e as cores dinâmicas para bordas e textos
                */}
                <div
                  className={`w-24 h-24 mb-8 rounded-full border-2 flex items-center justify-center text-xl font-bold bg-primary transition-colors 
                  ${index === 0 ? "border-secondary text-secondary" : "border-inverted/20 text-inverted"}`}
                >
                  {step.id}
                </div>

                <h3 className="text-xl font-bold mb-3 text-inverted">
                  {step.title}
                </h3>
                <p className="text-inverted/60 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
