export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark text-on-dark">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 mask-fade" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 pb-24 text-center lg:pt-36 lg:pb-32">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
          <span className="h-px w-8 bg-on-dark-soft/60" />
          <span>// estúdio de engenharia digital</span>
          <span className="inline-block h-2 w-2 bg-on-dark animate-blink" />
        </div>

        <h1 className="mt-8 max-w-4xl text-balance text-[44px] font-bold leading-[0.98] tracking-[-0.02em] text-on-dark sm:text-[64px] lg:text-[88px]">
          Software que parece simples —{" "}
          <span className="italic font-light text-on-dark-soft">
            e move o negócio.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-balance text-[15px] leading-relaxed text-on-dark-soft md:text-[17px]">
          Somos um estúdio de produto e engenharia. Projetamos sistemas,
          integrações e automações que tiram fricção da operação e deixam o
          time livre para crescer.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-full bg-on-dark px-7 py-3.5 text-[14px] font-medium text-ink transition-transform hover:-translate-y-px"
          >
            Iniciar um projeto
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#capacidades"
            className="group inline-flex items-center gap-2 rounded-full border border-line-dark px-7 py-3.5 text-[14px] font-medium text-on-dark transition-colors hover:border-on-dark"
          >
            Ver capacidades
            <span className="text-on-dark-soft transition-colors group-hover:text-on-dark">
              ↓
            </span>
          </a>
        </div>

        <div className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-y-6 border-t border-line-dark pt-10 sm:grid-cols-4 lg:mt-24">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-on-dark-soft">
                {s.label}
              </span>
              <span className="mt-2 text-[28px] font-semibold leading-none tracking-tight text-on-dark sm:text-[32px]">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { label: "Projetos entregues", value: "60+" },
  { label: "Anos de operação", value: "07" },
  { label: "Squads ativos", value: "12" },
  { label: "NPS médio", value: "92" },
];
