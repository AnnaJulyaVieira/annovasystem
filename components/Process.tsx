const steps = [
  {
    number: "01",
    label: "Diagnóstico",
    duration: "1 semana",
    description:
      "Entendemos a operação, os pontos de atrito e o que conta como sucesso. Saímos com um diagnóstico escrito, não com um chute.",
  },
  {
    number: "02",
    label: "Desenho",
    duration: "1–2 semanas",
    description:
      "Arquitetura, escopo, fluxos e protótipos. Você aprova um plano que cabe no tempo e no orçamento antes de qualquer linha de código.",
  },
  {
    number: "03",
    label: "Construção",
    duration: "4–10 semanas",
    description:
      "Squad dedicado, ciclos quinzenais, demo viva. Cada release entra com qualidade testada e métrica visível.",
  },
  {
    number: "04",
    label: "Operação",
    duration: "contínuo",
    description:
      "Implantação, observabilidade e evolução. A gente fica do lado, sustenta o que entregou e cresce junto.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="processo-heading"
      className="relative w-full bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            <span className="h-px w-8 bg-ink-soft/60" />
            <span>processo</span>
          </div>
          <h2
            id="processo-heading"
            className="mt-4 text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]"
          >
            Quatro passos.
            <br className="hidden sm:block" />{" "}
            <span className="text-ink-soft">Sem teatro.</span>
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 divide-y divide-line border-y border-line sm:mt-16">
          {steps.map((s) => (
            <li
              key={s.number}
              className="grid grid-cols-12 items-baseline gap-x-6 gap-y-2 py-6 sm:py-8"
            >
              <div className="col-span-12 sm:col-span-2">
                <span className="font-mono text-[34px] font-bold leading-none tracking-tight text-ink sm:text-[56px]">
                  {s.number}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-3">
                <h3 className="text-[20px] font-semibold tracking-tight text-ink sm:text-[22px]">
                  {s.label}
                </h3>
                <span className="mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                  {s.duration}
                </span>
              </div>
              <p className="col-span-12 max-w-xl text-[14.5px] leading-relaxed text-ink-soft sm:col-span-7">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
