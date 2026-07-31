import type { Metadata } from "next";
import BackLink from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Contato — AG2 Tech",
  description:
    "Conte o problema em poucas linhas. Em até 48h você recebe um retorno com um caminho possível.",
};

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

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 lg:pt-20">
          <BackLink label="Início" />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pt-10 pb-20 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:pt-12 lg:pb-28">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-soft">
              <span className="h-px w-8 bg-ink-soft/60" />
              <span>// briefing</span>
            </div>
            <h1 className="mt-6 max-w-xl text-balance text-[40px] font-bold leading-[0.98] tracking-[-0.02em] text-ink sm:text-[56px] lg:text-[64px]">
              Conta pra gente
              <br />
              <span className="text-ink-soft">o que tá travando.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Em até 48h um lead técnico responde com uma leitura do problema —
              mesmo que a gente conclua que não somos o melhor estúdio pra
              esse projeto.
            </p>

            <ul className="mt-12 space-y-5">
              <li className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                  email
                </span>
                <a
                  href="mailto:hello@ag2tech.com.br"
                  className="text-[15px] text-ink underline underline-offset-4"
                >
                  hello@ag2tech.com.br
                </a>
              </li>
              <li className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                  imprensa
                </span>
                <a
                  href="mailto:imprensa@ag2tech.com.br"
                  className="text-[15px] text-ink underline underline-offset-4"
                >
                  imprensa@ag2tech.com.br
                </a>
              </li>
              <li className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                  gente
                </span>
                <a
                  href="mailto:gente@ag2tech.com.br"
                  className="text-[15px] text-ink underline underline-offset-4"
                >
                  gente@ag2tech.com.br
                </a>
              </li>
              <li className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                  telefone
                </span>
                <a
                  href="tel:+5531984105960"
                  className="text-[15px] text-ink underline underline-offset-4"
                >
                  31 98410-5960
                </a>
              </li>
            </ul>
          </div>

          <form
            action="mailto:hello@ag2tech.com.br"
            method="post"
            encType="text/plain"
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
              <Field
                label="Cargo"
                name="cargo"
                placeholder="Head of Operations"
              />
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
                Enviar briefing
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-bg-dark text-on-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
                Como respondemos
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-on-dark">
                Email de um lead técnico em até 48h úteis com uma leitura
                inicial do problema. Sem comercial intermediário.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
                Próximo passo
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-on-dark">
                Se fizer sentido, marcamos 45 minutos para entender o contexto
                e devolver um plano de descoberta com prazo e custo.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
                Confidencialidade
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-on-dark">
                Todo briefing fica restrito ao time técnico. Assinamos NDA
                antes da primeira conversa, se for o caso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
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
            <input
              type="radio"
              name={name}
              value={opt}
              className="sr-only"
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
