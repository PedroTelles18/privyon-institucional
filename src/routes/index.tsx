import { createFileRoute } from "@tanstack/react-router";
import heroDashboard from "@/assets/hero-dashboard.png";

// URL do sistema real (app.privyon.com.br). Configurável via .env
// para apontar pro ambiente local/staging durante o desenvolvimento.
const APP_URL = import.meta.env.VITE_APP_URL ?? "https://app.privyon.com.br";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Privyon — Auditoria de conformidade com a LGPD" },
      {
        name: "description",
        content:
          "Audite, monitore e comprove a conformidade da sua empresa com a LGPD em uma única plataforma: diagnóstico, riscos, planos de ação e relatórios.",
      },
      { property: "og:title", content: "Privyon — Auditoria de conformidade com a LGPD" },
      {
        property: "og:description",
        content:
          "Diagnóstico de adequação, mapeamento de tratamentos, gestão de riscos e relatórios prontos para auditoria.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Para quem", href: "#para-quem" },
  { label: "FAQ", href: "#faq" },
];

const modules = [
  {
    title: "Diagnóstico de adequação",
    body: "Questionários baseados nos artigos da LGPD geram uma pontuação objetiva de maturidade por área da empresa.",
  },
  {
    title: "Mapeamento de tratamentos",
    body: "Registre bases legais, finalidades, dados sensíveis, prazos de retenção e compartilhamentos com terceiros.",
  },
  {
    title: "Riscos e impacto",
    body: "Matriz de risco automática com priorização por severidade e apoio à elaboração do RIPD.",
  },
  {
    title: "Planos de ação",
    body: "Transforme cada não conformidade em tarefa com responsável, prazo e evidência anexada.",
  },
  {
    title: "Gestão de fornecedores",
    body: "Avalie operadores e suboperadores com trilhas de auditoria e reavaliações periódicas.",
  },
  {
    title: "Relatórios de auditoria",
    body: "Exporte relatórios executivos e técnicos com histórico de evolução para demonstrar diligência.",
  },
];

const steps = [
  {
    step: "01",
    title: "Diagnostique",
    body: "A empresa responde às trilhas de auditoria guiadas e a plataforma calcula o nível de aderência à LGPD.",
  },
  {
    step: "02",
    title: "Priorize",
    body: "Riscos e lacunas são classificados por criticidade, com recomendações práticas para cada apontamento.",
  },
  {
    step: "03",
    title: "Comprove",
    body: "Planos de ação, evidências e relatórios versionados mantêm sua conformidade documentada e auditável.",
  },
];

const audience = [
  "Encarregados (DPO) que precisam centralizar evidências em um só lugar",
  "Escritórios de advocacia e consultorias que auditam várias empresas",
  "Áreas de TI e segurança que precisam medir e evoluir a maturidade",
  "Empresas que respondem a due diligence, editais ou clientes corporativos",
];

const faq = [
  {
    q: "A plataforma substitui a atuação de um DPO?",
    a: "Não. A Privyon organiza, mede e documenta o programa de privacidade — a decisão jurídica continua com o encarregado e a assessoria da empresa.",
  },
  {
    q: "Quanto tempo leva a primeira auditoria?",
    a: "As trilhas guiadas costumam ser concluídas em poucas sessões de trabalho, já entregando pontuação e plano de ação inicial.",
  },
  {
    q: "Consigo auditar mais de uma empresa na mesma conta?",
    a: "Sim. O ambiente é multiempresa, ideal para grupos econômicos, consultorias e escritórios.",
  },
  {
    q: "Os relatórios servem para apresentar à ANPD ou a clientes?",
    a: "Os relatórios reúnem escopo, apontamentos, evidências e histórico de evolução, no formato usado em demonstrações de diligência.",
  },
];

function Logo() {
  return (
    <span className="flex items-center gap-2 font-display text-lg font-bold">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l7 3v6c0 4.2-2.9 7.7-7 9-4.1-1.3-7-4.8-7-9V6l7-3z" />
          <path d="M9 12.5l2 2 4-4.5" />
        </svg>
      </span>
      Privyon
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="surface-card mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3">
          <Logo />
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={APP_URL}
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Entrar
            </a>
            <a
              href="#contato"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Falar com especialista
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-glow relative overflow-hidden px-4 pt-36 pb-20 text-center md:pt-44">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs tracking-wide text-muted-foreground uppercase">
              Auditoria de conformidade LGPD
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold md:text-6xl">
              Sua empresa trata dados pessoais.
              <br />
              <span className="text-gradient">A prova disso é auditável?</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              A Privyon transforma a adequação à LGPD em um processo mensurável: diagnóstico,
              riscos priorizados, planos de ação com evidências e relatórios prontos para auditoria.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contato"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar demonstração
              </a>
              <a
                href="#plataforma"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Ver a plataforma
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <img
              src={heroDashboard}
              alt="Painel da Privyon com pontuação de conformidade LGPD, riscos e planos de ação"
              width={1408}
              height={992}
              className="w-full rounded-2xl border border-border shadow-[var(--shadow-glow)]"
            />
          </div>
        </section>

        {/* Statement */}
        <section className="px-4 py-20">
          <p className="mx-auto max-w-4xl text-center text-2xl leading-snug font-medium md:text-4xl">
            <span className="font-display">Conformidade não é um documento.</span>{" "}
            <span className="text-muted-foreground">
              É um ciclo contínuo de auditar, corrigir e comprovar — e é exatamente isso que a
              plataforma operacionaliza.
            </span>
          </p>
        </section>

        {/* Plataforma */}
        <section id="plataforma" className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm tracking-wide text-primary uppercase">A plataforma</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              Todos os módulos de um programa de privacidade em um só ambiente
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((m) => (
                <article key={m.title} className="surface-card rounded-2xl p-6">
                  <h3 className="text-lg font-semibold">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm tracking-wide text-primary uppercase">Como funciona</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
              Três etapas para sair da incerteza e chegar à evidência
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {steps.map((s) => (
                <article key={s.step} className="surface-card rounded-2xl p-7">
                  <span className="font-display text-3xl font-bold text-primary">{s.step}</span>
                  <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem */}
        <section id="para-quem" className="px-4 py-20">
          <div className="surface-card mx-auto max-w-5xl rounded-3xl p-8 md:p-12">
            <p className="text-sm tracking-wide text-primary uppercase">Para quem é</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Feito para quem responde pelos dados
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {audience.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-sm tracking-wide text-primary uppercase">Dúvidas</p>
            <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">Perguntas frequentes</h2>
            <div className="mt-10 space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="surface-card group rounded-2xl p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold">
                    {item.q}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="hero-glow px-4 py-24 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold md:text-5xl">
              Vamos medir a conformidade da sua empresa
            </h2>
            <p className="mt-5 text-muted-foreground">
              Em uma conversa de 30 minutos mostramos como a plataforma conduz a auditoria e quais
              evidências você passa a ter em mãos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:contato@privyon.com.br"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar demonstração
              </a>
              <a
                href="mailto:contato@privyon.com.br"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                contato@privyon.com.br
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <Logo />
          <p>© {new Date().getFullYear()} Privyon. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
