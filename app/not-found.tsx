import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-bg-dark text-on-dark">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-40 mask-fade" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
          <span>// erro</span>
          <span className="h-px w-8 bg-on-dark-soft/60" />
          <span>http 404</span>
        </div>
        <h1 className="mt-6 text-balance text-[80px] font-bold leading-none tracking-[-0.02em] sm:text-[140px]">
          404
        </h1>
        <p className="mt-6 text-balance text-[18px] leading-relaxed text-on-dark-soft sm:text-[20px]">
          Essa rota não existe — ou existiu e foi refatorada.
          <br />
          Acontece nos melhores deploys.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-on-dark px-6 py-3.5 text-[14px] font-medium text-ink transition-transform hover:-translate-y-px"
          >
            Voltar pra home
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            href="/trabalho"
            className="group inline-flex items-center gap-2 rounded-full border border-line-dark px-6 py-3.5 text-[14px] font-medium text-on-dark transition-colors hover:border-on-dark"
          >
            Ver projetos
            <span className="text-on-dark-soft transition-colors group-hover:text-on-dark">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
