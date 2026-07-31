import { Layers, LineChart, Network, Server, type LucideIcon } from "lucide-react";

type Capability = {
  num: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  span?: string;
  invert?: boolean;
};

const capabilities: Capability[] = [
  {
    num: "01",
    title: "Produtos digitais sob medida",
    description:
      "Web apps, plataformas internas e SaaS desenhados em torno do problema real — não em torno de templates.",
    Icon: Layers,
    span: "sm:col-span-2",
    invert: true,
  },
  {
    num: "02",
    title: "Integrações & automações",
    description:
      "APIs, ETLs e workflows que conectam sistemas legados, ERPs e ferramentas SaaS sem ruído.",
    Icon: Network,
  },
  {
    num: "03",
    title: "Dados & dashboards",
    description:
      "Pipelines, modelagem e painéis que transformam dado bruto em decisão diária.",
    Icon: LineChart,
  },
  {
    num: "04",
    title: "Cloud & infraestrutura",
    description:
      "Arquitetura, observabilidade e CI/CD para crescer com previsibilidade de custo.",
    Icon: Server,
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
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
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

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-3">
          {capabilities.map((c) => (
            <article
              key={c.num}
              className={[
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 ring-1 transition-colors sm:p-7",
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
                  strokeWidth={1.5}
                  className="h-6 w-6 transition-transform group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-10 sm:mt-16">
                <h3 className="text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {c.title}
                </h3>
                <p
                  className={[
                    "mt-2 max-w-md text-[13px] leading-relaxed sm:text-[13.5px]",
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
