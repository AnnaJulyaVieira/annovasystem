"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cases } from "@/lib/cases";

type DropdownItem = { label: string; href: string; desc?: string };
type NavItem = {
  label: string;
  href?: string;
  items?: DropdownItem[];
};

const navItems: NavItem[] = [
  {
    label: "Capacidades",
    href: "/#capacidades",
    items: [
      {
        label: "O que fazemos",
        href: "/#capacidades",
        desc: "Produtos, integrações, dados e cloud",
      },
      {
        label: "O que entregamos",
        href: "/#entregas",
        desc: "Formatos e escopo de projeto",
      },
      {
        label: "Como trabalhamos",
        href: "/#processo",
        desc: "Do discovery à operação",
      },
    ],
  },
  {
    label: "Trabalho",
    href: "/trabalho",
    items: [
      ...cases.map((c) => ({
        label: c.client,
        href: `/trabalho/${c.slug}`,
        desc: c.industry,
      })),
      {
        label: "Ver todos os cases",
        href: "/trabalho",
        desc: "Tudo que já entregamos",
      },
    ],
  },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
      className="sticky top-0 z-50 w-full border-b border-line bg-white/85 backdrop-blur"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          aria-label="Annova System"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Annova System"
            width={520}
            height={120}
            priority
            className="h-15 w-auto"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isOpen = hovered === item.label;
              const hasDropdown = !!item.items;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    setHovered(hasDropdown ? item.label : null)
                  }
                >
                  {hasDropdown ? (
                    <Link
                      href={item.href ?? "#"}
                      aria-expanded={isOpen}
                      onClick={() => setHovered(null)}
                      className={[
                        "flex items-center gap-1.5 px-3 py-2 text-[13px] transition-colors",
                        isOpen
                          ? "text-ink"
                          : "text-ink-soft hover:text-ink",
                      ].join(" ")}
                    >
                      {item.label}
                      <Chevron
                        className={[
                          "h-2.5 w-2.5 transition-transform",
                          isOpen ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </Link>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center px-3 py-2 text-[13px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Buscar"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-chip hover:text-ink md:inline-flex"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className="hidden h-9 items-center gap-1 rounded-full px-3 text-[12.5px] font-medium text-ink-soft transition-colors hover:bg-chip hover:text-ink md:inline-flex"
            aria-label="Selecionar idioma"
          >
            BR
            <Chevron className="h-2.5 w-2.5" />
          </button>

          <span className="hidden h-5 w-px bg-line md:block" />

          <Link
            href="/contato"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-[13px] font-medium text-on-dark transition-transform hover:-translate-y-px md:inline-flex"
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
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-chip md:hidden"
          >
            {open ? <IconClose /> : <IconBurger />}
          </button>
        </div>
      </div>

      {navItems.map((item) => {
        if (!item.items) return null;
        const isOpen = hovered === item.label;
        return (
          <div
            key={item.label}
            onMouseEnter={() => setHovered(item.label)}
            className={[
              "absolute inset-x-0 top-full hidden border-b border-line bg-white shadow-[0_30px_60px_-30px_rgba(10,10,10,0.18)] transition-all duration-200 md:block",
              isOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0",
            ].join(" ")}
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 lg:grid-cols-3">
                {item.items.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      href={sub.href}
                      onClick={() => setHovered(null)}
                      className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-chip"
                    >
                      <span className="flex items-center gap-1.5 text-[13.5px] font-medium text-ink">
                        {sub.label}
                        <span
                          aria-hidden="true"
                          className="text-ink-soft transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                      {sub.desc && (
                        <span className="mt-0.5 block text-[12px] leading-snug text-ink-soft">
                          {sub.desc}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={[
          "md:hidden",
          "fixed inset-x-0 top-16 z-40 origin-top overflow-y-auto border-b border-line bg-white transition-[max-height,opacity] duration-300 ease-out",
          open
            ? "max-h-[calc(100vh-4rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 pt-6 pb-8">
          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {navItems.map((item) => {
              const isExpanded = mobileExpanded === item.label;
              if (!item.items) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href!}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[18px] font-semibold tracking-tight text-ink"
                    >
                      {item.label}
                      <span className="text-ink-soft" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded(isExpanded ? null : item.label)
                    }
                    aria-expanded={isExpanded}
                    className="flex w-full items-center justify-between py-4 text-left text-[18px] font-semibold tracking-tight text-ink"
                  >
                    {item.label}
                    <Chevron
                      className={[
                        "h-3 w-3 transition-transform",
                        isExpanded ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>
                  <div
                    className={[
                      "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                      isExpanded
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0",
                    ].join(" ")}
                  >
                    <ul className="pb-3">
                      {item.items.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between py-2.5 text-[15px] text-ink-soft"
                          >
                            {sub.label}
                            <span aria-hidden="true">→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[12.5px] font-medium text-ink-soft"
              aria-label="Selecionar idioma"
            >
              BR
              <Chevron className="h-2.5 w-2.5" />
            </button>
            <button
              type="button"
              aria-label="Buscar"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft"
            >
              <SearchIcon />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3">
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

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 4.5 L6 7.5 L9 4.5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.2 13.2 L17 17" />
    </svg>
  );
}
