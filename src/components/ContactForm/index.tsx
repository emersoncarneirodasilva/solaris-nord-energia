"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast, Toaster } from "sonner";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    consumption: "",
    message: "",
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phone = process.env.NEXT_PUBLIC_PHONE || "";

    // Frase amigável + dados organizados
    const text = `
Olá! Gostaria de uma simulação. Aqui estão meus dados:

Nome: ${formData.name}
Telefone: ${formData.phone}
Cidade: ${formData.city}
Consumo Mensal: ${formData.consumption || "Não informado"}
Mensagem: ${formData.message || "Nenhuma adicional."}
    `.trim();

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    toast.success("Solicitação enviada com sucesso!", {
      description: "Nossa equipe entrará em contato em breve.",
      duration: 5000,
    });

    setFormData({
      name: "",
      phone: "",
      city: "",
      consumption: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="w-full py-24 md:py-36 bg-benefits">
      <Toaster position="top-right" richColors />

      <div className="site-container">
        <div className="max-w-6xl mx-auto bg-inverted rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
          {/* Lado Esquerdo: Info */}
          <div className="bg-primary text-inverted px-12 py-20 lg:w-1/2 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Solicite sua simulação gratuita
            </h2>
            <p className="text-inverted/80 mb-10 leading-relaxed">
              Nossos especialistas entrarão em contato em até 24h com um estudo
              completo de economia para o seu caso.
            </p>

            <ul className="space-y-4">
              {[
                "Estudo de viabilidade técnica",
                "Projeção de economia em 25 anos",
                "Opções de financiamento bancário",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10 border-t border-white/10">
              <p className="text-sm text-inverted/60 font-medium flex items-center gap-2">
                <span className="text-secondary animate-pulse-slow">●</span>
                Atendimento humanizado e sem compromisso
              </p>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <form
            onSubmit={handleSubmit}
            className="px-12 py-20 lg:w-1/2 space-y-6"
          >
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Nome Completo
              </label>
              <input
                required
                value={formData.name}
                className="w-full p-4 rounded-xl bg-background border border-gray-200 focus:border-secondary outline-none transition-all"
                placeholder="Como podemos te chamar?"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  required
                  value={formData.phone}
                  className="w-full p-4 rounded-xl bg-background border border-gray-200 focus:border-secondary outline-none transition-all"
                  placeholder="(00) 00000-0000"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  Cidade
                </label>
                <input
                  required
                  value={formData.city}
                  className="w-full p-4 rounded-xl bg-background border border-gray-200 focus:border-secondary outline-none transition-all"
                  placeholder="Onde você mora?"
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Novo Campo de Consumo */}
            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Consumo Mensal (R$ ou kWh)
              </label>
              <input
                required
                value={formData.consumption}
                className="w-full p-4 rounded-xl bg-background border border-gray-200 focus:border-secondary outline-none transition-all"
                placeholder="Ex: R$ 500,00 ou 400 kWh"
                onChange={(e) =>
                  setFormData({ ...formData, consumption: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-primary mb-2">
                Mensagem (Opcional)
              </label>
              <textarea
                rows={4}
                value={formData.message}
                className="w-full p-4 rounded-xl bg-background border border-gray-200 focus:border-secondary outline-none transition-all"
                placeholder="Conte-nos um pouco sobre sua necessidade..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary-dark hover:bg-[#005a3d] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
            >
              Quero minha simulação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
