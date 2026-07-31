import Image from "next/image";

const clients = [
  {
    name: "Auto Truck",
    src: "/logoAutoTruck.png",
    width: 200,
    height: 64,
    imgClassName: "brightness-0",
  },
  {
    name: "Tereza Personalizados e Festas",
    src: "/logoTerezaPersonalizados.png",
    width: 220,
    height: 72,
    imgClassName: "brightness-0",
  },
  {
    name: "GLT",
    src: "/logoGlt.jpeg",
    width: 200,
    height: 64,
    imgClassName: "invert mix-blend-multiply",
  },
  {
    name: "Cannon Parts",
    src: "/cannon-parts-logo.png",
    width: 200,
    height: 64,
    imgClassName: "brightness-0",
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
            className="flex h-12 shrink-0 items-center sm:h-14"
            aria-label={c.name}
          >
            <Image
              src={c.src}
              alt={c.name}
              width={c.width}
              height={c.height}
              className={`h-full w-auto object-contain ${c.imgClassName}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
