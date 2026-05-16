const clients = [
  { name: "Globant", render: () => <Globant /> },
  { name: "RD Station", render: () => <RDStation /> },
  { name: "Stone", render: () => <Stone /> },
  { name: "TOTVS", render: () => <TOTVS /> },
  { name: "VTEX", render: () => <VTEX /> },
  { name: "Porto Seguro", render: () => <PortoSeguro /> },
];

export default function Clients() {
  const row = [...clients, ...clients];
  return (
    <section
      aria-labelledby="clients-heading"
      className="relative w-full overflow-hidden border-y border-line bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2
          id="clients-heading"
          className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
        >
          times que confiam no nosso trabalho
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

        <ul className="flex w-max animate-marquee items-center gap-14 pb-12 pr-14">
          {row.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              className="flex h-10 shrink-0 items-center text-ink-soft grayscale transition-colors hover:text-ink"
              aria-label={c.name}
            >
              {c.render()}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const baseText =
  "text-[18px] font-semibold tracking-tight md:text-[20px]";

function Globant() {
  return (
    <div className={`flex items-center gap-1.5 ${baseText}`}>
      <span>Globant</span>
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M3 12 L21 3 L21 21 Z" />
      </svg>
    </div>
  );
}

function RDStation() {
  return (
    <div className={`flex items-center gap-2 ${baseText}`}>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M4 4 L20 4 L12 14 L20 20 L4 20 L12 14 Z" />
      </svg>
      <span className="font-bold">
        RD <span className="font-light">STATION</span>
      </span>
    </div>
  );
}

function Stone() {
  return (
    <div className={`flex items-center gap-1 ${baseText}`}>
      <span className="italic">stone</span>
      <span className="-mb-1 inline-block h-1.5 w-1.5 rounded-full bg-current" />
    </div>
  );
}

function TOTVS() {
  return (
    <div className={`flex items-center gap-2 ${baseText}`}>
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12 H21 M12 3 V21" />
      </svg>
      <span className="font-bold tracking-wide">TOTVS</span>
    </div>
  );
}

function VTEX() {
  return (
    <div className={`flex items-center gap-2 ${baseText}`}>
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M2 4 H22 L18 10 H6 Z M8 12 H22 L14 20 Z" />
      </svg>
      <span className="font-bold">vtex</span>
    </div>
  );
}

function PortoSeguro() {
  return (
    <div className={`flex items-center gap-2 ${baseText}`}>
      <span className="flex flex-col leading-none">
        <span className="text-[12px] font-bold tracking-[0.18em]">PORTO</span>
        <span className="text-[12px] font-bold tracking-[0.18em]">SEGURO</span>
      </span>
      <span className="inline-block h-7 w-px bg-current/60" />
    </div>
  );
}
