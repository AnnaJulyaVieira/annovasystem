"use client";

import { useRef, type FormEvent } from "react";

const WHATSAPP_NUMBER = "5531984105960";

const budgets = [
  "Até R$ 50k",
  "R$ 50k–150k",
  "R$ 150k–400k",
  "Acima de R$ 400k",
  "Ainda não sei",
];

const scopes = [
  "Produto novo",
  "Reescrita / refactor",
  "Integrações",
  "Dados & dashboards",
  "Cloud & DevOps",
  "Outro",
];

const startTimes = ["Imediato", "30–60 dias", "60–90 dias", "Sem urgência"];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const get = (key: string) => (data.get(key)?.toString().trim() ?? "");

    const nome = get("nome");
    const email = get("email");
    const empresa = get("empresa");
    const cargo = get("cargo");
    const escopo = get("escopo");
    const orcamento = get("orcamento");
    const inicio = get("inicio");
    const mensagem = get("mensagem");

    const lines = [
      `Olá! Meu nome é ${nome || "..."}${empresa ? `, da ${empresa}` : ""}.`,
      cargo && `Cargo: ${cargo}`,
      escopo && `Tipo de projeto: ${escopo}`,
      orcamento && `Orçamento: ${orcamento}`,
      inicio && `Início: ${inicio}`,
      mensagem && `\n${mensagem}`,
      email && `\nMeu email: ${email}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-2xl border border-line bg-white p-7 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nome" name="nome" placeholder="Como te chamam" />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="voce@empresa.com"
        />
        <Field label="Empresa" name="empresa" placeholder="AG2 S/A" />
        <Field label="Cargo" name="cargo" placeholder="Head of Operations" />
      </div>

      <ChipGroup label="Tipo de projeto" name="escopo" options={scopes} />
      <ChipGroup label="Orçamento" name="orcamento" options={budgets} />
      <ChipGroup label="Início" name="inicio" options={startTimes} />

      <div className="flex flex-col gap-2">
        <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          Conte o problema em poucas linhas
        </label>
        <textarea
          name="mensagem"
          rows={6}
          placeholder="O que tá travando hoje? O que seria sucesso em 6 meses?"
          className="w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
          resposta em até 48h úteis
        </span>
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium text-on-dark transition-transform hover:-translate-y-px"
        >
          Enviar pelo WhatsApp
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-line bg-white px-4 text-[14.5px] text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
      />
    </div>
  );
}

function ChipGroup({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[12.5px] text-ink-soft transition-colors hover:border-ink hover:text-ink has-checked:border-ink has-checked:bg-ink has-checked:text-on-dark"
          >
            <input type="radio" name={name} value={opt} className="sr-only" />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
