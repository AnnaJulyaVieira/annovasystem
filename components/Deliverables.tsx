const deliverables = [
  { id: "001", label: "Plataformas web", weight: "Next.js · React · TypeScript" },
  { id: "002", label: "APIs & serviços", weight: "Node · Go · Python" },
  { id: "003", label: "Pipelines de dados", weight: "Airflow · dbt · BigQuery" },
  { id: "004", label: "Workflows internos", weight: "n8n · Temporal · Lambda" },
  { id: "005", label: "Dashboards executivos", weight: "Metabase · Superset" },
  { id: "006", label: "Cloud & DevOps", weight: "AWS · GCP · Terraform" },
  { id: "007", label: "Mobile híbrido", weight: "React Native · Expo" },
  { id: "008", label: "IA aplicada", weight: "OpenAI · Anthropic · RAG" },
];

export default function Deliverables() {
  return (
    <section
      id="entregas"
      aria-labelledby="entregas-heading"
      className="relative w-full overflow-hidden bg-bg-dark text-on-dark"
    >
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40 mask-fade" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
              <span className="h-px w-8 bg-on-dark-soft/60" />
              <span>entregas</span>
            </div>
            <h2
              id="entregas-heading"
              className="mt-4 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] sm:text-[44px] lg:text-[52px]"
            >
              O que sai
              <br className="hidden sm:block" />{" "}
              do estúdio.
            </h2>
            <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-on-dark-soft">
              Tecnologia bem aplicada vira artefato concreto: produto no ar,
              relatório que decide, integração que economiza horas todo dia.
            </p>

            <div className="mt-10 rounded-2xl border border-line-dark p-5">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-on-dark animate-blink" />
                disponibilidade
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-on-dark-soft">
                Iniciando squads em junho — agenda Q3 com{" "}
                <span className="text-on-dark">2 vagas</span> abertas.
              </p>
              <a
                href="#contato"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-on-dark hover:underline underline-offset-4"
              >
                Reservar uma conversa →
              </a>
            </div>
          </div>

          <ul className="divide-y divide-line-dark border-y border-line-dark">
            {deliverables.map((d) => (
              <li
                key={d.id}
                className="flex items-center justify-between gap-6 py-5"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-on-dark-soft">
                    {d.id}
                  </span>
                  <span className="text-[18px] font-medium tracking-tight text-on-dark sm:text-[20px]">
                    {d.label}
                  </span>
                </div>
                <span className="hidden font-mono text-[11.5px] uppercase tracking-[0.12em] text-on-dark-soft sm:inline-block">
                  {d.weight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
