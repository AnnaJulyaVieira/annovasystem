"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cases } from "@/lib/cases";
import SearchModal from "./SearchModal";

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
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Open search with Cmd/Ctrl + K from anywhere on the page.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      id="topo"
      className="sticky top-0 z-50 w-full border-b border-line-dark bg-bg-dark text-on-dark"
      onMouseLeave={() => setHovered(null)}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          aria-label="AG2 Tech"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-trimmed.png"
            alt="AG2 Tech"
            width={1331}
            height={201}
            priority
            className="h-7 w-auto brightness-0 invert"
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
                          ? "text-on-dark"
                          : "text-on-dark-soft hover:text-on-dark",
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
                      className="flex items-center px-3 py-2 text-[13px] text-on-dark-soft transition-colors hover:text-on-dark"
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
            onClick={() => setSearchOpen(true)}
            className="hidden h-9 w-9 items-center justify-center rounded-full text-on-dark-soft transition-colors hover:bg-line-dark hover:text-on-dark md:inline-flex"
          >
            <SearchIcon />
          </button>

          <span className="hidden h-5 w-px bg-line-dark md:block" />

          <Link
            href="/contato"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-on-dark px-5 text-[13px] font-medium text-ink transition-transform hover:-translate-y-px md:inline-flex"
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
            className="grid h-10 w-10 place-items-center rounded-full text-on-dark transition-colors hover:bg-line-dark md:hidden"
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
              "absolute inset-x-0 top-full hidden border-b border-line-dark bg-bg-dark text-on-dark shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] transition-all duration-200 md:block",
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
                      className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-line-dark"
                    >
                      <span className="flex items-center gap-1.5 text-[13.5px] font-medium text-on-dark">
                        {sub.label}
                        <span
                          aria-hidden="true"
                          className="text-on-dark-soft transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                      {sub.desc && (
                        <span className="mt-0.5 block text-[12px] leading-snug text-on-dark-soft">
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
          "fixed inset-x-0 top-16 z-40 origin-top overflow-y-auto border-b border-line-dark bg-bg-dark text-on-dark transition-[max-height,opacity] duration-300 ease-out",
          open
            ? "max-h-[calc(100vh-4rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 pt-6 pb-8">
          <ul className="flex flex-col divide-y divide-line-dark border-y border-line-dark">
            {navItems.map((item) => {
              const isExpanded = mobileExpanded === item.label;
              if (!item.items) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href!}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[18px] font-semibold tracking-tight text-on-dark"
                    >
                      {item.label}
                      <span className="text-on-dark-soft" aria-hidden="true">
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
                    className="flex w-full items-center justify-between py-4 text-left text-[18px] font-semibold tracking-tight text-on-dark"
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
                            className="flex items-center justify-between py-2.5 text-[15px] text-on-dark-soft"
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

          <button
            type="button"
            onClick={() => {
              setOpen(false);
              setSearchOpen(true);
            }}
            className="mt-6 flex w-full items-center gap-2.5 rounded-full border border-line-dark px-4 py-3 text-[14px] font-medium text-on-dark-soft"
          >
            <SearchIcon />
            Buscar no site
          </button>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-between rounded-full bg-on-dark px-5 py-3.5 text-[14px] font-medium text-ink"
            >
              Iniciar projeto
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="mailto:hello@ag2tech.com.br"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-between rounded-full border border-line-dark px-5 py-3.5 text-[14px] font-medium text-on-dark"
            >
              hello@ag2tech.com.br
              <span className="text-on-dark-soft" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
            belo horizonte · brasil
          </p>
        </nav>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
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
