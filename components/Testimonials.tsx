"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
};

const pages: Testimonial[][] = [
  [
    {
      quote:
        "O que mudou de verdade foi o telefone parar de tocar o dia inteiro. Hoje o associado escolhe o horário sozinho, e a gente só confirma quando ele chega.",
      initials: "P",
      name: "Pedro",
      role: "Diretor administrativo, Auto Truck",
    },
    {
      quote:
        "O comprador filtra sozinho e já chega decidido no anúncio. A gente deixou de perder tempo respondendo pergunta que o próprio site já responde.",
      initials: "G",
      name: "Gabriel",
      role: "Gerente comercial, GLT Motors",
    },
  ],
  [
    {
      quote:
        "Cannon Parts sempre vendeu no boca a boca, isso não mudou. O que mudou foi o cliente achar a peça certa sem precisar ligar pra loja pra perguntar se tem.",
      initials: "J",
      name: "Julio",
      role: "Sócio-fundador, Cannon Parts",
    },
    {
      quote:
        "Nosso WhatsApp vivia cheio de gente perguntando preço e modelo, a mesma pergunta o dia inteiro. Com o catálogo no site isso caiu bastante.",
      initials: "D",
      name: "Diego",
      role: "Sócio, Tereza Personalizados",
    },
  ],
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const current = pages[page];

  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
      className="relative w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/60" />
              <span>quem já confia</span>
            </div>
            <h2
              id="depoimentos-heading"
              className="mt-4 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]"
            >
              Histórias de quem
              <br />
              cresceu com a gente.
            </h2>
          </div>

          <div>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {current.map((t) => (
                <li
                  key={t.name}
                  className="flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-line sm:p-7"
                >
                  <Quote />
                  <p className="mt-5 text-[14.5px] leading-relaxed text-ink">
                    {t.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-[11px] font-medium tracking-[0.08em] text-on-dark">
                      {t.initials}
                    </span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[14px] font-semibold tracking-tight text-ink">
                        {t.name}
                      </span>
                      <span className="text-[12.5px] text-ink-soft">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 flex items-center justify-center gap-2"
              role="tablist"
              aria-label="Páginas de depoimentos"
            >
              {pages.map((_, i) => {
                const active = i === page;
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Ir para página ${i + 1}`}
                    onClick={() => setPage(i)}
                    className={[
                      "h-2.5 rounded-full transition-all",
                      active
                        ? "w-6 bg-ink"
                        : "w-2.5 bg-line hover:bg-ink-soft/60",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <svg
      viewBox="0 0 24 18"
      className="h-5 w-6 text-ink"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 18 V10 C0 4.5 3.5 1 9 0 V3 C5.5 4 4 6 4 9 H9 V18 H0 Z M14 18 V10 C14 4.5 17.5 1 23 0 V3 C19.5 4 18 6 18 9 H23 V18 H14 Z" />
    </svg>
  );
}
