import Image from "next/image";
import Link from "next/link";

const footerCols = [
  {
    title: "Estúdio",
    links: [
      { label: "Capacidades", href: "/#capacidades" },
      { label: "Entregas", href: "/#entregas" },
      { label: "Processo", href: "/#processo" },
      { label: "Trabalho", href: "/trabalho" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Processo", href: "/#processo" },
      { label: "Imprensa", href: "/sobre#imprensa" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "hello@ag2tech.com.br", href: "mailto:hello@ag2tech.com.br" },
      { label: "Belo Horizonte · Brasil", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-bg-dark text-on-dark">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
        <div className="grid grid-cols-2 gap-10 border-b border-line-dark pb-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="AG2 Tech" className="inline-block">
              <Image
                src="/logo-trimmed.png"
                alt="AG2 Tech"
                width={1331}
                height={201}
                className="h-8 w-auto invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-on-dark-soft">
              Estúdio de engenharia digital. Construindo software que parece
              simples — desde 2021.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-on-dark transition-colors hover:text-on-dark-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
            © 2026 AG2 Tech · todos os direitos reservados
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
            v 4.0 · feito em belo horizonte
          </p>
        </div>
      </div>
    </footer>
  );
}
