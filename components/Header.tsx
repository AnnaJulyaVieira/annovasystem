"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/#capacidades", label: "Capacidades" },
  { href: "/trabalho", label: "Trabalho" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
          onClick={() => setOpen(false)}
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
            className="hidden text-[13px] text-ink-soft transition-colors hover:text-ink md:inline-block"
          >
            Falar com a gente
          </Link>
          <Link
            href="/contato"
            className="hidden h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-[12.5px] font-medium text-on-dark transition-transform hover:-translate-y-px sm:inline-flex"
          >
            Iniciar projeto
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-chip md:hidden"
          >
            {open ? <IconClose /> : <IconBurger />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={[
          "md:hidden",
          "fixed inset-x-0 top-14 z-40 origin-top overflow-hidden border-b border-line bg-white transition-[max-height,opacity] duration-300 ease-out",
          open
            ? "max-h-[calc(100vh-3.5rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 pt-6 pb-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            // navegação
          </span>
          <ul className="mt-4 flex flex-col divide-y divide-line border-y border-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-[20px] font-semibold tracking-tight text-ink"
                >
                  {item.label}
                  <span className="text-ink-soft" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-between rounded-full bg-ink px-5 py-3.5 text-[14px] font-medium text-on-dark"
            >
              Iniciar projeto
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="mailto:hello@annova.system"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-between rounded-full border border-line px-5 py-3.5 text-[14px] font-medium text-ink"
            >
              hello@annova.system
              <span className="text-ink-soft" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            belo horizonte · brasil
          </p>
        </nav>
      </div>
    </header>
  );
}

function IconBurger() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4 8 L20 8" />
      <path d="M4 16 L20 16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M6 6 L18 18" />
      <path d="M18 6 L6 18" />
    </svg>
  );
}
