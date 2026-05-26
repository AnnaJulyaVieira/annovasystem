import Image from "next/image";

const clients = [
  {
    name: "Auto Truck",
    src: "/logoAutoTruck.png",
    width: 200,
    height: 64,
    imgClassName: "h-14 w-auto brightness-0 sm:h-16",
  },
  {
    name: "Tereza Personalizados e Festas",
    src: "/logoTerezaPersonalizados.png",
    width: 220,
    height: 72,
    imgClassName: "h-10 w-auto brightness-0 sm:h-12",
  },
  {
    name: "GLT",
    src: "/logoGlt.jpeg",
    width: 200,
    height: 64,
    imgClassName: "h-14 w-auto invert mix-blend-multiply sm:h-16",
  },
];

export default function Clients() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="relative w-full border-y border-line bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h2
          id="clients-heading"
          className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
        >
          times que confiam no nosso trabalho
        </h2>
      </div>

      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-6 pb-14 sm:gap-x-24">
        {clients.map((c) => (
          <li
            key={c.name}
            className="flex shrink-0 items-center"
            aria-label={c.name}
          >
            <Image
              src={c.src}
              alt={c.name}
              width={c.width}
              height={c.height}
              className={c.imgClassName}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
