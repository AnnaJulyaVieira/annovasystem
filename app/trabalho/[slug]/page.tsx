import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/lib/cases";
import BackLink from "@/components/BackLink";

type Params = { slug: string };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return { title: "Caso não encontrado — AG2 Tech" };
  return {
    title: `${item.client} — AG2 Tech`,
    description: item.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const idx = cases.findIndex((c) => c.slug === item.slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-bg-dark text-on-dark">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-50 mask-fade" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <BackLink href="/trabalho" tone="dark" label="Trabalho" className="mb-10" />
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
            <span>{item.industry}</span>
            <span className="h-px w-8 bg-on-dark-soft/60" />
            <span>{item.year}</span>
          </div>

          <h1 className="mt-8 max-w-4xl text-balance text-[36px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[56px] lg:text-[72px]">
            {item.client}
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-on-dark-soft sm:text-[19px]">
            {item.title}
          </p>

          {item.metrics && item.metrics.length > 0 && (
            <div className="mt-14 flex flex-col gap-8 border-t border-line-dark pt-10 sm:flex-row sm:items-start sm:justify-between">
              <div className="grid flex-1 grid-cols-2 gap-y-8 sm:grid-cols-3">
                {item.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-on-dark-soft">
                      {m.label}
                    </span>
                    <span className="mt-2 text-[28px] font-semibold leading-none tracking-tight sm:text-[36px]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <aside className="flex flex-col gap-10">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  Escopo
                </h3>
                <ul className="mt-4 space-y-2">
                  {item.scope.map((s) => (
                    <li
                      key={s}
                      className="text-[14.5px] leading-snug text-ink"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  Stack
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  Time
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                  Squad de 4 pessoas dedicadas + 1 PM compartilhada.
                </p>
              </div>
            </aside>

            <div className="flex flex-col gap-12">
              <p className="text-balance text-[20px] leading-relaxed text-ink sm:text-[22px]">
                {item.summary}
              </p>
              {item.story.map((s) => (
                <article
                  key={s.heading}
                  className="border-t border-line pt-10"
                >
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                    {s.heading}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink sm:text-[17px]">
                    {s.body}
                  </p>
                </article>
              ))}

              <blockquote className="rounded-2xl border border-line bg-chip/40 p-8 sm:p-10">
                <p className="text-balance text-[20px] leading-relaxed text-ink sm:text-[24px]">
                  &ldquo;A AG2 Tech entendeu o problema antes da gente entender.
                  Saímos do projeto com software melhor — e com a operação
                  redesenhada.&rdquo;
                </p>
                <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                  — Diretor de operações, {item.client}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link
            href={`/trabalho/${next.slug}`}
            className="group flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                Próximo caso →
              </span>
              <h3 className="mt-2 text-[28px] font-bold tracking-tight text-ink sm:text-[36px]">
                {next.client}
              </h3>
              <p className="mt-1 max-w-xl text-[14.5px] text-ink-soft">
                {next.title}
              </p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft transition-transform group-hover:translate-x-1 group-hover:text-ink">
              {next.industry} · {next.year}
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
