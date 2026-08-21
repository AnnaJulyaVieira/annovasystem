import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato — AG2 Tech",
  description:
    "Conte o problema em poucas linhas. Em até 48h você recebe um retorno com um caminho possível.",
};

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

          <ContactForm />
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
                Retorno de um lead técnico em até 48h úteis com uma leitura
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
