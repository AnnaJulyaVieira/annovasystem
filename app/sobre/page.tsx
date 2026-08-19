import type { Metadata } from "next";
import Link from "next/link";
import BackLink from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Sobre — AG2 Tech",
  description:
    "Estúdio de engenharia digital fundado em 2021. Times pequenos, processo objetivo, software que dura.",
};

const principles = [
  {
    num: "01",
    title: "Resultado antes de estética",
    body: "Design e código existem pra resolver um problema. Beleza vem do alinhamento entre forma e função — nunca da decoração.",
  },
  {
    num: "02",
    title: "Squad pequeno, decisão rápida",
    body: "Times grandes diluem responsabilidade. A gente roda em squads enxutos de 3 a 5 pessoas, com decisão técnica colada no problema.",
  },
  {
    num: "03",
    title: "Escrito é melhor que combinado",
    body: "Documento de descoberta, escopo assinado, ADR de cada decisão importante. Memória curta destrói projeto longo.",
  },
  {
    num: "04",
    title: "Operação é parte do produto",
    body: "Não entregamos zip e sumimos. Observabilidade, runbook e sustentação fazem parte do escopo desde o discovery.",
  },
];

const timeline = [
  { name: "Pedro", client: "Auto Truck" },
  { name: "Gabriel", client: "GLT" },
  { name: "Julio", client: "Cannon Parts" },
  { name: "Diego", client: "Tereza Personalizados" },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-bg-dark text-on-dark">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 mask-fade" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <BackLink tone="dark" label="Início" className="mb-10" />
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
            <span className="h-px w-8 bg-on-dark-soft/60" />
            <span>// sobre o estúdio</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-balance text-[40px] font-bold leading-[0.98] tracking-[-0.02em] sm:text-[64px] lg:text-[80px]">
            Engenharia
            <br />
            como artesanato —{" "}
            <span className="italic font-light text-on-dark-soft">
              em escala.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-on-dark-soft">
            A AG2 Tech é um estúdio de engenharia digital fundado em 2021.
            Construímos software pra empresas que precisam de tecnologia bem
            feita, mas não querem (ou não precisam) montar uma fábrica interna.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-14">
          {[
            { label: "Fundada em", value: "2021" },
            { label: "Squads ativos", value: "12" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                {s.label}
              </span>
              <span className="mt-2 text-[34px] font-semibold leading-none tracking-tight text-ink sm:text-[44px]">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            <span className="h-px w-8 bg-ink-soft/60" />
            <span>princípios</span>
          </div>
          <h2 className="mt-4 max-w-3xl text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
            Quatro frases que a gente
            <br />
            <span className="text-ink-soft">não terceiriza pra ninguém.</span>
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {principles.map((p) => (
              <article
                key={p.num}
                className="rounded-2xl border border-line p-8 transition-colors hover:bg-chip/40"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  {p.num}
                </span>
                <h3 className="mt-4 text-[22px] font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            <span className="h-px w-8 bg-ink-soft/60" />
            <span>histórico</span>
          </div>
          <h2 className="mt-4 max-w-3xl text-balance text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-[44px] lg:text-[52px]">
            Quem confiou
            <br />
            <span className="text-ink-soft">e quem cuidou de cada projeto.</span>
          </h2>

          <ol className="mt-14 grid grid-cols-1 divide-y divide-line border-y border-line">
            {timeline.map((t) => (
              <li
                key={t.name}
                className="grid grid-cols-12 items-baseline gap-6 py-7"
              >
                <span className="col-span-12 font-mono text-[20px] font-bold tracking-tight text-ink sm:col-span-2">
                  {t.name}
                </span>
                <p className="col-span-12 text-[15.5px] leading-relaxed text-ink-soft sm:col-span-10">
                  {t.client}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="imprensa" className="border-t border-line bg-chip/30">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
          <div>
            <h3 className="text-[22px] font-semibold tracking-tight text-ink sm:text-[26px]">
              Quer falar sobre o estúdio?
            </h3>
            <p className="mt-2 text-[14.5px] text-ink-soft">
              Imprensa, parcerias institucionais e palestras:{" "}
              <a
                href="mailto:imprensa@ag2tech.com.br"
                className="text-ink underline underline-offset-4"
              >
                imprensa@ag2tech.com.br
              </a>
            </p>
          </div>
          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-on-dark transition-transform hover:-translate-y-px"
          >
            Falar com a gente
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
