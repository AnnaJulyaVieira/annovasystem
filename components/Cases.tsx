type CaseItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
};

const cases: CaseItem[] = [
  {
    id: "autotruck-plataforma",
    tag: "Agendamento",
    title: "Auto Truck — Agendamento",
    description:
      "Site onde o associado da Auto Truck agenda a lavagem do veículo escolhendo data e horário disponíveis.",
    stack: ["Next.js", "TypeScript", "Node.js"],
  },
  {
    id: "tereza-personalizados",
    tag: "E-commerce",
    title: "Tereza Personalizados",
    description:
      "Vitrine digital com catálogo de produtos personalizados e canal direto de orçamento.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "autotruck-mobile",
    tag: "App do associado",
    title: "Auto Truck Mobile",
    description:
      "App em que o associado consulta veículos vinculados, boletos em aberto e dados da associação.",
    stack: ["React Native", "Expo", "TypeScript"],
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
            Projetos diferentes. Mesma forma de entregar.
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
                    Stack
                  </span>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {c.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
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
