import Link from "next/link";

type Tone = "light" | "dark";

export default function BackLink({
  href = "/",
  label = "Voltar",
  tone = "light",
  className = "",
}: {
  href?: string;
  label?: string;
  tone?: Tone;
  className?: string;
}) {
  const colors =
    tone === "dark"
      ? "text-on-dark-soft hover:text-on-dark"
      : "text-ink-soft hover:text-ink";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${colors} ${className}`}
    >
      <span className="transition-transform group-hover:-translate-x-0.5">
        ←
      </span>
      {label}
    </Link>
  );
}
