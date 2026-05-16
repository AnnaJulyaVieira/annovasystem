export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark text-on-dark">
      <div className="bg-grid-dark pointer-events-none absolute inset-0 opacity-60 mask-fade" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-28">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
            <span className="h-px w-8 bg-on-dark-soft/60" />
            <span>// estúdio de engenharia digital</span>
            <span className="inline-block h-2 w-2 bg-on-dark animate-blink" />
          </div>

          <h1 className="mt-6 text-balance text-[40px] font-bold leading-[0.98] tracking-[-0.02em] text-on-dark sm:text-[56px] lg:text-[72px]">
            Software que parece
            <br />
            simples —{" "}
            <span className="italic font-light text-on-dark-soft">
              e move o negócio.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-on-dark-soft md:text-[16px]">
            Somos um estúdio de produto e engenharia. Projetamos sistemas,
            integrações e automações que tiram fricção da operação e deixam o
            time livre para crescer.
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-on-dark px-6 py-3.5 text-[14px] font-medium text-ink transition-transform hover:-translate-y-px"
            >
              Iniciar um projeto
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="#capacidades"
              className="group inline-flex items-center gap-2 rounded-full border border-line-dark px-6 py-3.5 text-[14px] font-medium text-on-dark transition-colors hover:border-on-dark"
            >
              Ver capacidades
              <span className="text-on-dark-soft transition-colors group-hover:text-on-dark">
                ↓
              </span>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-y-6 border-t border-line-dark pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-on-dark-soft">
                  {s.label}
                </span>
                <span className="mt-2 text-[22px] font-semibold leading-none tracking-tight text-on-dark sm:text-[26px]">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <SystemDrawing className="h-auto w-full max-w-130" />
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

function SystemDrawing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 520"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <g className="text-on-dark-soft/40">
        <path d="M 20 20 L 40 20 M 20 20 L 20 40" strokeWidth="1" />
        <path d="M 500 20 L 480 20 M 500 20 L 500 40" strokeWidth="1" />
        <path d="M 20 500 L 40 500 M 20 500 L 20 480" strokeWidth="1" />
        <path d="M 500 500 L 480 500 M 500 500 L 500 480" strokeWidth="1" />
      </g>

      <text
        x="20"
        y="60"
        className="fill-on-dark-soft/50 font-mono"
        fontSize="9"
        letterSpacing="1.5"
      >
        FIG.01 — SYSTEM MAP
      </text>
      <text
        x="500"
        y="60"
        textAnchor="end"
        className="fill-on-dark-soft/50 font-mono"
        fontSize="9"
        letterSpacing="1.5"
      >
        v.4.0
      </text>

      <circle
        cx="340"
        cy="200"
        r="150"
        className="text-on-dark/30"
        strokeWidth="1"
      />
      <circle
        cx="340"
        cy="200"
        r="90"
        className="text-on-dark/50"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <circle
        cx="180"
        cy="340"
        r="70"
        className="text-on-dark/40"
        strokeWidth="1"
      />

      <line
        x1="100"
        y1="160"
        x2="260"
        y2="260"
        className="text-on-dark/40"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <line
        x1="260"
        y1="260"
        x2="420"
        y2="380"
        className="text-on-dark/40"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <line
        x1="260"
        y1="260"
        x2="380"
        y2="120"
        className="text-on-dark/40"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <path
        d="M 100 160 Q 60 260 180 380"
        className="text-on-dark/30"
        strokeWidth="1"
        strokeDasharray="2 4"
      />

      <g>
        <rect
          x="60"
          y="130"
          width="80"
          height="60"
          rx="4"
          className="text-on-dark"
          fill="#0a0a0a"
          strokeWidth="1.5"
        />
        <text
          x="100"
          y="158"
          textAnchor="middle"
          className="fill-on-dark font-mono"
          fontSize="11"
          fontWeight="600"
        >
          ui
        </text>
        <text
          x="100"
          y="176"
          textAnchor="middle"
          className="fill-on-dark-soft font-mono"
          fontSize="8"
          letterSpacing="1"
        >
          /next/react
        </text>
      </g>

      <g>
        <rect
          x="340"
          y="90"
          width="80"
          height="60"
          rx="4"
          className="text-on-dark"
          fill="#0a0a0a"
          strokeWidth="1.5"
        />
        <text
          x="380"
          y="118"
          textAnchor="middle"
          className="fill-on-dark font-mono"
          fontSize="11"
          fontWeight="600"
        >
          data
        </text>
        <text
          x="380"
          y="136"
          textAnchor="middle"
          className="fill-on-dark-soft font-mono"
          fontSize="8"
          letterSpacing="1"
        >
          /pipelines
        </text>
      </g>

      <g>
        <rect
          x="380"
          y="350"
          width="80"
          height="60"
          rx="4"
          className="text-on-dark"
          fill="#0a0a0a"
          strokeWidth="1.5"
        />
        <text
          x="420"
          y="378"
          textAnchor="middle"
          className="fill-on-dark font-mono"
          fontSize="11"
          fontWeight="600"
        >
          cloud
        </text>
        <text
          x="420"
          y="396"
          textAnchor="middle"
          className="fill-on-dark-soft font-mono"
          fontSize="8"
          letterSpacing="1"
        >
          /aws · gcp
        </text>
      </g>

      <g>
        <circle
          cx="260"
          cy="260"
          r="34"
          className="text-on-dark"
          fill="#fafafa"
        />
        <text
          x="260"
          y="258"
          textAnchor="middle"
          className="fill-ink font-mono"
          fontSize="10"
          fontWeight="700"
        >
          API
        </text>
        <text
          x="260"
          y="272"
          textAnchor="middle"
          className="fill-ink font-mono"
          fontSize="8"
          letterSpacing="0.5"
        >
          /core
        </text>
      </g>

      <g className="text-on-dark">
        <circle cx="260" cy="260" r="6" fill="currentColor">
          <animate
            attributeName="r"
            values="6;9;6"
            dur="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.4;1"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <g className="text-on-dark-soft/60 font-mono" fontSize="8">
        <text x="20" y="490" letterSpacing="1">
          x: 0.00
        </text>
        <text x="100" y="490" letterSpacing="1">
          y: 0.00
        </text>
        <text x="500" y="490" textAnchor="end" letterSpacing="1">
          uptime 99.98%
        </text>
      </g>

      <line
        x1="0"
        y1="430"
        x2="520"
        y2="430"
        className="text-on-dark/20"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="440"
        x2="520"
        y2="440"
        className="text-on-dark/10"
        strokeWidth="1"
      />
    </svg>
  );
}
