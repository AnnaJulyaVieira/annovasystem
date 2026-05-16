import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/lib/cases";
import BackLink from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Trabalho — Annova System",
  description:
    "Seleção de projetos entregues pelo estúdio: fintech, logística, saúde, agro, educação e RH.",
};

const industries = [
  "Todos",
  "Fintech",
  "Logística",
  "Health",
  "Agro",
  "Edtech",
  "RH",
];

export default function TrabalhoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <BackLink label="Início" className="mb-10" />
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            <span className="h-px w-8 bg-ink-soft/60" />
            <span>// trabalho selecionado</span>
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="max-w-3xl text-balance text-[44px] font-bold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[64px] lg:text-[80px]">
              Projetos que
              <br />
              <span className="text-ink-soft">saíram do papel.</span>
            </h1>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Cada projeto começou com um problema concreto e terminou em
              alguém usando todos os dias. Esse é o filtro.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap items-center gap-2">
            {industries.map((tag, i) => (
              <li key={tag}>
                <button
                  type="button"
                  className={[
                    "inline-flex h-9 items-center rounded-full border px-4 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors",
                    i === 0
                      ? "border-ink bg-ink text-on-dark"
                      : "border-line text-ink-soft hover:border-ink hover:text-ink",
                  ].join(" ")}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
            {cases.map((c, i) => (
              <li key={c.slug} className="bg-white">
                <Link
                  href={`/trabalho/${c.slug}`}
                  className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-chip/40 sm:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                      <span>
                        {String(i + 1).padStart(3, "0")}
                      </span>
                      <span className="h-px w-6 bg-ink-soft/50" />
                      <span>{c.industry}</span>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                      {c.year}
                    </span>
                  </div>

                  <div className="mt-16">
                    <h2 className="text-[22px] font-semibold tracking-tight text-ink sm:text-[26px]">
                      {c.client}
                    </h2>
                    <p className="mt-3 max-w-md text-[15px] leading-snug text-ink-soft sm:text-[16px]">
                      {c.title}
                    </p>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <ul className="flex flex-wrap gap-2">
                      {c.scope.slice(0, 3).map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-line px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-soft"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-transform group-hover:translate-x-0.5">
                      Ver caso →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-bg-dark text-on-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance text-[28px] font-bold leading-[1.1] tracking-tight sm:text-[36px]">
              Tem um projeto parecido — ou completamente diferente?
            </h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-on-dark-soft">
              A gente conversa sem compromisso e responde em até 48h, mesmo
              quando o fit não existe.
            </p>
          </div>
          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-full bg-on-dark px-6 py-3.5 text-[14px] font-medium text-ink transition-transform hover:-translate-y-px"
          >
            Iniciar um projeto
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
