"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { cases } from "@/lib/cases";

type SearchEntry = {
  label: string;
  href: string;
  group: "Páginas" | "Cases";
  desc?: string;
  keywords: string;
};

const pages: SearchEntry[] = [
  { label: "Início", href: "/", group: "Páginas", keywords: "home inicio" },
  {
    label: "Capacidades",
    href: "/#capacidades",
    group: "Páginas",
    desc: "O que fazemos",
    keywords: "o que fazemos produtos integracoes dados cloud",
  },
  {
    label: "O que entregamos",
    href: "/#entregas",
    group: "Páginas",
    desc: "Formatos e escopo de projeto",
    keywords: "entregas formatos escopo",
  },
  {
    label: "Como trabalhamos",
    href: "/#processo",
    group: "Páginas",
    desc: "Do discovery à operação",
    keywords: "processo discovery operacao metodologia",
  },
  {
    label: "Trabalho",
    href: "/trabalho",
    group: "Páginas",
    desc: "Todos os cases",
    keywords: "cases portfolio projetos clientes",
  },
  { label: "Sobre", href: "/sobre", group: "Páginas", keywords: "sobre quem somos time" },
  {
    label: "Contato",
    href: "/contato",
    group: "Páginas",
    desc: "Falar com especialista",
    keywords: "contato falar especialista iniciar projeto orcamento",
  },
];

const caseEntries: SearchEntry[] = cases.map((c) => ({
  label: c.client,
  href: `/trabalho/${c.slug}`,
  group: "Cases",
  desc: c.industry,
  keywords: `${c.industry} ${c.title} ${c.summary} ${c.stack.join(" ")}`,
}));

const allEntries: SearchEntry[] = [...pages, ...caseEntries];

/** Lowercase + strip accents for forgiving, accent-insensitive matching. */
function fold(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const terms = fold(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return allEntries;
    return allEntries.filter((entry) => {
      const haystack = fold(
        `${entry.label} ${entry.desc ?? ""} ${entry.keywords}`,
      );
      return terms.every((term) => haystack.includes(term));
    });
  }, [query]);

  // Reset state, focus the input and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const id = window.setTimeout(() => inputRef.current?.focus(), 40);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keep the active index within bounds as results change.
  useEffect(() => {
    setActive((i) => Math.min(i, Math.max(results.length - 1, 0)));
  }, [results.length]);

  if (!open) return null;

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active].href);
    }
  };

  let runningIndex = -1;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Buscar no site"
      onKeyDown={onKeyDown}
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-white shadow-[0_40px_80px_-30px_rgba(10,10,10,0.4)]">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <SearchIcon />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            placeholder="Buscar páginas e cases..."
            className="h-14 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
          />
          <kbd className="hidden rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">
            ESC
          </kbd>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-3 py-8 text-center text-[13px] text-ink-soft">
              Nenhum resultado para{" "}
              <span className="font-medium text-ink">“{query}”</span>
            </p>
          ) : (
            (["Páginas", "Cases"] as const).map((group) => {
              const groupResults = results.filter((r) => r.group === group);
              if (groupResults.length === 0) return null;
              return (
                <div key={group} className="mb-1">
                  <p className="px-3 pb-1 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {group}
                  </p>
                  {groupResults.map((entry) => {
                    runningIndex += 1;
                    const isActive = runningIndex === active;
                    const index = runningIndex;
                    return (
                      <button
                        key={entry.href}
                        type="button"
                        onClick={() => go(entry.href)}
                        onMouseMove={() => setActive(index)}
                        className={[
                          "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                          isActive ? "bg-chip" : "hover:bg-chip",
                        ].join(" ")}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-[13.5px] font-medium text-ink">
                            {entry.label}
                          </span>
                          {entry.desc && (
                            <span className="block truncate text-[12px] text-ink-soft">
                              {entry.desc}
                            </span>
                          )}
                        </span>
                        <span
                          aria-hidden="true"
                          className={[
                            "shrink-0 text-ink-soft transition-opacity",
                            isActive ? "opacity-100" : "opacity-0",
                          ].join(" ")}
                        >
                          ↵
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
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
      className="h-4 w-4 shrink-0 text-ink-soft"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.2 13.2 L17 17" />
    </svg>
  );
}
