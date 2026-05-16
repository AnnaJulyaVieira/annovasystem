"use client";

import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/#capacidades", label: "Capacidades" },
  { href: "/trabalho", label: "Trabalho" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header
      id="topo"
      className="sticky top-0 z-50 w-full border-b border-line bg-white/80 backdrop-blur"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Annova System"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Annova System"
            width={520}
            height={120}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[13px] text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contato"
            className="hidden text-[13px] text-ink-soft transition-colors hover:text-ink sm:inline-block"
          >
            Falar com a gente
          </Link>
          <Link
            href="/contato"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-[12.5px] font-medium text-on-dark transition-transform hover:-translate-y-px"
          >
            Iniciar projeto
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
