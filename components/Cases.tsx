type CaseItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  trend: "up" | "down";
};

const cases: CaseItem[] = [
  {
    id: "saude",
    tag: "Saúde",
    title: "Plataforma de telemedicina",
    description:
      "Redesenho completo da plataforma e automações entre agenda, pagamento e prontuário.",
    metric: "+42%",
    metricLabel: "em conversão de agendamentos",
    trend: "up",
  },
  {
    id: "logistica",
    tag: "Logística",
    title: "Portal do transportador",
    description:
      "Automação de coletas e integrações com TMS para reduzir falhas e retrabalho operacional.",
    metric: "-63%",
    metricLabel: "no tempo operacional",
    trend: "down",
  },
  {
    id: "educacao",
    tag: "Educação",
    title: "Geração de leads B2B",
    description:
      "Nova landing + CRM integrado + automações de nutrição e scoring.",
    metric: "3x",
    metricLabel: "mais leads qualificados",
    trend: "up",
  },
];

export default function Cases() {
  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="relative w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/60" />
              <span>cases e resultados</span>
            </div>
            <h2
              id="cases-heading"
              className="mt-4 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]"
            >
              Prova real do
              <br />
              que entregamos.
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
            Projetos diferentes. Resultados que se medem.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <li key={c.id}>
              <a
                href={`/trabalho/${c.id}`}
                className="group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-line transition-colors hover:ring-ink/30 sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    {c.tag}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-soft">
                    Projeto entregue
                  </span>
                </div>

                <h3 className="mt-8 text-[20px] font-semibold tracking-tight text-ink sm:text-[22px]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  {c.description}
                </p>

                <div className="mt-8 border-t border-line pt-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    Resultado gerado
                  </span>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[34px] font-bold leading-none tracking-[-0.02em] text-ink sm:text-[40px]">
                        {c.metric}
                      </div>
                      <div className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                        {c.metricLabel}
                      </div>
                    </div>
                    <Sparkline trend={c.trend} />
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2 text-[13.5px] font-medium text-ink">
                  Ver case completo
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center sm:mt-16">
          <a
            href="/trabalho"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-on-dark transition-transform hover:-translate-y-px"
          >
            Ver mais projetos
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Sparkline({ trend }: { trend: "up" | "down" }) {
  const up = "M0 22 L12 18 L24 20 L36 12 L48 14 L60 8 L72 10 L84 4";
  const down = "M0 6 L12 10 L24 8 L36 14 L48 12 L60 18 L72 16 L84 22";
  return (
    <svg
      viewBox="0 0 84 26"
      width="92"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-ink"
      aria-hidden="true"
    >
      <path d={trend === "up" ? up : down} />
    </svg>
  );
}
