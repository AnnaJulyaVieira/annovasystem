import { ArrowRight, ChevronDown } from "lucide-react";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiN8N,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const technologies = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Docker", Icon: SiDocker },
  { name: "AWS", Icon: FaAws },
  { name: "n8n", Icon: SiN8N },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-12 text-white sm:py-16 lg:px-16 lg:py-24">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.08]" />

      {/* Hero */}
      <div className="relative z-20 mx-auto max-w-[1400px] pt-8 sm:px-8 sm:pt-20 lg:pt-[92px]">
        {/* Texto */}
        <div>
          <div className="mb-6 text-xs uppercase tracking-[0.45em] text-white/45">
            // Agência de tecnologia
          </div>

          <h1 className="max-w-3xl text-balance text-[40px] font-bold leading-none tracking-[-0.04em] sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.05em] md:text-6xl lg:text-7xl">
            Tecnologia que <br className="hidden sm:block" />
            impulsiona negócios.
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60 sm:mt-7 sm:text-lg">
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

            <div className="flex flex-wrap items-center gap-3">
              {technologies.map(({ name, Icon }) => (
                <div
                  key={name}
                  className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-white/55 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                >
                  <Icon
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
