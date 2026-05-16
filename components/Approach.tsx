type Capability = {
  num: string;
  title: string;
  description: string;
  Icon: (props: { className?: string }) => React.ReactElement;
  span?: string;
  invert?: boolean;
};

const capabilities: Capability[] = [
  {
    num: "01",
    title: "Produtos digitais sob medida",
    description:
      "Web apps, plataformas internas e SaaS desenhados em torno do problema real — não em torno de templates.",
    Icon: IconCode,
    span: "sm:col-span-2",
    invert: true,
  },
  {
    num: "02",
    title: "Integrações & automações",
    description:
      "APIs, ETLs e workflows que conectam sistemas legados, ERPs e ferramentas SaaS sem ruído.",
    Icon: IconNodes,
  },
  {
    num: "03",
    title: "Dados & dashboards",
    description:
      "Pipelines, modelagem e painéis que transformam dado bruto em decisão diária.",
    Icon: IconBars,
  },
  {
    num: "04",
    title: "Cloud & infraestrutura",
    description:
      "Arquitetura, observabilidade e CI/CD para crescer com previsibilidade de custo.",
    Icon: IconCloud,
    span: "sm:col-span-2",
  },
];

export default function Approach() {
  return (
    <section
      id="capacidades"
      aria-labelledby="capacidades-heading"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/60" />
              <span>capacidades</span>
            </div>
            <h2
              id="capacidades-heading"
              className="mt-4 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]"
            >
              Quatro frentes.
              <br />
              <span className="text-ink-soft">Uma única forma de entregar.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
            Atuamos como squad próprio: discovery, design, engenharia e
            operação caminhando juntos do briefing à produção.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {capabilities.map((c) => (
            <article
              key={c.num}
              className={[
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 ring-1 transition-colors",
                c.span ?? "",
                c.invert
                  ? "bg-bg-dark text-on-dark ring-line-dark hover:bg-bg-darker"
                  : "bg-white text-ink ring-line hover:bg-chip",
              ].join(" ")}
            >
              <div className="flex items-start justify-between">
                <span
                  className={[
                    "font-mono text-[11px] uppercase tracking-[0.18em]",
                    c.invert ? "text-on-dark-soft" : "text-ink-soft",
                  ].join(" ")}
                >
                  {c.num}
                </span>
                <c.Icon
                  className="h-7 w-7 transition-transform group-hover:-translate-y-0.5"
                />
              </div>

              <div className="mt-16">
                <h3 className="text-[18px] font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p
                  className={[
                    "mt-2 max-w-md text-[13.5px] leading-relaxed",
                    c.invert ? "text-on-dark-soft" : "text-ink-soft",
                  ].join(" ")}
                >
                  {c.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M11 9 L3 16 L11 23" />
      <path d="M21 9 L29 16 L21 23" />
      <path d="M18 6 L14 26" />
    </svg>
  );
}

function IconNodes({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="8" r="2.5" />
      <circle cx="26" cy="8" r="2.5" />
      <circle cx="16" cy="24" r="2.5" />
      <path d="M8 9.5 L14 22.5" />
      <path d="M24 9.5 L18 22.5" />
      <path d="M8.5 8 L23.5 8" strokeDasharray="2 3" />
    </svg>
  );
}

function IconBars({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 27 L27 27" />
      <path d="M9 22 L9 27" />
      <path d="M16 14 L16 27" />
      <path d="M23 6 L23 27" />
    </svg>
  );
}

function IconCloud({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 22 C5 22 4 18 6 16 C5 12 9 10 12 12 C13 9 18 9 19 13 C23 12 26 15 25 19 C27 19 28 21 27 22 L9 22 Z" />
    </svg>
  );
}
