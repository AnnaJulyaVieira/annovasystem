"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Como funciona o engajamento de um projeto?",
    answer:
      "Tudo começa por um diagnóstico de 1 semana. A partir dele, alinhamos escopo, prazo e investimento por escrito antes de qualquer linha de código. Você só assina o contrato quando o plano fizer sentido.",
  },
  {
    question: "Vocês trabalham com retainer ou projeto fechado?",
    answer:
      "Os dois modelos. Projetos novos costumam começar com escopo fechado por sprint; produtos em evolução contínua entram em retainer mensal com squad dedicado.",
  },
  {
    question: "Como é feito o orçamento?",
    answer:
      "Trabalhamos com tabela transparente por sprint quinzenal. Você sabe exatamente o que entra em cada ciclo, quanto custa e o que será entregue ao final.",
  },
  {
    question: "Existe garantia depois da entrega?",
    answer:
      "Sim. Toda entrega vem com 30 dias de garantia para correções e ajustes. Para sustentação contínua e SLA dedicado, você pode optar pelo plano de operação.",
  },
  {
    question: "Posso contratar só um pedaço do time?",
    answer:
      "Pode. Atuamos como squad completo (PM, design, eng e ops) ou apenas com a frente que falta no seu time — engenharia, dados ou DevOps, por exemplo.",
  },
  {
    question: "Como vocês cuidam de confidencialidade e dados?",
    answer:
      "Assinamos NDA antes do diagnóstico, isolamos credenciais em vaults e seguimos boas práticas de LGPD em todo o ciclo. Para projetos sensíveis, montamos ambientes dedicados.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/60" />
              <span>faq</span>
            </div>
            <h2
              id="faq-heading"
              className="mt-4 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]"
            >
              Perguntas que
              <br />
              a gente ouve sempre.
            </h2>
            <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-ink-soft">
              Se a sua não estiver aqui,{" "}
              <a
                href="#contato"
                className="text-ink underline underline-offset-4 hover:no-underline"
              >
                manda pra gente
              </a>
              .
            </p>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-ink-soft">
                        {String(i + 1).padStart(3, "0")}
                      </span>
                      <span className="text-[17px] font-medium tracking-tight text-ink sm:text-[18.5px]">
                        {f.question}
                      </span>
                    </span>
                    <span
                      className={[
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-transform",
                        isOpen ? "rotate-45 bg-ink text-on-dark" : "text-ink",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <Plus />
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className={[
                      "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="max-w-2xl pb-6 pl-[3.25rem] pr-12 text-[14.5px] leading-relaxed text-ink-soft">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Plus() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 2 V10" />
      <path d="M2 6 H10" />
    </svg>
  );
}
