import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-16 text-white lg:px-16 lg:py-24">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.08]" />

      {/* Hero */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-8 pt-20 lg:pt-[92px]">
        {/* Texto */}
        <div>
          <div className="mb-6 text-xs uppercase tracking-[0.45em] text-white/45">
            // Agência de tecnologia
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Tecnologia que <br />
            impulsiona negócios.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/60">
            Criamos sites, sistemas, apps e automações inteligentes que
            transformam ideias em produtos digitais de alto impacto.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contato"
              className="flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
            >
              Falar com especialista <ArrowRight size={16} />
            </a>

            <a
              href="#capacidades"
              className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold transition hover:bg-white/[0.08]"
            >
              Ver nossos serviços <ChevronDown size={16} />
            </a>
          </div>

          {/* Tecnologias */}
          <div className="mt-12">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-white/35">
              Tecnologias que utilizamos
            </div>

            <div className="flex flex-wrap items-center gap-8 text-white/55">
              <span className="text-xl">
                NEXT<span className="text-xs">.js</span>
              </span>
              <span className="text-xl font-bold">node</span>
              <span className="text-sm">docker</span>
              <span className="text-lg">aws</span>
              <span className="text-lg">n8n</span>
              <span className="text-lg">tailwindcss</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
