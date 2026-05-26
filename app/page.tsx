import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Deliverables from "@/components/Deliverables";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Clients />
      <Approach />
      <Cases />
      <Deliverables />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  );
}

function CTA() {
  return (
    <section
      id="contato"
      className="relative w-full overflow-hidden bg-bg-darker text-on-dark"
    >
      <div className="bg-dots-dark pointer-events-none absolute inset-0 opacity-30 mask-fade" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 sm:gap-10 sm:py-24 lg:flex-row lg:items-end lg:justify-between lg:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
            <span className="h-px w-8 bg-on-dark-soft/60" />
            <span>vamos conversar</span>
          </div>
          <h2 className="mt-4 text-balance text-[40px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[56px] lg:text-[72px]">
            Tem um problema
            <br />
            que vale software?
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-on-dark-soft">
            Conta pra gente em poucas linhas. Em até 48h você recebe um retorno
            com um caminho possível — mesmo que não seja com a AG2 Tech.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:max-w-sm">
          <a
            href="mailto:hello@ag2tech.com.br"
            className="group inline-flex items-center justify-between rounded-full bg-on-dark px-6 py-4 text-[14px] font-medium text-ink transition-transform hover:-translate-y-px"
          >
            hello@ag2tech.com.br
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="/contato"
            className="group inline-flex items-center justify-between rounded-full border border-line-dark px-6 py-4 text-[14px] font-medium text-on-dark transition-colors hover:border-on-dark"
          >
            Preencher um briefing
            <span className="text-on-dark-soft transition-colors group-hover:text-on-dark">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
